import { TestBed } from '@angular/core/testing';

import { ApiInfoserrureService } from './api-infoserrure.service';

describe('ApiInfoserrureService', () => {
  let service: ApiInfoserrureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiInfoserrureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
