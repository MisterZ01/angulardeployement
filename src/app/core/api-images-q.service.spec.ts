import { TestBed } from '@angular/core/testing';

import { ApiImagesQService } from './api-images-q.service';

describe('ApiImagesQService', () => {
  let service: ApiImagesQService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiImagesQService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
