import { TestBed } from '@angular/core/testing';
import { ModalidadService } from './modalidad.service';
import { ParametrosService } from './parametros.service';

describe('ParametrosService', () => {
  let service: ParametrosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParametrosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
