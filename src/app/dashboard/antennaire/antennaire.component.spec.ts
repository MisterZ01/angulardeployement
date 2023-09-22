import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AntennaireComponent } from './antennaire.component';

describe('AntennaireComponent', () => {
  let component: AntennaireComponent;
  let fixture: ComponentFixture<AntennaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AntennaireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AntennaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
