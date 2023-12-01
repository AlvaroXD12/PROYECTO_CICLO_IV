import { Component, OnInit } from '@angular/core';
import { Roles } from 'src/app/models/Roles';
import { RegisRolesService } from '../../services/regis-roles.service';
import { ActivatedRoute } from '@angular/router';
import { Parametros } from 'src/app/models/Parametros';
import { ParametrosService } from '../../services/parametros.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-regis-roles',
  templateUrl: './regis-roles.component.html',
  styleUrls: ['./regis-roles.component.css']
})
export class RegisRolesComponent implements OnInit {
  roles: Roles[] = [];
  parametros: Parametros[]=[];
  role: Roles = new Roles();

  constructor(
    private regisrolesService: RegisRolesService,
    private route: ActivatedRoute,
    private parametrosService: ParametrosService,
  ) { }

  ngOnInit(): void {
    this.ListarporProyecto()
    this.ListarParametros()
  }
  onSubmit() {
    this.guardarRol();
  }
  ListarParametros() {
    this.parametrosService.listar().subscribe(data => {
      this.parametros = data.filter(parametro => parametro.id === 3 || parametro.id === 4 || parametro.id === 5 || parametro.id === 6 || parametro.id === 7);  
    });
  }
  ListarporProyecto(){
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.regisrolesService.obtenerRolesPorProyecto(id).subscribe(data => {
        this.roles = data;
        console.log(data)
       } );

    });
  }
  Eliminar(id: number) {
    this.Mensaje().then((result) => {
      if (result.isConfirmed) {
        this.regisrolesService.eliminar(id).subscribe(() => {
          this.route.params.subscribe(params => {
            const id = params['id'];
            this.regisrolesService.obtenerRolesPorProyecto(id).subscribe(data => {
              this.roles = data;
              console.log(data);
            });
          });
        });
      }
    });
  }
  Editar(id: number) {
    const rolSeleccionado = this.roles.find(rol => rol.id === id);
    if (rolSeleccionado) {
      this.role = { ...rolSeleccionado };
      this.regisrolesService.IDroles(id).subscribe(data => {
        this.role = data;
    
        const par = this.parametros.find(par => par.id === this.role.parametros?.id);
        if (par) {
          this.role.parametros = par;
        } 
      }); 
    } else {
      console.log('Actividad no encontrada');
    }
  }
  Mensaje() {
    return Swal.fire({
      title: "¿Estás seguro que deseas eliminar?",
      showDenyButton: true,
      confirmButtonText: "Sí",
      denyButtonText: "No"
    });
  }
  createTutorial() {
    this.route.params.subscribe(params => {
      const idProyecto = params['id'];
      this.role.proyecto = { id: idProyecto }; 
      this.regisrolesService.crear(this.role).subscribe(data => {
        console.log(data);
        this.ListarporProyecto();
        this.showModal();
        this.role = new Roles();
      });
    });
  }
  datosIngresados(): boolean {
    if (
      this.role &&
      this.role.parametros!== undefined &&
      this.role.horas !== undefined &&
      this.role.nota !== undefined &&
      this.role.funcion !== undefined 
    ) {
      return true;
    }
    return false;
  }
  guardarRol() {
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
