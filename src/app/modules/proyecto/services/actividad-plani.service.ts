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

  crear(actividadplani: Actividad_plani){
    return this.http.post<string>(this.url +'/add' , actividadplani);
  }

  editar(actividadplani: Actividad_plani) {
    return this.http.put(this.url, actividadplani);
  }
  
  eliminar(id: number): Observable<any> {
    return this.http.delete(this.url + '/delete/' + id);
  }

  IDactividadplani(id: Actividad_plani) {
    this.http.get(this.url + '/' + id);
  }

  obtenerActividadesPorProyecto(id: number): Observable<Actividad_plani[]> {
    return this.http.get<Actividad_plani[]>(this.url +'/'+  id + '/actividades');
  }
  
}
