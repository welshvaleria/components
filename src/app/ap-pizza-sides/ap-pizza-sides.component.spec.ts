import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApPizzaSidesComponent } from './ap-pizza-sides.component';

describe('ApPizzaSidesComponent', () => {
  let component: ApPizzaSidesComponent;
  let fixture: ComponentFixture<ApPizzaSidesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApPizzaSidesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApPizzaSidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
