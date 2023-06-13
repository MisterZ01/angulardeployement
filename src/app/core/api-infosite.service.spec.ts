import { TestBed } from '@angular/core/testing';

import { ApiInfositeService } from './api-infosite.service';

describe('ApiInfositeService', () => {
  let service: ApiInfositeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiInfositeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
