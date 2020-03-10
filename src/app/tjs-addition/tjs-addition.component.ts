import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tjs-addition',
  templateUrl: './tjs-addition.component.html',
  styleUrls: ['./tjs-addition.component.css']
})
export class TjsAdditionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  numberOne = 2;
  numberTwo = 2;
  answer = 4;

  addNumbers() {
    this.answer = this.numberOne + this.numberTwo;
  }
}
