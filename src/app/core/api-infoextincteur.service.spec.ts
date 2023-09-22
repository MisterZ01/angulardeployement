import { TestBed } from '@angular/core/testing';

import { ApiInfoextincteurService } from './api-infoextincteur.service';

describe('ApiInfoextincteurService', () => {
  let service: ApiInfoextincteurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiInfoextincteurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
