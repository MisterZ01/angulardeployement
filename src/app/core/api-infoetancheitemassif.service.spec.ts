import { TestBed } from '@angular/core/testing';

import { ApiInfoetancheitemassifService } from './api-infoetancheitemassif.service';

describe('ApiInfoetancheitemassifService', () => {
  let service: ApiInfoetancheitemassifService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiInfoetancheitemassifService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
