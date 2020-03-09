import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alec-dice-roll',
  templateUrl: './alec-dice-roll.component.html',
  styleUrls: ['./alec-dice-roll.component.css']
})
export class AlecDiceRollComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  rollDie(): Number {
    return (Math.ceil(Math.random() * 20));
  }

  doesHit(roll: Number) {
    
  }

}
