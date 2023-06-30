import { TestBed } from '@angular/core/testing';

import { ApiInfoconclusionService } from './api-infoconclusion.service';

describe('ApiInfoconclusionService', () => {
  let service: ApiInfoconclusionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiInfoconclusionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
