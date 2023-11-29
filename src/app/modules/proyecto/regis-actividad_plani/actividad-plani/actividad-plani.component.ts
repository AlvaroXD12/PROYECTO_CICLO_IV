import { Component, OnInit } from '@angular/core';
import { ActividadPlaniService } from '../../services/actividad-plani.service';
import { Actividad_plani } from 'src/app/models/Actividad_plani';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-actividad-plani',
  templateUrl: './actividad-plani.component.html',
  styleUrls: ['./actividad-plani.component.css']
})
export class ActividadPlaniComponent implements OnInit {
  actividadplani: Actividad_plani[] = [];
  actividadplanis: Actividad_plani = new Actividad_plani();

  constructor(
    private actividadplaniService: ActividadPlaniService,
    private route: ActivatedRoute,
    
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.actividadplaniService.obtenerActividadesPorProyecto(id).subscribe(data => {
        this.actividadplani = data;
        console.log(data)
       } );

    });
  }

  
  createTutorial() {
    this.actividadplaniService.crear(this.actividadplanis).subscribe(data => {
      console.log(data);
    });
  }
}
