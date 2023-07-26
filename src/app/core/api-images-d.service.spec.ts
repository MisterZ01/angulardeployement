import { TestBed } from '@angular/core/testing';

import { ApiImagesDService } from './api-images-d.service';

describe('ApiImagesDService', () => {
  let service: ApiImagesDService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiImagesDService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
