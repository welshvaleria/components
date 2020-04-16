import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sdm-madlib',
  templateUrl: './sdm-madlib.component.html',
  styleUrls: ['./sdm-madlib.component.css']
})
export class SdmMadlibComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  person = "Tom Steele";
  verb = "talking";
  timeUnits = "days";

  madlib = "";

  generateMadlib() {
    this.madlib = this.person + " has been " + this.verb + " for 17 " + this.timeUnits + " now.";
  }
}
