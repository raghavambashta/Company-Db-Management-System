import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowdeptComponent } from './showdept.component';

describe('ShowdeptComponent', () => {
  let component: ShowdeptComponent;
  let fixture: ComponentFixture<ShowdeptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowdeptComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowdeptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
