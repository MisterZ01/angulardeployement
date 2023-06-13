import { TestBed } from '@angular/core/testing';

import { ApiInfoempriseService } from './api-infoemprise.service';

describe('ApiInfoempriseService', () => {
  let service: ApiInfoempriseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiInfoempriseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
