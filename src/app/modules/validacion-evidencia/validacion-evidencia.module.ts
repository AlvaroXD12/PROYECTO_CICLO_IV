import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ValidacionEvidenciaRoutingModule } from './validacion-evidencia-routing.module';
import { RouterLink, RouterModule } from '@angular/router';
import { ValidEviComponent } from './pages/valid-evi/valid-evi.component';
import { ValidacionEvidenciaComponent } from './pages/validacionevidencia/validacionevidencia.component';


@NgModule({
  declarations: [
    ValidacionEvidenciaComponent,
    ValidEviComponent
  ],
  imports: [
    CommonModule,
    ValidacionEvidenciaRoutingModule,
    RouterLink,
    RouterModule
  ]
})
export class ValidacionEvidenciaModule { }