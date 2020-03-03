import { Component, OnInit } from '@angular/core';
import { strict } from 'assert';

@Component({
  selector: 'app-ttm-addition',
  templateUrl: './ttm-addition.component.html',
  styleUrls: ['./ttm-addition.component.css']
})
export class TtmAdditionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  suggestion = "";
  pigLatin = "";

  createPigLatin() {
	  this.suggestion = this.suggestion.toLowerCase();
	  const vowels = ["a", "e", "i", "o", "u"];
	  let vIndex = 0;
	  if (vowels.includes(this.suggestion[0])) {
		this.pigLatin = this.suggestion + "way";
	  } else {
		  for (let char of this.suggestion) {
			if (vowels.includes(char)) {
				vIndex = this.suggestion.indexOf(char);
				break;
			}
		  }
		  this.pigLatin = this.suggestion.slice(vIndex) + this.suggestion.slice(0, vIndex) + "ay";
	  }
  }

}
