import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VistaRoutingModule } from './vista-routing.module';
import { VistaComponent } from './vista/vista.component';


@NgModule({
  declarations: [VistaComponent],
  imports: [
    CommonModule,
    VistaRoutingModule
  ]
})
export class VistaModule { }
