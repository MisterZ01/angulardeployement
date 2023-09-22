import { TestBed } from '@angular/core/testing';

import { ApiImgeEnvService } from './api-imge-env.service';

describe('ApiImgeEnvService', () => {
  let service: ApiImgeEnvService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiImgeEnvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
