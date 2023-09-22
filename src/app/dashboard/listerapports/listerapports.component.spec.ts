import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListerapportsComponent } from './listerapports.component';

describe('ListerapportsComponent', () => {
  let component: ListerapportsComponent;
  let fixture: ComponentFixture<ListerapportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListerapportsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListerapportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
