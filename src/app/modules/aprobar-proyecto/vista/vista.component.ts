import { Component, OnInit } from '@angular/core';
import { reporteproyectoService } from '../services/re-proyecto.service';
import { reporte_proyecto } from 'src/app/models/re_proyecto';

@Component({
  selector: 'app-vista',
  templateUrl: './vista.component.html',
  styleUrls: ['./vista.component.css']
})
export class VistaComponent implements OnInit{
  ReporteProyecto: reporte_proyecto[] = [];


  constructor(private _reporteproyectoService: reporteproyectoService) {}

  ngOnInit(): void {
    this.obtenerReporteProyecto();

  }

  obtenerReporteProyecto() {
    this._reporteproyectoService.getreporteproyecto().subscribe(data => {
      this.ReporteProyecto = data
      console.log(data)
      
    })
  }
}
