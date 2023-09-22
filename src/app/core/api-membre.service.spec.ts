import { TestBed } from '@angular/core/testing';

import { ApiMembreService } from './api-membre.service';

describe('ApiMembreService', () => {
  let service: ApiMembreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiMembreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
