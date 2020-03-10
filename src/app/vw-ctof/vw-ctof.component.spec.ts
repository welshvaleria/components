import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VwCtofComponent } from './vw-ctof.component';

describe('VwCtofComponent', () => {
  let component: VwCtofComponent;
  let fixture: ComponentFixture<VwCtofComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VwCtofComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VwCtofComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
