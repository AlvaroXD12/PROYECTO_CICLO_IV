import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { Actividad_ejecu } from 'src/app/models/Actividad_ejecu';


@Injectable({
  providedIn: 'root'
})

export class ActividadEjecuService {

  private url: string = 'http://localhost:8085/actividad_ejecu';

  constructor(private http: HttpClient) { }
  listar(): Observable<Actividad_ejecu[]> {
    return this.http.get<Actividad_ejecu[]>(this.url + '/all');
  }

  crear(actividad_ejecu: Actividad_ejecu): Observable<Object>{
    return this.http.post<Actividad_ejecu>(this.url +'/add' , actividad_ejecu);
  }

  editar(idp: number, actividad_ejecu: Actividad_ejecu) : Observable<Object>{
    return this.http.put(this.url + '/edit/' + idp, actividad_ejecu);
  }
  
  eliminar(idp: number): Observable<any> {
    return this.http.delete(this.url + '/delete/' + idp);
  }

  IDactividadejecu(idp: number): Observable<any> {
    return this.http.get<Actividad_ejecu>(this.url + '/' + idp);
  }
  obtenerActividadesPorProyecto(id: number): Observable<Actividad_ejecu[]> {
    return this.http.get<Actividad_ejecu[]>(this.url +'/'+  id + '/actividades');
  }
}
