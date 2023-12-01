import { Component, OnInit } from '@angular/core';
import { Documento } from 'src/app/models/documento';
import { DocumentoService } from 'src/app/modules/documento-intervencion/services/documento.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Ubigeo } from 'src/app/models/Ubigeo';
import { Parametros } from 'src/app/models/Parametros';


@Component({
  selector: 'app-edit-intervencion',
  templateUrl: './edit-intervencion.component.html',
  styleUrls: ['./edit-intervencion.component.css']
})
export class EditIntervencionComponent implements OnInit {


  documentos: Documento[] = [];

  ubigeo: Ubigeo[] = [];

  parametros: Parametros[] = [];


  documento: Documento = new Documento();
  constructor(
    private documentoService: DocumentoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.listarpara();
    this.listarubi();
    this.aparecer();
  }

  listarubi() {
    this.documentoService.listarUbi().subscribe(dato => {
      this.ubigeo = dato
      console.log(dato)
    });
  }

  listarpara() {
    this.documentoService.listarPar().subscribe(dato => {
      this.parametros = dato.filter(parametro => parametro.id === 1 || parametro.id === 2)
    })
  }

  aparecer() {

    this.route.params.subscribe(params => {
      const id = params['id']
      console.log(id);

      this.documentoService.IDdocumento(id).subscribe(data => {
        this.documento = data;
        const ubi = this.ubigeo.find(ubi => ubi.id === this.documento.ubigeo?.id);
        if (ubi) {
          this.documento.ubigeo = ubi;
        } else {
          console.error("Ubigeo no encontrado");
        }

        const par = this.parametros.find(par => par.id === this.documento.parametros?.id);
        if (par) {
          this.documento.parametros = par;
        } else {
          console.error("Parametros no encontrado");
        }
      })
    }
    )
  }

  Guardar() {
    console.log(this.documento)
    this.documentoService.crear(this.documento).subscribe((data) => {
      this.router.navigate(['/home/documento_intervencion'])
      console.log(data)
    })
  }
}