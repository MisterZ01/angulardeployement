import { TestBed } from '@angular/core/testing';

import { ApiInfosystemeevacuationService } from './api-infosystemeevacuation.service';

describe('ApiInfosystemeevacuationService', () => {
  let service: ApiInfosystemeevacuationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiInfosystemeevacuationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
