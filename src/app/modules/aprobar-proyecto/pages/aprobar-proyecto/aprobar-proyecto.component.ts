import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { proyectoService } from '../../services/proyecto.service';
import { Proyecto } from 'src/app/models/Proyecto';


@Component({
  selector: 'app-aprobar-proyecto',
  templateUrl: './aprobar-proyecto.component.html',
  styleUrls: ['./aprobar-proyecto.component.css']
})
export class AprobarProyectoComponent implements OnInit {
  proyecto: Proyecto[] = [];

  constructor(private route: Router, private _proyectoService: proyectoService) {}

  ngOnInit(): void {
    this.obtenerProyecto();
  }

  obtenerProyecto() {
    this._proyectoService.getAprobacion().subscribe(data => {
      this.proyecto = data
      console.log(data)
      
    })
  }
}
