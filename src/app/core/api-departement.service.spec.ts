import { TestBed } from '@angular/core/testing';

import { ApiDepartementService } from './api-departement.service';

describe('ApiDepartementService', () => {
  let service: ApiDepartementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiDepartementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
