import { TestBed } from '@angular/core/testing';

import { LocaterService } from './locater.service';

describe('LocaterService', () => {
  let service: LocaterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocaterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
