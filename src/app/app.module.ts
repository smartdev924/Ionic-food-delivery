import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";
import { IonicStorageModule } from "@ionic/storage";

import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { ListComponent } from "./list/list.component";
import { ProfileComponent } from "./profile/profile.component";
import { FormsModule } from "@angular/forms";
import { OrderComponent } from "./order/order.component";
import { DetailsComponent } from "./details/details.component";
import { initialize } from "./bucket";

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ProfileComponent,
    OrderComponent,
    DetailsComponent,
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot(),
    AppRoutingModule,
    FormsModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    initialize({ apikey: "3c0k8e4crku8bufke" });
  }
}
