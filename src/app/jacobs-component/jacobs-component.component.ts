import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jacobs-component',
  templateUrl: './jacobs-component.component.html',
  styleUrls: ['./jacobs-component.component.css']
})
export class JacobsComponentComponent implements OnInit {

  constructor() { }

  students = ['Jacob', 'Cacie', 'Katya', 'Ken', 'Mitchell', 
            'Sam', 'Samantha', 'Tim', 'Tom', 'Tyler'];

  ngOnInit(): void {
  }

  pickRandomWinner() {
      let random = this.students[Math.floor(Math.random()*this.students.length)];
      console.log(random);

      let output = document.createElement("div");
      output.textContent = '';
      output.textContent = random;
      // let winner = document.createTextNode(random);
      // output.appendChild(winner);
      document.querySelector("#winner").appendChild(output);
      
  };
}
