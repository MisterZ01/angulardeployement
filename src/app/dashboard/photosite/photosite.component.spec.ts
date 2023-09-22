import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotositeComponent } from './photosite.component';

describe('PhotositeComponent', () => {
  let component: PhotositeComponent;
  let fixture: ComponentFixture<PhotositeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotositeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotositeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
