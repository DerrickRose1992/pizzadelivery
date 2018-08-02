import {Component, EventEmitter, Output} from '@angular/core';
import {Pizza} from "./models/Pizza";
import {PizzaItem} from "./models/PizzaItem";
import {OrderService} from "../services/order.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {
  }
}
