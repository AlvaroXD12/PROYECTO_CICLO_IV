import { Informefinal } from 'src/app/models/informefinal';
import { InformefinalService } from './../services/informefinal.service';
import { Component,  OnInit  } from '@angular/core';
import { Parametros } from 'src/app/models/Parametros';
import { Escu_prof } from 'src/app/models/Escu_prof';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/models/Proyecto';

@Component({
  selector: 'app-registrarinformefinal',
  templateUrl: './registrarinformefinal.component.html',
  styleUrls: ['./registrarinformefinal.component.css']
})
export class RegistrarinformefinalComponent implements OnInit{
  informefinal: Informefinal[] = [];

  parametros: Parametros[] = [];

  escu_prof: Escu_prof[] = [];

  proyectos: Proyecto[] = [];

  Informefinal: Informefinal = new Informefinal();

  proyecto: Proyecto = new Proyecto();


  constructor(
    private InformefinalService: InformefinalService,
    private router: Router,

  ){ }

  ngOnInit(): void {
    this.InformefinalService.listarEscu().subscribe(dato => {
      this.escu_prof = dato
      console.log(dato);
    }),

      this.InformefinalService.listarPar().subscribe(data => {
        this.parametros = data
        console.log(data);
      }),

      this.InformefinalService.listarPro().subscribe(data => {
        this.proyectos = data
        console.log(data);
      })
  }

  Guardar() {
    this.InformefinalService.crear(this.Informefinal).subscribe((data) => {
    this.router.navigate(['/home/informefinal'])
      console.log(data)
    })
  }


}