import { Injectable } from "@angular/core";
import { OrderService } from "./order.service";

@Injectable({
  providedIn: "root",
})
export class StorageService {
  constructor(private orderService: OrderService) {}

  setUser(userId: string) {
    localStorage.setItem("user", userId);
  }

  getUserId() {
    return localStorage.getItem("user");
  }

  logOut() {
    this.orderService.clearOrder();
    localStorage.removeItem("user");
  }
}
