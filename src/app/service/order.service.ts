import { Injectable } from "@angular/core";
import { food, Food, Order } from "../bucket";

@Injectable({
  providedIn: "root",
})
export class OrderService {
  private order: Order;

  constructor() {
    this.order = {
      foods: [],
    };
  }

  addToOrder(food: Food, amount: number) {
    const index = this.order.foods.findIndex((f) => this.isSameFood(f, food));
    if (index != -1) {
      this.order.foods[index].count += amount;
    } else {
      this.order.foods.push({
        _id: food._id,
        count: amount,
        ingredients: food.ingredients as string[],
        name: food.name,
        price: food.price,
        //@ts-ignore
        image: food.image,
      });
    }

    this.updateOrderPrice();
  }

  isSameFood(food1: Food, food2: Food) {
    console.log(food1, food2);
    return (
      food1._id == food2._id &&
      food1.ingredients.every((i) => food2.ingredients.includes(i)) &&
      food1.ingredients.length == food2.ingredients.length
    );
  }

  removeFromOrder(i: number) {
    const existing = this.order.foods[i].count;
    if (existing == 1) {
      this.order.foods.splice(i, 1);
    } else {
      this.order.foods[i].count -= 1;
    }

    this.updateOrderPrice();
  }

  private updateOrderPrice() {
    this.order.price = this.order.foods.reduce(
      (acc, curr) => acc + curr.price * curr.count,
      0
    );
  }

  getOrder() {
    return this.order;
  }

  clearOrder() {
    this.order = {
      foods: [],
    };
  }
}
