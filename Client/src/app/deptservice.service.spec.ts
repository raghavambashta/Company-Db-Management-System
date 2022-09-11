import { TestBed } from '@angular/core/testing';

import { DeptserviceService } from './deptservice.service';

describe('DeptserviceService', () => {
  let service: DeptserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeptserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
