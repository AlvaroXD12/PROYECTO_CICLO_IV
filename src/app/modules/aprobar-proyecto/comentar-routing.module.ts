import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComentarComponent } from './comentar/comentar.component';


const routes: Routes = [

  {path:'', component:ComentarComponent, outlet:'child'},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComentarRoutingModule { }
