import { TestBed } from '@angular/core/testing';

import { ApiInfoaccessService } from './api-infoaccess.service';

describe('ApiInfoenvService', () => {
  let service: ApiInfoaccessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiInfoaccessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
