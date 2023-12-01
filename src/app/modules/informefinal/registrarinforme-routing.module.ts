import { NgModule } from '@angular/core';
import { RouterLink, RouterModule, Routes } from '@angular/router';
import { RegistrarinformefinalComponent } from './pages/registrarinformefinal/registrarinformefinal.component';

const routes: Routes = [
  {
    path: '',
    component: RegistrarinformefinalComponent, outlet: 'child'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, RouterLink]
})
export class RegistrarinformeRoutingModule { }
