import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { FoodService } from "../service/food.service";
import { ToastController, ModalController } from "@ionic/angular";
import { DetailsComponent } from "../details/details.component";
import { Food, food } from "../bucket";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"],
})
export class ListComponent implements OnInit {
  foods: Promise<Food[]>;

  constructor(
    private foodService: FoodService,
    public toastController: ToastController,
    public modalController: ModalController
  ) {}

  ngOnInit() {
    this.foods = this.foodService.list(true);
  }

  openModal(food: Food) {
    this.modalController
      .create({
        component: DetailsComponent,
        cssClass: "modal",
        componentProps: {
          food,
        },
      })
      .then((modal) => modal.present());
  }
}
