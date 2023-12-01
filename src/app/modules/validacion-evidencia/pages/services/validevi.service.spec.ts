import { TestBed } from '@angular/core/testing';

import { ValideviService } from './validevi.service';

describe('ValideviService', () => {
  let service: ValideviService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValideviService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
