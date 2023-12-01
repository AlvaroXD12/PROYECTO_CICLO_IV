import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidEviComponent } from './valid-evi.component';

describe('ValidEviComponent', () => {
  let component: ValidEviComponent;
  let fixture: ComponentFixture<ValidEviComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ValidEviComponent]
    });
    fixture = TestBed.createComponent(ValidEviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
