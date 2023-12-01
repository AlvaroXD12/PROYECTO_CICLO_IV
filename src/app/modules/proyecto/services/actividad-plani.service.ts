import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { Actividad_plani } from 'src/app/models/Actividad_plani';


@Injectable({
  providedIn: 'root'
})

export class ActividadPlaniService {

  private url: string = 'http://localhost:8085/actividad_plani';

  constructor(private http: HttpClient) { }
  listar(): Observable<Actividad_plani[]> {
    return this.http.get<Actividad_plani[]>(this.url + '/all');
  }

  crear(actividad_plani: Actividad_plani): Observable<Object>{
    return this.http.post<Actividad_plani>(this.url +'/add' , actividad_plani);
  }

  editar(id: number, actividad_plani: Actividad_plani) : Observable<Object>{
    return this.http.put(this.url + '/edit/' + id, actividad_plani);
  }
  
  eliminar(id: number): Observable<any> {
    return this.http.delete(this.url + '/delete/' + id);
  }

  IDactividadplani(id: number): Observable<any> {
    return this.http.get<Actividad_plani>(this.url + '/' + id);
  }

  obtenerActividadesPorProyecto(id: number): Observable<Actividad_plani[]> {
    return this.http.get<Actividad_plani[]>(this.url +'/'+  id + '/actividades');
  }
  
}
