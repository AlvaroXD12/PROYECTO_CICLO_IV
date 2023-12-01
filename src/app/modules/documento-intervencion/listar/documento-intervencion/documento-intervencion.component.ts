import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Parametros } from 'src/app/models/Parametros';
import { Documento } from 'src/app/models/documento';
import { DocumentoService } from 'src/app/modules/documento-intervencion/services/documento.service';
import { Ubigeo } from 'src/app/models/Ubigeo';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-documento-intervencion',
  templateUrl: './documento-intervencion.component.html',
  styleUrls: ['./documento-intervencion.component.css']
})

export class DocumentoIntervencionComponent implements OnInit {

  documentos: Documento[] = [];

  parametros: Parametros[] = [];

  ubigeo: Ubigeo[] = [];

  documento: Documento = new Documento();


  constructor(
    private documentoService: DocumentoService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.documentoService.listar().subscribe(data => {
      this.documentos = data
      console.log(data)
    });

    this.documentoService.listarPar().subscribe(data => {
      this.parametros = data
      console.log(data);
    });
    this.documentoService.listarUbi().subscribe(data => {
      this.ubigeo = data
      console.log(data);
    })
  }

  Editar(id: number) {
    this.documentoService.editar(id, this.documento).subscribe(dato => {
      this.router.navigate(['/home/documento_intervencion/edit']);
    })
  }



  filtro(event: Event) {
    const input = event.target as HTMLInputElement;
    const value = input.value;
    this.documentoService.listar().subscribe(data => {
      this.documentos = data
      this.documentos = this.documentos.filter(data => data.parametros?.id == parseInt(value) + 1)

    })
  }

  filtro2(): void {
    const filtro = this.documento.estado;
    console.log(filtro)
    this.documentoService.listar().subscribe(data => {
      this.documentos = data
      this.documentos = this.documentos.filter(doc => doc.estado === filtro)
    })
  }

  filtro3(event: Event) {
    const input = event.target as HTMLInputElement;
    const value = input.value;
    this.documentoService.listar().subscribe(data => {
      this.documentos = data
      this.documentos = this.documentos.filter(data => data.ubigeo?.id == parseInt(value) + 1)
    })
  }

  abrirModalEliminar(id: number): void {
    Swal.fire({
      title: '¿Está seguro que desea eliminar?',
      text: '¡No podrás revertir esto!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminarlo'
    }).then((result) => {
      if (result.isConfirmed) {
        this.Eliminar(id);
      }
    });
  }
  

  
  Eliminar(id: number): void {
    this.documentoService.eliminar(id).subscribe(() => {
      // Actualizar la lista de documentos después de eliminar
      this.documentoService.listar().subscribe(data => {
        this.documentos = data;
        Swal.fire({
          title: '¡Eliminado!',
          text: 'Tu archivo ha sido eliminado.',
          icon: 'success'
        });
      });
    });
  }



}