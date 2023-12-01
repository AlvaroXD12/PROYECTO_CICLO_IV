import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AprobarProyectoRoutingModule } from './aprobar-proyecto-routing.module';
import { AprobarProyectoComponent } from './pages/aprobar-proyecto/aprobar-proyecto.component';
import { ComentarioComponent } from './comentario/comentario.component';
import {MatButtonModule} from '@angular/material/button';
import { MatTableDataSource } from "@angular/material/table";

@NgModule({
  declarations: [
    AprobarProyectoComponent,
    ComentarioComponent,
  ],
  imports: [
    CommonModule,
    AprobarProyectoRoutingModule,
    MatButtonModule,
  ]
})
export class AprobarProyectoModule { }
