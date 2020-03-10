import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SdmMadlibComponent } from './sdm-madlib.component';

describe('SdmMadlibComponent', () => {
  let component: SdmMadlibComponent;
  let fixture: ComponentFixture<SdmMadlibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SdmMadlibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SdmMadlibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
