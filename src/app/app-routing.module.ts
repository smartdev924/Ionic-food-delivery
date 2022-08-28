import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { ListComponent } from "./list/list.component";
import { ProfileComponent } from "./profile/profile.component";
import { OrderComponent } from "./order/order.component";

const routes: Routes = [
  {
    path: "home",
    loadChildren: () =>
      import("./home/home.module").then((m) => m.HomePageModule),
  },
  {
    path: "list",
    component: ListComponent,
  },
  {
    path: "profile",
    component: ProfileComponent,
  },
  {
    path: "order",
    component: OrderComponent,
  },

  {
    path: "",
    redirectTo: "home",
    pathMatch: "full",
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
