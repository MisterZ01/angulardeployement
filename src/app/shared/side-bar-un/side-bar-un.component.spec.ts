import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBarUnComponent } from './side-bar-un.component';

describe('SideBarUnComponent', () => {
  let component: SideBarUnComponent;
  let fixture: ComponentFixture<SideBarUnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideBarUnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideBarUnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
