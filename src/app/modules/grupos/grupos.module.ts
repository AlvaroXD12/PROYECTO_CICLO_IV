import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GruposRoutingModule } from './grupos-routing.module';
import { ListaproyecGruposComponent } from './pages/listaproyec-grupos/ListaproyecGruposComponent';
import { RegistrargruposComponent } from './pages/registrargrupos/registrargrupos.component';


@NgModule({
  declarations: [
    ListaproyecGruposComponent],
  imports: [
    CommonModule,
    GruposRoutingModule
  ]
})
export class GruposModule { }
