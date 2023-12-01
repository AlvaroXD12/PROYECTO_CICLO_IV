
import { ValidacioneviService } from '../services/validacionevi.service';
import { Component } from '@angular/core';
import { Evidencia } from 'src/app/models/evidencia';

@Component({
  selector: 'app-validacion-Evidencia',
  templateUrl: './validacionEvidencia.component.html',
  styleUrls: ['./validacionEvidencia.component.css']
})

export class ValidacionEvidenciaComponent {

  evidencia: Evidencia[] = [];

  constructor(
    private validacioneviService: ValidacioneviService ) { }

  ngOnInit(): void {
    this.validacioneviService.listar().subscribe(data => {
      this.evidencia = data
      console.log(data)
    });
    ;
  }


  Eliminar(id: number) {
    this.validacioneviService.eliminar(id).subscribe(() => {
      // Aquí puedes realizar alguna acción después de eliminar el documento, si es necesario.
      // Por ejemplo, puedes actualizar la lista de documentos.
      this.validacioneviService.listar().subscribe(data => {
        this.evidencia = data
        console.log(data);
      });
    });
  }

}
