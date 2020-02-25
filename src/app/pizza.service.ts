import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  constructor() { }

  loadPizzaToppings() {
    
    // Pretend we loaded this via some web service
    const pizzaToppings = [
      { name: "Pepperoni", price: 1.50}
      , { name: "Sausage", price: 1.50}
      , { name: "Onions", price: 1.00}
    ];

    return pizzaToppings.map(x => ({...x, checked: false}));
  }
}
