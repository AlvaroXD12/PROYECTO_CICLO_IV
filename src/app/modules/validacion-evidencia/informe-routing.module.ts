import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InformeComponent } from './pages/informe/informe.component';

const routes: Routes = [
  {
    path:'',
    component: InformeComponent, outlet:'child'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InformeRoutingModule { }
