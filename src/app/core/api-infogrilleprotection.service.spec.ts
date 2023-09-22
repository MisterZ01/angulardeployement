import { TestBed } from '@angular/core/testing';

import { ApiInfogrilleprotectionService } from './api-infogrilleprotection.service';

describe('ApiInfogrilleprotectionService', () => {
  let service: ApiInfogrilleprotectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiInfogrilleprotectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
