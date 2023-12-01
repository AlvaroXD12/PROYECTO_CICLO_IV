import { Component, OnInit } from '@angular/core';
import { ComentarioComponent } from '../comentario/comentario.component';
import {MatDialog} from '@angular/material/dialog'
import { aprobacionService } from '../services/aprobacion.service';
import { aprobacion } from 'src/app/models/aprobacion';
import { AprobarProyectoService } from '../services/aprobar-proyecto.service';
import { ActivatedRoute } from '@angular/router';


export class ButtonOverviewExample {}
@Component({
  selector: 'app-comentar',
  templateUrl: './comentar.component.html',
  styleUrls: ['./comentar.component.css']
})
export class ComentarComponent implements OnInit{
  Aprobacion: aprobacion[] = [];
  title = 'angular-dialog';

  constructor(
    private matDialog:MatDialog,
     private _aprobacionService: aprobacionService,
     private aproService : AprobarProyectoService,
     private route: ActivatedRoute,
     
     ){}
  ngOnInit(): void {
    this.obtenerAprobacion();
  }
  openDialog(){
    this.matDialog.open(ComentarioComponent,{
      width: '650px',
    })
  }

  
  obtenerAprobacion(){
    this._aprobacionService.getAprobacion().subscribe(data=>{
      this.Aprobacion = data
      console.log(data)
    })
  }

}
