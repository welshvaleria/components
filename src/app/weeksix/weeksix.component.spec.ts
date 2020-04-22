import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeksixComponent } from './weeksix.component';

describe('WeeksixComponent', () => {
  let component: WeeksixComponent;
  let fixture: ComponentFixture<WeeksixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeeksixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeeksixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
