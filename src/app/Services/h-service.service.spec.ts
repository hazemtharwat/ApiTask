import { TestBed } from '@angular/core/testing';

import { HServiceService } from './h-service.service';

describe('HServiceService', () => {
  let service: HServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
