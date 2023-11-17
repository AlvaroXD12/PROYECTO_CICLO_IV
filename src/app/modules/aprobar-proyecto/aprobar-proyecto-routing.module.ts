import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AprobarProyectoComponent } from './pages/aprobar-proyecto/aprobar-proyecto.component';

const routes: Routes = [
    {
    path:'',
    component:AprobarProyectoComponent, outlet:'child'
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AprobarProyectoRoutingModule { }
