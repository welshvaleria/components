import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtaGeneratorComponent } from './eta-generator.component';

describe('EtaGeneratorComponent', () => {
  let component: EtaGeneratorComponent;
  let fixture: ComponentFixture<EtaGeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtaGeneratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtaGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
