import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidacionEvidenciaComponent } from './pages/validacionevidencia/validacionevidencia.component';

const routes: Routes = [
  {
    path:'',
    component: ValidacionEvidenciaComponent, outlet:'child'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ValidacionEvidenciaRoutingModule { }