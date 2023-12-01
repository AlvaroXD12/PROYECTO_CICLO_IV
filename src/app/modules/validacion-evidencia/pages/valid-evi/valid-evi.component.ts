import { MatDialog } from '@angular/material/dialog';
import { Component } from '@angular/core';
import { Evidencia } from 'src/app/models/evidencia';
import { ValideviService } from '../services/validevi.service';
import { InformeComponent } from '../informe/informe.component';

@Component({
  selector: 'app-valid-evi',
  templateUrl: './valid-evi.component.html',
  styleUrls: ['./valid-evi.component.css'],
})
export class ValidEviComponent {
  title = 'angular-dialog';
  evidencia: Evidencia[] = [];
  constructor(
    private valideviService: ValideviService,
    private MatDialog: MatDialog
  ) {}

  openDialog() {
    this.MatDialog.open(InformeComponent, {
      width: '50rem',
      height: '30rem',
    });
  }

  ngOnInit(): void {
    this.valideviService.listar().subscribe(data => {
      this.evidencia = data
      console.log(data)
    });
    ;
  }


  Eliminar(id: number) {
    this.valideviService.eliminar(id).subscribe(() => {
      // Aquí puedes realizar alguna acción después de eliminar el documento, si es necesario.
      // Por ejemplo, puedes actualizar la lista de documentos.
      this.valideviService.listar().subscribe(data => {
        this.evidencia = data
        console.log(data);
      });
    });
  }

}
