import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mak-subtract',
  templateUrl: './mak-subtract.component.html',
  styleUrls: ['./mak-subtract.component.css']
})
export class MakSubtractComponent implements OnInit {

  numberOne = 5;
  answer = 0;

  squareNumber = () => {
    this.answer = this.numberOne * this.numberOne;
  }

  constructor() { }

  ngOnInit() {
  }

}
