import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinddeptComponent } from './finddept.component';

describe('FinddeptComponent', () => {
  let component: FinddeptComponent;
  let fixture: ComponentFixture<FinddeptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinddeptComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinddeptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
