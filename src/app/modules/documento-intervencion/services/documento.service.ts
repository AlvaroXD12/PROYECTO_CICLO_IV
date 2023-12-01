import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { Documento } from '../../../models/documento';
import { Ubigeo } from 'src/app/models/Ubigeo';
import { Parametros } from 'src/app/models/Parametros';

@Injectable({
  providedIn: 'root'
})

export class DocumentoService {

  private url: string = 'http://localhost:8085/documento';

  constructor(private http: HttpClient) { }
  listar(): Observable<any> {
    return this.http.get<Documento[]>(this.url + '/all');
  }

  crear(documento: Documento): Observable<Documento> {
    return this.http.post<Documento>(this.url + '/add', documento)
  }

  editar(id: number,documento: Documento): Observable<Documento> {
    return this.http.put<Documento>(this.url + '/edit/' + id, documento);
  }

  eliminar(id: number): Observable<any> {
    return this.http.delete(this.url + '/delete/' + id);
  }

  IDdocumento(id: number): Observable<any> {
    return this.http.get<Documento>(this.url + '/' + id);
  }


  private url1: string = 'http://localhost:8085/ubigeo';

  listarUbi(): Observable<Ubigeo[]> {
    return this.http.get<Ubigeo[]>(this.url1 + '/all');
  }

  private url2: string = 'http://localhost:8085/parametros';

  listarPar(): Observable<Parametros[]> {
    return this.http.get<Parametros[]>(this.url2 + '/all');
  }
}
