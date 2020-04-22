import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eta-generator',
  templateUrl: './eta-generator.component.html',
  styleUrls: ['./eta-generator.component.css']
})
export class EtaGeneratorComponent implements OnInit {

  constructor() { }

  date = "Click above to generate a date!";

  dateOptions = [
    {
      monthName: "April"
      , min: new Date().getDate()
      , max: 30
    }
    , {
      monthName: "May"
      , min: 1
      , max: 15
    }
  ]

  ngOnInit(): void {
  }

  generateDate() {
    let monthOption;

    if (Math.random() >= .5 && new Date().getMonth() == 3) {
      monthOption = this.dateOptions[0];
    } else {
      monthOption = this.dateOptions[1];
    }

    let day = Math.floor((monthOption.max - monthOption.min) * Math.random()) + monthOption.min;

    this.date = monthOption.monthName + " " + day;
  }

  getRealAnswer() {
    this.date = "NEVER.";
  }

}
