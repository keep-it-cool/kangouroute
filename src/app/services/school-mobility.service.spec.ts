import { TestBed } from '@angular/core/testing';

import { SchoolMobilityService } from './school-mobility.service';

describe('SchoolMobilityService', () => {
  let service: SchoolMobilityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SchoolMobilityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
