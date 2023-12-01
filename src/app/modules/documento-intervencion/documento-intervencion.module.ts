import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { DocumentoIntervencionRoutingModule } from './documento-intervencion-routing.module';
import { DocumentoIntervencionComponent } from './listar/documento-intervencion/documento-intervencion.component';
import { RouterModule } from '@angular/router';
import { FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    DocumentoIntervencionComponent
  ],
  imports: [
    CommonModule,
    DocumentoIntervencionRoutingModule,
    RouterModule,
    FormsModule

  ]
})
export class DocumentoIntervencionModule { }
