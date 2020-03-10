import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-magic-eight-ball',
  templateUrl: './magic-eight-ball.component.html',
  styleUrls: ['./magic-eight-ball.component.css']
})
export class MagicEightBallComponent implements OnInit {
  answer = '';
  question = '';
  outputFortune = () => {
    const answerArray = ["It is certain.", "It is decidedly so.", "Without a doubt.", "Yes, definitely.", "You may rely on it.", "As I see it, yes.", "Most likely.", "Outlook good.", "Yes.", "Signs point to yes.", "Reply hazy, try again.", "Ask again later.", "Better not tell you now.", "Cannot predict now.", "Concentrate and ask again.", "Don't count on it.", "My reply is no.", "My sources say no.", "Outlook not so good.", "Very doubtful."]
    let randomNumber = Math.floor(Math.random() * answerArray.length);
    this.answer =  answerArray[randomNumber]; 
  }
  constructor() { }

  ngOnInit(): void {
  }

}
