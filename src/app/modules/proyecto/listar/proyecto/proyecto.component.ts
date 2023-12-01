import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/models/Proyecto';
import { ProyectoService } from '../../services/proyecto.service';
import { TipProyecService } from '../../services/tip-proyec.service';
import { ModalidadService } from '../../services/modalidad.service';
import { Tip_proyec } from 'src/app/models/Tip_proyect';
import { Modalidad } from 'src/app/models/Modalidad';
import { Parametros } from 'src/app/models/Parametros';
import { ParametrosService } from '../../services/parametros.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {
  proyectos: Proyecto[] = [];
  tipproyec: Tip_proyec[]=[];
  modalidad: Modalidad[]=[];
  parametros: Parametros[]=[];
  proyecto: Proyecto = new Proyecto();

  constructor(
    private proyectoService: ProyectoService,
    private tipproyecService: TipProyecService,
    private modalidadService: ModalidadService,
    private parametrosService: ParametrosService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.Listar()
    this.ListarTip_proyec()
    this.ListarModalidad() 
    this.ListarParametros() 
  }
  Listar(){
    this.proyectoService.listar().subscribe(data => {
      this.proyectos = data;
  });
  }
  ListarTip_proyec() {
    this.tipproyecService.listar().subscribe(data => {
      this.tipproyec = data;  
    });
  }
  ListarModalidad() {
    this.modalidadService.listar().subscribe(data => {
      this.modalidad = data;  
    });
  }
  ListarParametros() {
    this.parametrosService.listar().subscribe(data => {
      this.parametros = data;  
    });
  }
  Editar(id: number) {
    this.proyectoService.editar(id, this.proyecto).subscribe(dato => {
      this.router.navigate(['/home/proyecto/editar']);
    })
  }
  filtro(event: Event) {
    const input = event.target as HTMLInputElement;
    const value = input.value;
    this.proyectoService.listar().subscribe(data => {
      this.proyectos = data
      this.proyectos = this.proyectos.filter(data => data.tip_proyec?.id == parseInt(value) + 1)

    })
  }

}
