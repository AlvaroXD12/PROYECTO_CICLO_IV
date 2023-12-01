import { Component, OnInit } from '@angular/core';
import { ActividadPlaniService } from '../../services/actividad-plani.service';
import { Actividad_plani } from 'src/app/models/Actividad_plani';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-actividad-plani',
  templateUrl: './actividad-plani.component.html',
  styleUrls: ['./actividad-plani.component.css']
})
export class ActividadPlaniComponent implements OnInit {
  actividadplani: Actividad_plani[] = [];
  actividadplanis: Actividad_plani = new Actividad_plani();

  constructor(
    private actividadplaniService: ActividadPlaniService,
    private route: ActivatedRoute,
    private router: Router,
    
  ) { }

  ngOnInit(): void {
    this.listarporActividad()
  }

  onSubmit() {
    this.guardarActPlan();
  }

  listarporActividad(){
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.actividadplaniService.obtenerActividadesPorProyecto(id).subscribe(data => {
        this.actividadplani = data;
        console.log(data)
       });
    });
  }
  Eliminar(id: number) {
    this.Mensaje().then((result) => {
      if (result.isConfirmed) {
        this.actividadplaniService.eliminar(id).subscribe(() => {
          this.route.params.subscribe(params => {
            const proyectoId = params['id'];
            this.actividadplaniService.obtenerActividadesPorProyecto(proyectoId).subscribe(data => {
              this.actividadplani = data;
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
  Editar(id: number) {
    const actividadSeleccionada = this.actividadplani.find(act => act.id === id);
    if (actividadSeleccionada) {
      this.actividadplanis = { ...actividadSeleccionada }; 
    } else {
      console.log('Actividad no encontrada');
    }
  }
  createTutorial() {
    this.route.params.subscribe(params => {
      const idProyecto = params['id'];
      this.actividadplanis.proyecto = { id: idProyecto }; 
      this.actividadplaniService.crear(this.actividadplanis).subscribe(data => {
        console.log(data);
        this.listarporActividad();
        this.showModal();
        this.actividadplanis = new Actividad_plani();
      });
    });
  }
  datosIngresados(): boolean {
    if (
      this.actividadplanis &&
      this.actividadplanis.nombre_actividad !== undefined &&
      this.actividadplanis.fecha_inicio !== undefined &&
      this.actividadplanis.fecha_fin !== undefined &&
      this.actividadplanis.material_insumo !== undefined &&
      this.actividadplanis.cantidad !== undefined &&
      this.actividadplanis.unidad_media !== undefined &&
      this.actividadplanis.costo_unitario !== undefined &&
      this.actividadplanis.costo_parcial !== undefined &&
      this.actividadplanis.cuenta !== undefined &&
      this.actividadplanis.responsable!== undefined 
    ) {
      return true;
    }
    return false;
  }
  guardarActPlan() {
    if (this.datosIngresados()) {
      this.createTutorial()
    } else {
      this.mostrarError();
    }
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
  mostrarError() {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Ingrese todos los datos necesarios",
      footer:'<a href="home/proyecto/registrar"></a>'
    });
  }
}
