import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs'
import { Actividad_ejecu } from 'src/app/models/Actividad_ejecu';
import { Alumno } from 'src/app/models/Alumno';
import { Escu_prof } from 'src/app/models/Escu_prof';
import { Proyecto } from 'src/app/models/Proyecto';
import { Roles } from 'src/app/models/Roles';

@Injectable({
  providedIn: 'root'
})

export class ListproyecGruposService {
  public dataAddGrupo:BehaviorSubject<any> = new BehaviorSubject<any>(null);
  private url: string = 'http://localhost:8085/grupo';
  private urlEScuela:string = 'http://localhost:8085/escuela_profesional'
  private urlAlumno:string = 'http://localhost:8085/alumno'
  private urlRoles:string = 'http://localhost:8085/roles'
  private urlEjecucion:string = 'http://localhost:8085/actividad_ejecu'
  constructor(private http: HttpClient) { }

  listar(): Observable<any[]> {
    return this.http.get<any[]>(this.url + '/all');
  }

  listaEScuela(): Observable<Escu_prof[]> {
    return this.http.get<Escu_prof[]>(this.urlEScuela + '/all');
  }
  listaAlumno(): Observable<Alumno[]> {
    return this.http.get<Alumno[]>(this.urlAlumno + '/all');
  }
  listaRolers(): Observable<Roles[]> {
    return this.http.get<Roles[]>(this.urlRoles + '/all');
  }
  listaEjecucion(): Observable<Actividad_ejecu[]> {
    return this.http.get<Actividad_ejecu[]>(this.urlEjecucion + '/all');
  }

  crear(proyecto: Proyecto){
    return this.http.post<string>(this.url +'/add' , proyecto);
  }

  editar(proyecto: Proyecto) {
    return this.http.put(this.url, proyecto);
  }

  eliminar(id: number): Observable<any> {
    return this.http.delete(this.url + '/delete/' + id);
  }

  IDproyecto(id: Proyecto) {
    this.http.get(this.url + '/' + id);
  }
}
