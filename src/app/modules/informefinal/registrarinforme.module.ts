import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrarinformeRoutingModule } from './registrarinforme-routing.module';
import { RouterLink, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RegistrarinformefinalComponent } from './pages/registrarinformefinal/registrarinformefinal.component';


@NgModule({
  declarations: [
    RegistrarinformefinalComponent
  ],
  imports: [
    CommonModule,
    RegistrarinformeRoutingModule,
    RouterLink,
    RouterModule,
    FormsModule
  ]
})
export class RegistrarinformeModule { }
