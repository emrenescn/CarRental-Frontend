import { TestBed } from '@angular/core/testing';

import { CarNameListService } from './car-name-list.service';

describe('CarNameListService', () => {
  let service: CarNameListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarNameListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
