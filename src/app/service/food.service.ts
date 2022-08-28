import { Injectable } from "@angular/core";
import { food } from "../bucket";

@Injectable({
  providedIn: "root",
})
export class FoodService {
  list(relation: boolean = true) {
    return food.getAll({ queryParams: { relation:relation } });
  }

  get(id: string) {
    return food.get(id);
  }
}
