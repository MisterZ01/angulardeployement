import { TestBed } from '@angular/core/testing';

import { ApiDepmtService } from './api-depmt.service';

describe('ApiDepmtService', () => {
  let service: ApiDepmtService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiDepmtService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
