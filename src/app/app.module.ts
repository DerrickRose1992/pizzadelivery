import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {
  MatButtonModule, MatCardModule, MatDividerModule, MatIconModule, MatIconRegistry, MatListModule, MatSnackBar, MatSnackBarModule,
  MatToolbarModule
} from "@angular/material";
import {OrderlistComponent} from './orderlist/orderlist.component';
import {OrderService} from "../services/order.service";
import {PizzasComponent} from './pizzas/pizzas.component';
import {RouterModule} from "@angular/router";
import {HelpComponent} from './help/help.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule} from "@angular/forms";


const approutes = [
  {path: '', component: PizzasComponent},
  {path: 'help', component: HelpComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    OrderlistComponent,
    PizzasComponent,
    HelpComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatSnackBarModule,
    MatButtonModule,
    MatDividerModule,
    RouterModule.forRoot(approutes)
  ],
  providers: [MatIconRegistry, OrderService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
