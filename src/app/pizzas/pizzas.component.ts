import {Component, OnInit} from '@angular/core';
import {PizzaItem} from "../models/PizzaItem";
import {Pizza} from "../models/Pizza";
import {OrderService} from "../../services/order.service";

@Component({
  selector: 'app-pizzas',
  templateUrl: './pizzas.component.html',
  styleUrls: ['./pizzas.component.css']
})
export class PizzasComponent {
  pizzas: Pizza[] = [];
  order: PizzaItem[] = [];
  total: number;

  constructor(private orderService: OrderService) {
    this.fillPizzaArray();
  }


  addToOrder(pizzaToAdd: Pizza): void {
    let pizza: PizzaItem = this.order.find((pizzaItem: PizzaItem) => {
      return pizzaItem.pizza === pizzaToAdd;
    });
    if (pizza) {
      pizza.amount = pizza.amount + 1;
    } else {
      this.order.push({pizza: pizzaToAdd, amount: 1});
    }
    this.total = this.orderService.calculateTotal(this.order);
  }

  private fillPizzaArray() {
    this.pizzas.push({name: "Mozarella", price: 7.50});
    this.pizzas.push({name: "Vegetarian", price: 8.50});
    this.pizzas.push({name: "Speciale", price: 8.50});
    this.pizzas.push({name: "Salami", price: 8.50});
    this.pizzas.push({name: "Tuna", price: 9.00});
  }

}
