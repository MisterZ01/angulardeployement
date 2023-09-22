import { TestBed } from '@angular/core/testing';

import { ApiInfoterrassesolService } from './api-infoterrassesol.service';

describe('ApiInfoterrassesolService', () => {
  let service: ApiInfoterrassesolService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiInfoterrassesolService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
