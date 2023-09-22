import { TestBed } from '@angular/core/testing';

import { ApiInfogardecorpsService } from './api-infogardecorps.service';

describe('ApiInfogardecorpsService', () => {
  let service: ApiInfogardecorpsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiInfogardecorpsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
