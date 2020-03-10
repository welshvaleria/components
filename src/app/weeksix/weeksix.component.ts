import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weeksix',
  templateUrl: './weeksix.component.html',
  styleUrls: ['./weeksix.component.css']
})
export class WeeksixComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // Declare initial randomNumber variable
  randomNumber: number;

  // Return the random number
  get randNumber(): number {
      return this.randomNumber;
  }

  // Refresh a new random number
  newNumber() {
      this.randomNumber = this.generateRandomNumber();
  }

  // Generate and return a random number between 1 and 100
  generateRandomNumber() {
    this.randomNumber = Math.floor(Math.random() * 100);
    return this.randomNumber;
  }

}
