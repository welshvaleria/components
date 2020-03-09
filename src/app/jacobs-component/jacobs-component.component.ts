import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jacobs-component',
  templateUrl: './jacobs-component.component.html',
  styleUrls: ['./jacobs-component.component.css']
})
export class JacobsComponentComponent implements OnInit {

  constructor() { }

  students = ['Jacob', 'Cacie', 'Katya', 'Ken', 'Mitchell', 
            'Sam', 'Samantha', 'Tim', 'Tom', 'Tyler', 'Trevor'];

  ngOnInit(): void {
  }

  pickRandomWinner() {
      let random = this.students[Math.floor(Math.random()*this.students.length)];

      let output = document.createElement("div");
      output.textContent = random;
      document.querySelector("#winner").appendChild(output);
      
  };

  clear() {
    let clear = document.querySelector("#winner");
    clear.innerHTML = '';
  };
}
