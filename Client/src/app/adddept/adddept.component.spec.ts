import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdddeptComponent } from './adddept.component';

describe('AdddeptComponent', () => {
  let component: AdddeptComponent;
  let fixture: ComponentFixture<AdddeptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdddeptComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdddeptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
