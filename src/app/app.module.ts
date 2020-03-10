import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PizzaToppingsComponent } from './pizza-toppings/pizza-toppings.component';

import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button'
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MagicEightBallComponent } from './magic-eight-ball/magic-eight-ball.component'
import { JacobsComponentComponent } from './jacobs-component/jacobs-component.component'
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AlecDiceRollComponent } from './alec-dice-roll/alec-dice-roll.component'

@NgModule({
  declarations: [
    AppComponent,
    PizzaToppingsComponent,
    AlecDiceRollComponent,
    MagicEightBallComponent,
    JacobsComponentComponent,
    TjsAdditionComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatCheckboxModule, 
    MatInputModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
