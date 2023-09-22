import { TestBed } from '@angular/core/testing';

import { ApiInfoclotureService } from './api-infocloture.service';

describe('ApiInfoclotureService', () => {
  let service: ApiInfoclotureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiInfoclotureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
