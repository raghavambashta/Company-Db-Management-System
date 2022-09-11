import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListdeptComponent } from './listdept.component';

describe('ListdeptComponent', () => {
  let component: ListdeptComponent;
  let fixture: ComponentFixture<ListdeptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListdeptComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListdeptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
