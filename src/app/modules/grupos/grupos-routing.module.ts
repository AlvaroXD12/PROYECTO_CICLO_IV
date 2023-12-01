import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaproyecGruposComponent } from './pages/listaproyec-grupos/ListaproyecGruposComponent';

const routes: Routes = [
  {
    path: '',
    component: ListaproyecGruposComponent, outlet: 'child'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GruposRoutingModule { }
