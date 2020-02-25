import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  constructor() { }

  loadPizzaToppings() {

    // pretend we loaded these from the internet
    const pizzaToppings = [
      { name: "Pepperoni", price: 1.50}
      , { name: "Sausage", price: 1.75}
      , { name: "Extra Cheese", price: .50}

    ]

    return pizzaToppings.map(x => ({...x, checked: false}))
  }
}
