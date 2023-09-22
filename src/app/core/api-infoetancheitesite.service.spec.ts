import { TestBed } from '@angular/core/testing';

import { ApiInfoetancheitesiteService } from './api-infoetancheitesite.service';

describe('ApiInfoetancheitesiteService', () => {
  let service: ApiInfoetancheitesiteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiInfoetancheitesiteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
