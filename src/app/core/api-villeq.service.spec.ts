import { TestBed } from '@angular/core/testing';

import { ApiVilleqService } from './api-villeq.service';

describe('ApiVilleqService', () => {
  let service: ApiVilleqService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiVilleqService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
