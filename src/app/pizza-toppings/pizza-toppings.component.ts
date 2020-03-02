import { Component, OnInit } from '@angular/core';
import { pizzaService } from '../pizza.service'

@Component({
  selector: 'app-pizza-toppings',
  templateUrl: './pizza-toppings.component.html',
  styleUrls: ['./pizza-toppings.component.css']
})
export class PizzaToppingsComponent implements OnInit {

  constructor(private pizzaSvc: pizza) { }

  ngOnInit(): void {
  }

}
