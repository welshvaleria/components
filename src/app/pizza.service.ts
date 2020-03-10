import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  constructor() { }

  loadPizzaToppings() {

    // Pretend we loaded these from the internet...
    const pizzaToppings = [
      { name: "Pepperoni", price: 1.50}
      , { name: "Sausage", price: 1.75}
      , { name: "Extra Cheese", price: 0.50}
    ];

    return pizzaToppings.map(x => ({...x, checked: false}));
  }

  loadPizzaSides() {

        const pizzaSides = [
          { name: "Garlic Knots", price: 8.00}
          , { name: "Bread Sticks", price: 5.00}
          , { name: "Fries", price: 2.50}
        ];
    
        return pizzaSides.map(x => ({...x, checked: false}));
  }
}
