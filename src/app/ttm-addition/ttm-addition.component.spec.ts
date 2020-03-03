import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TtmAdditionComponent } from './ttm-addition.component';

describe('TtmAdditionComponent', () => {
  let component: TtmAdditionComponent;
  let fixture: ComponentFixture<TtmAdditionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TtmAdditionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TtmAdditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
