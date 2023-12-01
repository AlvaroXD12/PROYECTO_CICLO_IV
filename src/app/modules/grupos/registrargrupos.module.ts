import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrargruposRoutingModule } from './registrargrupos-routing.module';
import { FormsModule } from '@angular/forms';
import { RegistrargruposComponent } from './pages/registrargrupos/registrargrupos.component';


@NgModule({
  declarations: [
    RegistrargruposComponent
  ],
  imports: [
    CommonModule,
    RegistrargruposRoutingModule,
    FormsModule
  ]
})
export class RegistrargruposModule { }
