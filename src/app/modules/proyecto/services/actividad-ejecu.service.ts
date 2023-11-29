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

  crear(actividadejecu: Actividad_ejecu){
    return this.http.post<string>(this.url +'/add' , actividadejecu);
  }

  editar(actividadejecu: Actividad_ejecu) {
    return this.http.put(this.url, actividadejecu);
  }
  
  eliminar(id: number): Observable<any> {
    return this.http.delete(this.url + '/delete/' + id);
  }

  IDactividadejecu(id: Actividad_ejecu) {
    this.http.get(this.url + '/' + id);
  }
  obtenerActividadesPorProyecto(id: number): Observable<Actividad_ejecu[]> {
    return this.http.get<Actividad_ejecu[]>(this.url +'/'+  id + '/actividades');
  }
}
