import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core'
import { Observable } from 'rxjs';
import { Proyecto } from 'src/app/models/Proyecto';
import { environment } from 'src/environments/environment';


@Injectable({
    providedIn: 'root'
})

export class proyectoService {
    private myAppUrl: string;
    private myApiUrl: string;

    constructor(private http: HttpClient) {
        this.myAppUrl = environment.endpoint;
        this.myApiUrl = '';
        }
        getAprobacion(): Observable<Proyecto[]> {
            return this.http.get<Proyecto[]>('http://localhost:8085/proyecto/' + 'all');
           }
}