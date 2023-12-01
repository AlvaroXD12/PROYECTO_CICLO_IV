import { Component } from '@angular/core';
import { Escu_prof } from 'src/app/models/Escu_prof';
import { Parametros } from 'src/app/models/Parametros';
import { Proyecto } from 'src/app/models/Proyecto';
import { Informefinal } from 'src/app/models/informefinal';
import { InformefinalService } from '../services/informefinal.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-addinformefinal',
  templateUrl: './addinformefinal.component.html',
  styleUrls: ['./addinformefinal.component.css']
})
export class AddinformefinalComponent {
  informefinal: Informefinal[] = [];

  parametros: Parametros[] = [];

  escu_prof: Escu_prof[] = [];

  proyectos: Proyecto[] = [];

  Informefinal: Informefinal = new Informefinal();

  proyecto: Proyecto = new Proyecto();


  constructor(
    private InformefinalService: InformefinalService,
    private router: Router,
    private route: ActivatedRoute
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
      this.route.params.subscribe(params => {
        const id = params['id']
        console.log(id);
        this.InformefinalService.IDinformefinal(id).subscribe(data =>{
          this.informefinal = data
          console.log(data);
        })

      }
      )
    }

  Guardar() {
    this.InformefinalService.crear(this.Informefinal).subscribe((data) => {
    this.router.navigate(['/home/informefinal'])
      console.log(data)
    })
  }


}