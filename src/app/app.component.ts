import { Component } from "@angular/core";

import { Platform, MenuController } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { Router } from "@angular/router";
import { StorageService } from "./service/storage.service";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
})
export class AppComponent {
  loggedIn = true;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private storageService: StorageService,
    private menuCtrl: MenuController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  isLoggedIn() {
    return this.storageService.getUserId() ? true : false;
  }

  logOut() {
    this.storageService.logOut();
    this.router.navigate(["home"]);
  }

  toggleMenu() {
    this.menuCtrl.toggle();
  }
}
