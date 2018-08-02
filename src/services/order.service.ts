import {Injectable} from "@angular/core";
import {PizzaItem} from "../app/models/PizzaItem";

@Injectable()
export class OrderService {
  constructor() {
  }

  calculateTotal(order: PizzaItem[]): number {
    let result = 0;
    order.forEach((orderItem) => {
      result += orderItem.pizza.price * orderItem.amount;
    });
    return result;
  }
}
