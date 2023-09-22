import { TestBed } from '@angular/core/testing';

import { ApiInfolocaltechniqueService } from './api-infolocaltechnique.service';

describe('ApiInfolocaltechniqueService', () => {
  let service: ApiInfolocaltechniqueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiInfolocaltechniqueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
