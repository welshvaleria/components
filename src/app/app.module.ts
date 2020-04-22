import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PizzaToppingsComponent } from './pizza-toppings/pizza-toppings.component';
import { TtmAdditionComponent } from './ttm-addition/ttm-addition.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button'
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field'
import { WeeksixComponent } from './weeksix/weeksix.component';
import { FormsModule } from '@angular/forms';
import { MakSubtractComponent } from './mak-subtract/mak-subtract.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ApPizzaSidesComponent } from './ap-pizza-sides/ap-pizza-sides.component';
import { SdmMadlibComponent } from './sdm-madlib/sdm-madlib.component';
import { MagicEightBallComponent } from './magic-eight-ball/magic-eight-ball.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TjsAdditionComponent } from './tjs-addition/tjs-addition.component';
import { CacieComponent } from './cacie/cacie.component'
import { AlecDiceRollComponent } from './alec-dice-roll/alec-dice-roll.component'
import { VwCtofComponent } from './vw-ctof/vw-ctof.component';
import { JacobsComponentComponent } from './jacobs-component/jacobs-component.component';
import { EtaGeneratorComponent } from './eta-generator/eta-generator.component';

@NgModule({
  declarations: [
    AppComponent,
    PizzaToppingsComponent,
    EtaGeneratorComponent,
    TtmAdditionComponent,
    MakSubtractComponent,
    TjsAdditionComponent,
    CacieComponent,
    AlecDiceRollComponent,
    ApPizzaSidesComponent,
    VwCtofComponent,
    SdmMadlibComponent,
    WeeksixComponent,
    MagicEightBallComponent,
    JacobsComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCheckboxModule, 
    MatInputModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
