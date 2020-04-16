import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cacie',
  templateUrl: './cacie.component.html',
  styleUrls: ['./cacie.component.css']
})
export class CacieComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  numberOne = 1;
  numberTwo = 1;
  answer = 1;

  multiplyNumbers() {
    this.answer = this.numberOne * this.numberTwo;
  }
}
