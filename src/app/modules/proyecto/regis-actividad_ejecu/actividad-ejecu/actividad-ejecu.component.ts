import { Component, OnInit } from '@angular/core';
import { ActividadEjecuService } from '../../services/actividad-ejecu.service';
import { Actividad_ejecu } from 'src/app/models/Actividad_ejecu';
import { ActivatedRoute, Router } from '@angular/router';
import { Tip_proyec } from 'src/app/models/Tip_proyect';
import { TipProyecService } from '../../services/tip-proyec.service';
import { Parametros } from 'src/app/models/Parametros';
import { ParametrosService } from '../../services/parametros.service';

@Component({
  selector: 'app-actividad-ejecu',
  templateUrl: './actividad-ejecu.component.html',
  styleUrls: ['./actividad-ejecu.component.css']
})
export class ActividadEjecuComponent implements OnInit {
  actividadejecu: Actividad_ejecu[] = [];
  parametros: Parametros[]=[];
  actividadejecuc: Actividad_ejecu = new Actividad_ejecu();

  constructor(
    private route: ActivatedRoute,
    private actividadejecuService: ActividadEjecuService,
    private parametrosService: ParametrosService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.ListarporProyecto()
    this.ListarParametros()
  }
  onSubmit() {
    this.createTutorial();
  }
  ListarporProyecto(){
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.actividadejecuService.obtenerActividadesPorProyecto(id).subscribe(data => {
        this.actividadejecu = data;
        console.log(data)
       } );
    });
  }
  Eliminar(id: number) {
    this.actividadejecuService.eliminar(id).subscribe(() => {
      this.ListarporProyecto();
    });
  }
  ListarParametros() {
    this.parametrosService.listar().subscribe(data => {
      this.parametros = data;  
    });
  }
  createTutorial() {
    this.actividadejecuService.crear(this.actividadejecuc).subscribe(data => {
      console.log(data);
      this.router.navigate(["/home/proyecto/registrar_actividadE/:id"]);
    });
  }
}
