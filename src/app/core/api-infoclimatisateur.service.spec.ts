import { TestBed } from '@angular/core/testing';

import { ApiInfoclimatisateurService } from './api-infoclimatisateur.service';

describe('ApiInfoclimatisateurService', () => {
  let service: ApiInfoclimatisateurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiInfoclimatisateurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
