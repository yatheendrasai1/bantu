import { TestBed } from '@angular/core/testing';

import { BebantuService } from './bebantu.service';

describe('BebantuService', () => {
  let service: BebantuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BebantuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
