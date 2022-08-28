import { Component, OnInit } from "@angular/core";
import { StorageService } from "../service/storage.service";
import { Food, Order } from "../bucket";
import { OrderService } from "../service/order.service";

@Component({
  selector: "app-order",
  templateUrl: "./order.component.html",
  styleUrls: ["./order.component.scss"],
})
export class OrderComponent implements OnInit {
  order: Order;
  constructor(private orderService: OrderService) {}

  ngOnInit() {
    this.order = this.orderService.getOrder();
  }

  remove(i:number) {
    this.orderService.removeFromOrder(i);
  }

  add(food: Food) {
    this.orderService.addToOrder(food, 1);
  }

  sendOrder() {
    console.log("ordered.");
  }
}
