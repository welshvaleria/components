import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JacobsComponentComponent } from './jacobs-component.component';

describe('JacobsComponentComponent', () => {
  let component: JacobsComponentComponent;
  let fixture: ComponentFixture<JacobsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JacobsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JacobsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
