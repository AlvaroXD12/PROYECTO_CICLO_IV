import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/models/Proyecto';
import { CoordinadorService } from '../../services/coordinador.service';
import { Coordinador } from 'src/app/models/Coordinador';
import { ProyectoService } from '../../services/proyecto.service';
import { Router } from '@angular/router';
import { TipProyecService } from '../../services/tip-proyec.service';
import { Tip_proyec } from 'src/app/models/Tip_proyect';
import { Modalidad } from 'src/app/models/Modalidad';
import { ModalidadService } from '../../services/modalidad.service';
import { Documento } from 'src/app/models/documento';
import { DocumentoService } from '../../services/documento.service';
import { Escu_prof } from 'src/app/models/Escu_prof';
import { EscuelaService } from '../../services/escuela.service';
import { Parametros } from 'src/app/models/Parametros';
import { ParametrosService } from '../../services/parametros.service';
import { Ciclo } from 'src/app/models/Ciclo';
import { CicloService } from '../../services/ciclo.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-proyecto-registrar',
  templateUrl: './proyecto-registrar.component.html',
  styleUrls: ['./proyecto-registrar.component.css']
})
export class ProyectoRegistrarComponent implements OnInit {
  proyecto: Proyecto = new Proyecto();
  coordinador: Coordinador[] = [];
  tipproyec: Tip_proyec[]=[];
  modalidad: Modalidad[]=[];
  documento: Documento[]=[];
  escuprof: Escu_prof[]=[];
  parametros: Parametros[]=[];
  ciclo: Ciclo[]=[];
  constructor(
    private proyectoService: ProyectoService,
    private coordinadorService: CoordinadorService,
    private tipproyecService: TipProyecService,
    private modalidadService: ModalidadService,
    private documentoService: DocumentoService,
    private escuelaService: EscuelaService,
    private parametrosService: ParametrosService,
    private cicloService: CicloService,
    private router: Router,
  ) { }
  ngOnInit(): void {
    this.ListarCoordinador()
    this.ListarTip_proyec()
    this.ListarModalidad() 
    this.ListarDocumento()
    this.ListarEscuela()
    this.ListarParametros()
    this.ListarCiclo()
  }
  onSubmit() {
    this.guardarProyecto();
  }
  ListarCoordinador() {
    this.coordinadorService.listar().subscribe(data => {
      this.coordinador = data;  
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
  ListarDocumento() {
    this.documentoService.listar().subscribe(data => {
      this.documento = data;  
    });
  }
  ListarEscuela() {
    this.escuelaService.listar().subscribe(data => {
      this.escuprof = data;  
    });
  }
  ListarParametros() {
    
    this.parametrosService.listar().subscribe(data => {
      this.parametros = data.filter(parametro => parametro.id === 8 || parametro.id === 9); 
    });
  }
  ListarCiclo() {
    this.cicloService.listar().subscribe(data => {
      this.ciclo = data;  
    });
  }
  createTutorial() {
    this.proyectoService.crear(this.proyecto).subscribe(data => {
      console.log(data);
      this.irProyecto();
      this.showModal();
    });
  }
  irProyecto(){
    this.router.navigate(["/home/proyecto"]);
  }
  showModal(){
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Guardado exitosamente",
      showConfirmButton: false,
      timer: 1500,
      customClass: {
        popup: 'my-popup-class',
      }
    });
    
  }
  datosIngresados(): boolean {
    if (
      this.proyecto &&
      this.proyecto.nombre_proyecto !== undefined &&
      this.proyecto.coordinador !== undefined &&
      this.proyecto.tip_proyec !== undefined &&
      this.proyecto.modalidad !== undefined &&
      this.proyecto.documento !== undefined &&
      this.proyecto.beneficiarios !== undefined &&
      this.proyecto.objetivos !== undefined &&
      this.proyecto.descripcion !== undefined &&
      this.proyecto.fecha_ini !== undefined &&
      this.proyecto.fecha_fin !== undefined &&
      this.proyecto.presupuesto !== undefined &&
      this.proyecto.escu_prof !== undefined &&
      this.proyecto.parametros !== undefined &&
      this.proyecto.ciclo !== undefined 
    ) {
      return true;
    }
    return false;
  }
  
  
  guardarProyecto() {
    if (this.datosIngresados()) {
      this.createTutorial()
    } else {
      this.mostrarError();
    }
  }
  mostrarError() {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Ingrese todos los datos necesarios",
      footer:'<a href="home/proyecto/registrar"></a>'
    });
  }

}
