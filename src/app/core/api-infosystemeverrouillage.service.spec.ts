import { TestBed } from '@angular/core/testing';

import { ApiInfosystemeverrouillageService } from './api-infosystemeverrouillage.service';

describe('ApiInfosystemeverrouillageService', () => {
  let service: ApiInfosystemeverrouillageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiInfosystemeverrouillageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
