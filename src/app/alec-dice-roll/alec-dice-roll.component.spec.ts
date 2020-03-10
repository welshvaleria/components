import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlecDiceRollComponent } from './alec-dice-roll.component';

describe('AlecDiceRollComponent', () => {
  let component: AlecDiceRollComponent;
  let fixture: ComponentFixture<AlecDiceRollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlecDiceRollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlecDiceRollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
