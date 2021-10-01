import { TestBed } from '@angular/core/testing';

import { AddtaskServiceService } from './addtask-service.service';

describe('AddtaskServiceService', () => {
  let service: AddtaskServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddtaskServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
