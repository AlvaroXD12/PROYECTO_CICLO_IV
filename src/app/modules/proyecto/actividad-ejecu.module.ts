import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ActividadEjecuComponent } from './regis-actividad_ejecu/actividad-ejecu/actividad-ejecu.component';
import { ActividadEjecuRoutingModule } from './actividad-ejecu-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ActividadEjecuComponent,
  ],
  imports: [
    CommonModule,
    ActividadEjecuRoutingModule,
    RouterModule,
    FormsModule
  ]
})
export class ActividadEjecuModule { }
