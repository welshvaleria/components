import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alec-dice-roll',
  templateUrl: './alec-dice-roll.component.html',
  styleUrls: ['./alec-dice-roll.component.css']
})
export class AlecDiceRollComponent implements OnInit {

  constructor() { }

  hit = 0;

  ngOnInit(): void {
  }

  rollDie(): number {
    return (Math.ceil(Math.random() * 20));
  }

  doesHit(roll: number) {
    this.hit = roll;
  }

}
