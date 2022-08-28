import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { UserService } from "../service/user.service";
import { take, tap } from "rxjs/operators";
import { ToastController } from "@ionic/angular";
import { StorageService } from "../service/storage.service";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  username;
  password;

  constructor(
    private router: Router,
    private userService: UserService,
    public toastController: ToastController,
    private storageService: StorageService
  ) {}

  login() {
    this.userService
      .find(this.username, this.password)
      .pipe(
        take(1),
        tap((user) => {
          if (user) {
            this.storageService.setUser(user._id);
            this.toastController
              .create({
                message: `Successfully logged in.`,
                duration: 2000,
              })
              .then((toast) => toast.present());
            this.router.navigate(["list"]);
          } else {
            this.toastController
              .create({
                message: `Username or password incorrect!`,
                duration: 2000,
              })
              .then((toast) => toast.present());
          }
        })
      )
      .subscribe();
  }

  register() {
    this.router.navigate(["profile"]);
  }
}
