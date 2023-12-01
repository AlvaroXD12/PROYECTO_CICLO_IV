import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComentarioRoutingModule } from './comentario-routing.module';




export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@NgModule({
  declarations: [],

  imports: [
    CommonModule,
    ComentarioRoutingModule,

  ]
})
export class ComentarioModule { }
