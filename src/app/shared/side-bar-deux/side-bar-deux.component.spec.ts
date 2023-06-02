import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBarDeuxComponent } from './side-bar-deux.component';

describe('SideBarComponent', () => {
  let component: SideBarDeuxComponent;
  let fixture: ComponentFixture<SideBarDeuxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideBarDeuxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideBarDeuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
