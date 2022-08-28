import { Component, Input, OnInit } from "@angular/core";
import { ModalController, ToastController } from "@ionic/angular";
import { Food, Ingredient, Order } from "../bucket";
import { OrderService } from "../service/order.service";

@Component({
  selector: "app-details",
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.scss"],
})
export class DetailsComponent implements OnInit {
  @Input() food: Food;

  orderFood: any = {};

  extras: string[] = [];
  removeds: string[] = [];
  count = 1;

  constructor(
    private orderService: OrderService,
    private modalController: ModalController,
    private toastController: ToastController
  ) {}

  ngOnInit() {
    this.orderFood = {
      _id: this.food._id,
      name: this.food.name,
      ingredients: this.food.ingredients.map((i: Ingredient) => i.name),
      price: this.food.price,
      image:this.food.image
    };
  }

  addToOrder() {
    this.toastController
      .create({
        message: "Successfully added to cart.",
        duration: 2000,
      })
      .then((toast) => toast.present());

    this.normalizeIngredients();
    this.orderService.addToOrder({ ...this.orderFood }, this.count);
    this.clearOrder();
    this.onDismiss();
  }
  
  normalizeIngredients() {
    this.orderFood.ingredients.push(...this.extras);
    this.orderFood.ingredients = this.orderFood.ingredients.filter(
      (i: string) => !this.removeds.includes(i)
    );
  }

  updateIngredients(name: string, _target: "extras" | "removeds") {
    const target = _target == "extras" ? this.extras : this.removeds;

    const index = target.findIndex((i) => i == name);

    if (index == -1) {
      target.push(name);
    } else {
      target.splice(index, 1);
    }
  }

  clearOrder() {
    this.orderFood = {};
  }

  onDismiss() {
    this.orderFood = {};
    this.modalController.dismiss();
  }
}
