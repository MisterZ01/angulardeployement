import { TestBed } from '@angular/core/testing';

import { ApiEnvService } from './api-env.service';

describe('ApiEnvService', () => {
  let service: ApiEnvService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiEnvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
