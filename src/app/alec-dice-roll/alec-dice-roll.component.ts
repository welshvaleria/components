import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alec-dice-roll',
  templateUrl: './alec-dice-roll.component.html',
  styleUrls: ['./alec-dice-roll.component.css']
})
export class AlecDiceRollComponent implements OnInit {

  constructor() { }

  answer = '';

  ngOnInit(): void {
  }

  rollDie(): number {
    return (Math.ceil(Math.random() * 20));
  }

  doesHit(roll: number) {
    if (roll === 20) {
      this.answer = "20! You hit the kobold right in the weak spot for a critical hit!";
    } else if (roll === 1) {
      this.answer = "1! You miss very badly, nearly lopping off your leg in the process!";
    } else if (roll >= 12) {
      this.answer = roll + "! You were able to deliver a solid blow!";
    } else {
      this.answer = roll + "! You miss wide left! The kobold sneers.";
    }
    console.log(this.answer);
  }

}
