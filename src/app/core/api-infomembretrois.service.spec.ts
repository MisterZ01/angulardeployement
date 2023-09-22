import { TestBed } from '@angular/core/testing';

import { ApiInfomembretroisService } from './api-infomembretrois.service';

describe('ApiInfomembretroisService', () => {
  let service: ApiInfomembretroisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiInfomembretroisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
