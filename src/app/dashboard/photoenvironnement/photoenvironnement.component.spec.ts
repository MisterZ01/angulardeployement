import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoenvironnementComponent } from './photoenvironnement.component';

describe('PhotoenvironnementComponent', () => {
  let component: PhotoenvironnementComponent;
  let fixture: ComponentFixture<PhotoenvironnementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoenvironnementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotoenvironnementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
