import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ValidEviRoutingModule } from './valid-evi-routing.module';
import { RouterLink, RouterModule } from '@angular/router';
import { InformeComponent } from './pages/informe/informe.component';
import { MatDialogModule } from '@angular/material/dialog';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@NgModule({
  declarations: [
    InformeComponent,
  ],
  imports: [
    CommonModule,
    ValidEviRoutingModule,
    RouterModule,
    RouterLink,
    MatDialogModule
  ]
})
export class ValidEviModule { }