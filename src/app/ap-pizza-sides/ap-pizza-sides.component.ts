import { Component, OnInit } from '@angular/core';
import { PizzaService } from '../pizza.service';

@Component({
  selector: 'app-ap-pizza-sides',
  templateUrl: './ap-pizza-sides.component.html',
  styleUrls: ['./ap-pizza-sides.component.css']
})
export class ApPizzaSidesComponent implements OnInit {

  constructor(private pizzaSvc: PizzaService) { }

  pizzaSides = [];

  ngOnInit(): void {
    this.pizzaSides = this.pizzaSvc.loadPizzaSides();
    console.log(this.pizzaSides);
  }

  get total(): number {
    return this.pizzaSides
      .filter(x => x.checked)
      .reduce(
        (acc, x) => acc + x.price 
        , 0
      )
  }

  checkAll() {
    this.pizzaSides = this.pizzaSides.map(x => ({ ...x, checked: true }))
  }

  uncheckAll() {
    this.pizzaSides = this.pizzaSides.map(x => ({ ...x, checked: false }))
  }  

}


