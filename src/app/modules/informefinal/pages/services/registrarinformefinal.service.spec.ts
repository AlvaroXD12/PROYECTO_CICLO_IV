import { TestBed } from '@angular/core/testing';

import { RegistrarinformefinalService } from './registrarinformefinal.service';

describe('RegistrarinformefinalService', () => {
  let service: RegistrarinformefinalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistrarinformefinalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
