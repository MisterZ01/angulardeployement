import { TestBed } from '@angular/core/testing';

import { ApiInfoplaquesignalService } from './api-infoplaquesignal.service';

describe('ApiInfoplaquesignalService', () => {
  let service: ApiInfoplaquesignalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiInfoplaquesignalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
