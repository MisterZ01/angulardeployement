import { TestBed } from '@angular/core/testing';

import { ApiVilleService } from './api-ville.service';

describe('ApiVilleService', () => {
  let service: ApiVilleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiVilleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
