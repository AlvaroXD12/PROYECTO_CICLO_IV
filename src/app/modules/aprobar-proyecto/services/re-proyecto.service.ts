import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { reporte_proyecto } from 'src/app/models/re_proyecto';


@Injectable({
    providedIn: 'root'
})

export class reporteproyectoService {
    private myAppUrl: string;
    private myApiUrl: string;

    constructor(private http: HttpClient) {
        this.myAppUrl = environment.endpoint;
        this.myApiUrl = '';
        }
        getreporteproyecto(): Observable<reporte_proyecto[]> {
            return this.http.get<reporte_proyecto[]>('http://localhost:8085/re_proyecto/' + 'all');
           }
}