import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core'
import { Observable } from 'rxjs';
import { aprobacion } from 'src/app/models/aprobacion';
import { environment } from 'src/environments/environment';


@Injectable({
    providedIn: 'root'
})

export class aprobacionService {
    private myAppUrl: string;
    private myApiUrl: string;

    constructor(private http: HttpClient) {
        this.myAppUrl = environment.endpoint;
        this.myApiUrl = '';
        }
        getAprobacion(): Observable<aprobacion[]> {
            return this.http.get<aprobacion[]>('http://localhost:8085/aprobacion/' + 'all');
           }
}