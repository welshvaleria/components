import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  constructor() { }

  loadPizzaToppings() {
    const pizzaToppings = [
      {name: "pepperoni", price: 9.99}
      ,{name: "Cheese", price: 5.99}
      ,{name: "Sausage", price: 6.99}
      ,{name: "Bacon", price: 2.99}
    ];

    return pizzaToppings.map(x => ({ ...x, checked: false }));
  }
}
