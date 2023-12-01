import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { Parametros } from 'src/app/models/Parametros';

@Injectable({
  providedIn: 'root'
})

export class ParametrosService {

  private url: string = 'http://localhost:8085/parametros';

  constructor(private http: HttpClient) { }
  listar(): Observable<Parametros[]> {
    return this.http.get<Parametros[]>(this.url + '/all');
  }

  crear(parametros: Parametros): Observable<Object>{
    return this.http.post<Parametros>(this.url +'/add' , parametros);
  }

  editar(id: number, parametros: Parametros) : Observable<Object>{
    return this.http.put(this.url + '/edit/' + id, parametros);
  }
  
  eliminar(id: number): Observable<any> {
    return this.http.delete(this.url + '/delete/' + id);
  }

  IDparametros(id: Parametros) {
    this.http.get(this.url + '/' + id);
  }
  
}
