import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaproyecGruposComponent } from './ListaproyecGruposComponent';

describe('ListaproyecGruposComponent', () => {
  let component: ListaproyecGruposComponent;
  let fixture: ComponentFixture<ListaproyecGruposComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaproyecGruposComponent]
    });
    fixture = TestBed.createComponent(ListaproyecGruposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
