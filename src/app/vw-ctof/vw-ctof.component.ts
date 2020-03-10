import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vw-ctof',
  templateUrl: './vw-ctof.component.html',
  styleUrls: ['./vw-ctof.component.css']
})
export class VwCtofComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  celsius = 0;
  answer = 32;

  convert() {
    this.answer = this.celsius * 9 / 5 + 32;
  }
}
