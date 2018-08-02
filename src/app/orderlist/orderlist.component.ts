import {Component, DoCheck, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {Pizza} from "../models/Pizza";
import {PizzaItem} from "../models/PizzaItem";
import {OrderService} from "../../services/order.service";
import {MatSnackBar} from "@angular/material";

@Component({
  selector: 'app-orderlist',
  templateUrl: './orderlist.component.html',
  styleUrls: ['./orderlist.component.css']
})
export class OrderlistComponent {

  @Input()
  order: PizzaItem[];
  @Output() orderChange: EventEmitter<PizzaItem[]> = new EventEmitter<PizzaItem[]>();

  @Input()
  total: number;

  note:string;

  constructor(private orderService: OrderService, private snackbar: MatSnackBar) {
  }

  sendOrder() {
    let snackBarRef = this.snackbar.open('Order sent!', null, {duration: 2000});
    this.order = [];
    this.orderChange.emit(this.order);

  }

  clearOrder(){
    this.order = [];
    this.orderChange.emit(this.order);
  }

  removeFromOrder(pizzaToRemove: Pizza): void {
    let pizza: PizzaItem = this.order.find((pizzaItem: PizzaItem) => {
      return pizzaItem.pizza === pizzaToRemove;
    });
    if (pizza.amount === 1) {
      this.order = this.order.filter((pizzaItem: PizzaItem) => {
        return pizzaItem.pizza !== pizzaToRemove;
      });
    } else {
      pizza.amount = pizza.amount - 1;
    }
    this.total = this.orderService.calculateTotal(this.order);
    this.orderChange.emit(this.order);
  }
}
