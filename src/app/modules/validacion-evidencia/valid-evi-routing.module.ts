import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidEviComponent } from './pages/valid-evi/valid-evi.component';

const routes: Routes = [
  {
    path:'',
    component: ValidEviComponent, outlet:'child'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ValidEviRoutingModule { }
