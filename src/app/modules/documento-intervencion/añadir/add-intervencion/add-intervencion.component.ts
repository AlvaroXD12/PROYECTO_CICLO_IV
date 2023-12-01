import { Component, OnInit } from '@angular/core';
import { Documento } from 'src/app/models/documento';
import { DocumentoService } from 'src/app/modules/documento-intervencion/services/documento.service';
import { Router } from '@angular/router';
import { Ubigeo } from 'src/app/models/Ubigeo';
import { Parametros } from 'src/app/models/Parametros';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-intervencion',
  templateUrl: './add-intervencion.component.html',
  styleUrls: ['./add-intervencion.component.css']
})
export class AddIntervencionComponent implements OnInit {


  documentos: Documento[] = [];

  ubigeo: Ubigeo[] = [];

  parametros: Parametros[] = [];

  documento: Documento = new Documento();

  constructor(
    private documentoService: DocumentoService,
    private router: Router,

  ) { }

  ngOnInit(): void {
      this.documentoService.listarPar().subscribe(dato => {
        this.parametros = dato;
      })
  }


  Modal() {
    this.Guardar1();
  }

  Guardar1() {
    if (this.datosIngresados()) {
      this.Guardar()
    } else {
      this.mostrarError();
    }
  }


  mostrarError() {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Ingrese todos los datos necesarios",
      footer:'<a href="home/proyecto/registrar"></a>'
    });
  }

  showModal(){
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Guardado exitosamente",
      showConfirmButton: false,
      timer: 1500,
      customClass: {
        popup: 'my-popup-class',
      }
    });
  }

  Guardar() {
    this.documentoService.crear(this.documento).subscribe((data) => {
      this.showModal();
      this.router.navigate(['/home/documento_intervencion'])
      console.log(data)
    })
  }

  datosIngresados(): boolean {
    if (
      this.documento &&
      this.documento.nombre !== undefined &&
      this.documento.institucion !== undefined &&
      this.documento.nombre_autoridad !== undefined &&
      this.documento.ubigeo !== undefined &&
      this.documento.fecha_ini !== undefined &&
      this.documento.fecha_fin !== undefined &&
      this.documento.parametros !== undefined &&
      this.documento.descripcion !== undefined
    ) {
      return true;
    }
    return false;
  }
  
  ModalRegresar(){
    Swal.fire({
      title: '¿Está seguro que desea regresar?',
      text: '¡No podrás revertir esto!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, regresar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.regresar();
      }
    });
  }
  
  regresar(){

    this.router.navigate(['/home/documento_intervencion'])
  }
}