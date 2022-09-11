import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditdeptComponent } from './editdept.component';

describe('EditdeptComponent', () => {
  let component: EditdeptComponent;
  let fixture: ComponentFixture<EditdeptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditdeptComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditdeptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
