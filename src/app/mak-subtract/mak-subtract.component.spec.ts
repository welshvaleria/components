import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakSubtractComponent } from './mak-subtract.component';

describe('MakSubtractComponent', () => {
  let component: MakSubtractComponent;
  let fixture: ComponentFixture<MakSubtractComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakSubtractComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakSubtractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
