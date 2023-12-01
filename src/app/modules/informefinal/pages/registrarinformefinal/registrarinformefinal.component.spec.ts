import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarinformefinalComponent } from './registrarinformefinal.component';

describe('RegistrarinformefinalComponent', () => {
  let component: RegistrarinformefinalComponent;
  let fixture: ComponentFixture<RegistrarinformefinalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrarinformefinalComponent]
    });
    fixture = TestBed.createComponent(RegistrarinformefinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
