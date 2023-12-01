import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RegisRolesComponent } from './registrar-roles/regis-roles/regis-roles.component';
import { RegisRolesRoutingModule } from './regis-roles-routing.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RegisRolesComponent,
  ],
  imports: [
    CommonModule,
    RegisRolesRoutingModule,
    RouterModule,
    FormsModule
  ]
})
export class RegisRolesModule { }
