import { TestBed } from '@angular/core/testing';

import { ApiInfoportailService } from './api-infoportail.service';

describe('ApiInfoportailService', () => {
  let service: ApiInfoportailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiInfoportailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
