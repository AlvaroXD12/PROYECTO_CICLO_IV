import { Component, OnInit, inject } from '@angular/core';
import { ListproyecGruposService } from '../services/listproyec-grupos.service';
import { Alumno } from 'src/app/models/Alumno';
import { Roles } from 'src/app/models/Roles';
import { Actividad_ejecu } from 'src/app/models/Actividad_ejecu';

import { AlumnoRol } from 'src/app/models/Alumno_rol';
import { Grupo } from 'src/app/models/grupo';

@Component({
  selector: 'app-registrargrupos',
  templateUrl: './registrargrupos.component.html',
  styleUrls: ['./registrargrupos.component.css']
})

export class RegistrargruposComponent implements OnInit {
  grupos:AlumnoRol[]=[]
  mock:AlumnoRol= new AlumnoRol()
  alumnos:Alumno[]=[];
  grupoAdd:any
  roles:Roles[]=[];
  ejecucion:Actividad_ejecu[]=[];
  grupo: Grupo = new Grupo();
  _serviceREgistrarGrupos = inject(ListproyecGruposService)
  ngOnInit(): void {
    this.getAlumnos()
    this.getRoles()
    this.getActividadEjecu()
    this._serviceREgistrarGrupos.dataAddGrupo.subscribe(data  =>{
      console.log(data)
      this.grupoAdd = data;
      console.log(this.grupoAdd)
    })
  }

  selectAlumno(event:Event){
    const input = event.target as HTMLSelectElement;
    const value = input.value;
    this.mock.nombre = value
  }

  selectRol(event:Event){
    const input = event.target as HTMLInputElement;
    const value = input.value;
    this.mock.rol = value
  }

  guardar(){
    this.grupos.push(this.mock)
    this.mock = new AlumnoRol()
  }


  delete(nombre:string){
    this.grupos = this.grupos.filter(objeto => objeto.nombre != nombre);
  }

  getAlumnos(){
    this._serviceREgistrarGrupos.listaAlumno().subscribe(data  =>{
      this.alumnos = data;
      console.log(this.alumnos)
    })
  }
  getRoles(){
    this._serviceREgistrarGrupos.listaRolers().subscribe(data  =>{
      this.roles = data;
      console.log(this.roles)
    })
  }
  getActividadEjecu(){
    this._serviceREgistrarGrupos.listaEjecucion().subscribe(data  =>{
      this.ejecucion = data;
      console.log(this.ejecucion)
    })
  }

  Guardar(){
    this._serviceREgistrarGrupos.crear(this.grupo).subscribe((data) => {
      console.log(data)
    })
  }


  Guardar2(){
    this._serviceREgistrarGrupos.crear(this.grupo).subscribe((data) => {
      console.log(data)
    })
  }

}
