import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptionCompetenceComponent } from './inscription-competence.component';

describe('InscriptionCompetenceComponent', () => {
  let component: InscriptionCompetenceComponent;
  let fixture: ComponentFixture<InscriptionCompetenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscriptionCompetenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InscriptionCompetenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
