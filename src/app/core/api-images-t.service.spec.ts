import { TestBed } from '@angular/core/testing';

import { ApiImagesTService } from './api-images-t.service';

describe('ApiImagesTService', () => {
  let service: ApiImagesTService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiImagesTService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
