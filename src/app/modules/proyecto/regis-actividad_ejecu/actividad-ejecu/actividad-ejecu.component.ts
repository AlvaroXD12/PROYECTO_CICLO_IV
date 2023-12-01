import { Component, OnInit } from '@angular/core';
import { ActividadEjecuService } from '../../services/actividad-ejecu.service';
import { Actividad_ejecu } from 'src/app/models/Actividad_ejecu';
import { ActivatedRoute, Router } from '@angular/router';
import { Parametros } from 'src/app/models/Parametros';
import { ParametrosService } from '../../services/parametros.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-actividad-ejecu',
  templateUrl: './actividad-ejecu.component.html',
  styleUrls: ['./actividad-ejecu.component.css']
})
export class ActividadEjecuComponent implements OnInit {
  actividadejecu: Actividad_ejecu[] = [];
  parametros: Parametros[]=[];
  actividadejecuc: Actividad_ejecu = new Actividad_ejecu();
 

  constructor(
    private route: ActivatedRoute,
    private actividadejecuService: ActividadEjecuService,
    private parametrosService: ParametrosService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.ListarporProyecto()
    this.ListarParametros()
    
  }
  onSubmit() {
    this.guardarActEjecu();
  }
  ListarporProyecto(){
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.actividadejecuService.obtenerActividadesPorProyecto(id).subscribe(data => {
        this.actividadejecu = data;
        console.log(data)
       } );
    });
  }
  Eliminar(idp: number) {
    this.Mensaje().then((result) => {
      if (result.isConfirmed) {
        this.actividadejecuService.eliminar(idp).subscribe(() => {
          this.route.params.subscribe(params => {
            const id = params['id'];
            this.actividadejecuService.obtenerActividadesPorProyecto(id).subscribe(data => {
              this.actividadejecu = data;
              console.log(data);
            });
          });
        });
      }
    });
  }
  Mensaje() {
    return Swal.fire({
      title: "¿Estás seguro que deseas eliminar?",
      showDenyButton: true,
      confirmButtonText: "Sí",
      denyButtonText: "No"
    });
  }

Editar(idp: number) {
  
  const actividadSeleccionada = this.actividadejecu.find(act => act.idp === idp);
  if (actividadSeleccionada) {
    this.actividadejecuc = { ...actividadSeleccionada }; 
    this.actividadejecuService.IDactividadejecu(idp).subscribe(data => {
      this.actividadejecuc = data;
  
      const par = this.parametros.find(par => par.id === this.actividadejecuc.parametros?.id);
          if (par) {
            this.actividadejecuc.parametros = par;
          } 
    });
  } else {
    console.log('Actividad no encontrada');
  }
}
  ListarParametros() {
    this.parametrosService.listar().subscribe(data => {
      this.parametros = data.filter(parametro => parametro.id === 11 || parametro.id === 12);  
    });
  }
  createTutorial() {
    this.route.params.subscribe(params => {
      const idProyecto = params['id'];
      this.actividadejecuc.proyecto = { id: idProyecto }; 
      this.actividadejecuService.crear(this.actividadejecuc).subscribe(data => {
        console.log(data);
        this.ListarporProyecto();
        this.showModal();
        this.actividadejecuc = new Actividad_ejecu();
      });
    });
  }
  datosIngresados(): boolean {
    if (
      this.actividadejecuc &&
      this.actividadejecuc.nombre_actividad !== undefined &&
      this.actividadejecuc.fecha_inicio !== undefined &&
      this.actividadejecuc.fecha_fin !== undefined &&
      this.actividadejecuc.parametros !== undefined &&
      this.actividadejecuc.descripcion !== undefined 
    ) {
      return true;
    }
    return false;
  }
  
  guardarActEjecu() {
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
