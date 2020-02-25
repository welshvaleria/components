import { Component, OnInit } from '@angular/core';
import { PizzaService } from '../pizza.service';

@Component({
  selector: 'app-pizza-toppings',
  templateUrl: './pizza-toppings.component.html',
  styleUrls: ['./pizza-toppings.component.css']
})
export class PizzaToppingsComponent implements OnInit {

  // Magic Dependency Injection... using great TypeScript syntax!
  constructor(private pizzaSvc: PizzaService) { }

  pizzaToppings = [];
  total = 0;
  
  ngOnInit(): void {
    this.pizzaToppings = this.pizzaSvc.loadPizzaToppings();
    console.log(this.pizzaToppings);
  }

  checkout() {
    this.total = this.pizzaToppings
      .filter(x => x.checked)
      .reduce(
        (acc, x) => acc + x.price 
        , 0
      );
  }

}
