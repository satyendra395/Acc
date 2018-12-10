import { TestBed } from '@angular/core/testing';

import { LattitudeserviceService } from './lattitudeservice.service';

describe('LattitudeserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LattitudeserviceService = TestBed.get(LattitudeserviceService);
    expect(service).toBeTruthy();
  });
});
