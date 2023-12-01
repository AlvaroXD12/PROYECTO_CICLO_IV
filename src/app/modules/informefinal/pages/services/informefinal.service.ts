import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Escu_prof } from 'src/app/models/Escu_prof';
import { Parametros } from 'src/app/models/Parametros';
import { Proyecto } from 'src/app/models/Proyecto';
import { Informefinal } from 'src/app/models/informefinal';


@Injectable({
  providedIn: 'root'
})
export class InformefinalService {

  private url : string = 'http://localhost:8085/informe_final';

  constructor(private http: HttpClient) { }

  listar(): Observable <any>{
    return this.http.get<Informefinal[]>(this.url + '/all');
  }
  
  crear(informefinal: Informefinal): Observable<Informefinal>{
    return this.http.post<Informefinal>(this.url +'/add' , informefinal);
  }

  editar(id: number,informefinal: Informefinal): Observable<Informefinal> {
    return this.http.put<Informefinal>(this.url + '/edit' + id, informefinal);
  }

  eliminar(id: number): Observable<any> {
    return this.http.delete(this.url + '/delete/' + id);
  }

  IDinformefinal(id: number): Observable<any> {
    return this.http.get<Informefinal>(this.url + '/' + id);
  }

  private url1: string = 'http://localhost:8085/escuela_profesional';

  listarEscu(): Observable<any> {
    return this.http.get<Escu_prof>(this.url1 + '/all');
  }

  private url2: string = 'http://localhost:8085/parametros';

  listarPar(): Observable<any> {
    return this.http.get<Parametros>(this.url2 + '/all');
  }

  private url3: string = 'http://localhost:8085/proyecto';
  listarPro(): Observable<Proyecto[]> {
    return this.http.get<Proyecto[]>(this.url2 + '/all');
  }
}