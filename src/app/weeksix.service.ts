import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeeksixService {

  constructor() { }

  // Declare random number variable
  randomNumber: number;

  // Generate and return a random number between 1 and 100
  generateRandomNumber() {
    this.randomNumber = Math.floor(Math.random() * 100);
    return this.randomNumber;
  }
  
}
