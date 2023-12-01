import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'

import { Roles } from 'src/app/models/Roles';

@Injectable({
  providedIn: 'root'
})

export class RegisRolesService {

  private url: string = 'http://localhost:8085/roles';

  constructor(private http: HttpClient) { }
  listar(): Observable<Roles[]> {
    return this.http.get<Roles[]>(this.url + '/all');
  }

  crear(roles: Roles): Observable<Object>{
    return this.http.post<Roles>(this.url +'/add' , roles);
  }

  editar(id: number, roles: Roles) : Observable<Object>{
    return this.http.put(this.url + '/edit/' + id, roles);
  }
  
  eliminar(id: number): Observable<any> {
    return this.http.delete(this.url + '/delete/' + id);
  }

  IDroles(id: number): Observable<any> {
    return this.http.get<Roles>(this.url + '/' + id);
  }
  obtenerRolesPorProyecto(id: number): Observable<Roles[]> {
    return this.http.get<Roles[]>(this.url +'/'+  id + '/Roles');
  }
}
