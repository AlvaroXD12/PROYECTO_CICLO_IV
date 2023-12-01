import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/models/Proyecto';
import { CoordinadorService } from '../../services/coordinador.service';
import { Coordinador } from 'src/app/models/Coordinador';
import { ProyectoService } from '../../services/proyecto.service';
import { ActivatedRoute, Router } from '@angular/router';
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
  selector: 'app-editar-proyecto',
  templateUrl: './editar-proyecto.component.html',
  styleUrls: ['./editar-proyecto.component.css']
})
export class EditarProyectoComponent implements OnInit{
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
    private route: ActivatedRoute,
  ) { }
  ngOnInit(): void {
    this.EditarProyect()
    this.ListarCoordinador()
    this.ListarTip_proyec()
    this.ListarModalidad() 
    this.ListarDocumento()
    this.ListarEscuela()
    this.ListarParametros()
    this.ListarCiclo()
    this.aparecer()
    
  }
  onSubmit() {
    this.createTutorial();
  }
  EditarProyect(){
    this.route.params.subscribe(params => {
      const id = params['id']
      console.log(id);  
      this.proyectoService.IDproyecto(id).subscribe(data =>{
        this.proyecto = data
        console.log(data);
      }) 
    })
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
  aparecer() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      console.log(id);
  
      this.proyectoService.IDproyecto(id).subscribe(data => {
        this.proyecto = data;
  
        const cor = this.coordinador.find(cor => cor.id === this.proyecto.coordinador?.id);
        if (cor) {
          this.proyecto.coordinador = cor;
        } 
        const tip = this.tipproyec.find(tip => tip.id === this.proyecto.tip_proyec?.id);
        if (tip) {
          this.proyecto.tip_proyec = tip;
        }
        const mod = this.modalidad.find(mod => mod.id === this.proyecto.modalidad?.id);
        if (mod) {
          this.proyecto.modalidad = mod;
        } 
        const doc = this.documento.find(doc => doc.id === this.proyecto.documento?.id);
        if (doc) {
          this.proyecto.documento = doc;
        } 
        const esc = this.escuprof.find(esc => esc.id === this.proyecto.escu_prof?.id);
        if (esc) {
          this.proyecto.escu_prof = esc;
        } 
        const par = this.parametros.find(par => par.id === this.proyecto.parametros?.id);
        if (par) {
          this.proyecto.parametros = par;
        }
        const cic = this.ciclo.find(cic => cic.id === this.proyecto.ciclo?.id);
        if (cic) {
          this.proyecto.ciclo = cic;
        }
      });
    });
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

}
