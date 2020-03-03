import { Component, OnInit } from '@angular/core';
import { PizzaService } from '../pizza.service';

@Component({
  selector: 'app-pizza-toppings',
  templateUrl: './pizza-toppings.component.html',
  styleUrls: ['./pizza-toppings.component.css']
})
export class PizzaToppingsComponent implements OnInit {

  // Magic DI (dependency injection).. 
  // TS has awesome shorthand syntax for this
  constructor(private pizzaSvc: PizzaService) { }

  pizzaToppings = [];

  ngOnInit(): void {
    this.pizzaToppings = this.pizzaSvc.loadPizzaToppings();
    console.log(this.pizzaToppings);
  }

  get total(): number {                   // this is a property not a function ..ANgular knows we are binding to a property on total
    return this.pizzaToppings
      .filter(x => x.checked)
      .reduce(
        (acc, x) => acc + x.price //sum up the prices
        , 0
      )
  }

checkAll() {
  this.pizzaToppings = this.pizzaToppings.map(x => ({ ...x, checked: true}))
}

uncheckAll() {
  this.pizzaToppings = this.pizzaToppings.map(x => ({ ...x, checked: false}))
}

}
