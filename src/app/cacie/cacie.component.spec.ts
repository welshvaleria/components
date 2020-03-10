import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CacieComponent } from './cacie.component';

describe('CacieComponent', () => {
  let component: CacieComponent;
  let fixture: ComponentFixture<CacieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CacieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CacieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
