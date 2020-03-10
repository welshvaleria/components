import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MagicEightBallComponent } from './magic-eight-ball.component';

describe('MagicEightBallComponent', () => {
  let component: MagicEightBallComponent;
  let fixture: ComponentFixture<MagicEightBallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MagicEightBallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MagicEightBallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
