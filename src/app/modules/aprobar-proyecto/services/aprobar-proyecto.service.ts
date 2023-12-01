import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { aprobacion } from 'src/app/models/aprobacion';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AprobarProyectoService {

  private url : string = 'http://localhost:8085/aprobacion';

  constructor(private http: HttpClient) { }

  listar(): Observable <aprobacion[]>{
    return this.http.get<aprobacion[]>(this.url + '/all');
  }
  crear(aprobacion: aprobacion){
    return this.http.post<string>(this.url +'/add' , aprobacion);
  }

  editar(aprobacion: aprobacion) {
    return this.http.put(this.url, aprobacion);
  }

  eliminar(id: number): Observable<any> {
    return this.http.delete(this.url + '/delete/' + id);
  }

  IDaprobacion(id: number) {
    this.http.get(this.url + '/' + id);
  }
obtenerActividadesPorProyecto(id: number): Observable<aprobacion[]> {
  return this.http.get<aprobacion[]>(this.url +'/'+  id + '/aprobacion');
}
}

