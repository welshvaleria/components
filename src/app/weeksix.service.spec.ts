import { TestBed } from '@angular/core/testing';

import { WeeksixService } from './weeksix.service';

describe('WeeksixService', () => {
  let service: WeeksixService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeeksixService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
