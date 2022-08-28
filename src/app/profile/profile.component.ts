import { Component, OnInit, OnDestroy } from "@angular/core";
import { StorageService } from "../service/storage.service";
import { UserService } from "../service/user.service";
import { tap, switchMap, map, takeUntil } from "rxjs/operators";
import { ActivatedRoute, Router } from "@angular/router";
import { ToastController } from "@ionic/angular";
import { Subject } from "rxjs";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"],
})
export class ProfileComponent implements OnInit, OnDestroy {
  user;

  constructor(
    private storageService: StorageService,
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    public toastController: ToastController,
    private router: Router
  ) {}

  onDestroy = new Subject();

  getNewUser() {
    return {
      email: undefined,
      name: undefined,
      password: undefined,
      phone: undefined,
      surname: undefined,
      _id: undefined,
    };
  }

  ngOnInit() {
    this.activatedRoute.queryParams
      .pipe(
        takeUntil(this.onDestroy),
        switchMap(() =>
          this.userService.get(this.storageService.getUserId()).pipe(
            map((user) => {
              if (!user) {
                return this.getNewUser();
              } else {
                return user;
              }
            })
          )
        ),
        tap((user) => (this.user = user))
      )
      .subscribe();
  }

  register() {
    this.userService.register(this.user);
    this.user = this.getNewUser();
    this.toastController
      .create({
        message: `Successfully registered.`,
        duration: 2000,
      })
      .then((toast) => toast.present());
    this.router.navigate(["home"]);
  }

  back() {
    this.user = this.getNewUser();
    this.router.navigate(["home"]);
  }

  save() {
    this.userService
      .update(this.user)
      .toPromise()
      .then((user) => {
        this.user = user;
        this.toastController
          .create({
            message: `Updated.`,
            duration: 2000,
          })
          .then((toast) => toast.present());
      })
      .catch(() =>
        this.toastController
          .create({
            message: `Failed!`,
            duration: 2000,
          })
          .then((toast) => toast.present())
      );
  }

  ngOnDestroy() {
    this.onDestroy.next();
  }
}
