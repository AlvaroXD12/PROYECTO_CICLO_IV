import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidacionevidenciaComponent } from './validacionevidencia.component';

describe('ValidacionevidenciaComponent', () => {
  let component: ValidacionevidenciaComponent;
  let fixture: ComponentFixture<ValidacionevidenciaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ValidacionevidenciaComponent]
    });
    fixture = TestBed.createComponent(ValidacionevidenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
