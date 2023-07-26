import { TestBed } from '@angular/core/testing';

import { ApiCommuneService } from './api-commune.service';

describe('ApiCommuneService', () => {
  let service: ApiCommuneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiCommuneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
