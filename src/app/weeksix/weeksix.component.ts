import { Component, OnInit } from '@angular/core';
import { WeeksixService } from '../weeksix.service';

@Component({
  selector: 'app-weeksix',
  templateUrl: './weeksix.component.html',
  styleUrls: ['./weeksix.component.css']
})
export class WeeksixComponent implements OnInit {

  constructor(private weeksixSvc: WeeksixService) { }

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
      this.randomNumber = this.weeksixSvc.generateRandomNumber();
  }

}
