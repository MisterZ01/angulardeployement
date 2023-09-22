import { TestBed } from '@angular/core/testing';

import { ApiInfosyntheseService } from './api-infosynthese.service';

describe('ApiInfosyntheseService', () => {
  let service: ApiInfosyntheseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiInfosyntheseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
