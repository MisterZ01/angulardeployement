import { TestBed } from '@angular/core/testing';

import { ApiInfomembredeuxService } from './api-infomembredeux.service';

describe('ApiInfomembredeuxService', () => {
  let service: ApiInfomembredeuxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiInfomembredeuxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
