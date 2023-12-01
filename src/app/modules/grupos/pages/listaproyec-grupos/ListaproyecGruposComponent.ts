import { Component, OnInit } from '@angular/core';
import { Escu_prof } from 'src/app/models/Escu_prof';
import { Proyecto } from 'src/app/models/Proyecto';
import { Tip_proyec } from 'src/app/models/Tip_proyect';
import { ListproyecGruposService } from 'src/app/modules/grupos/pages/services/listproyec-grupos.service';



@Component({
  selector: 'app-listaproyec-grupos',
  templateUrl: './listaproyec-grupos.component.html',
  styleUrls: ['./listaproyec-grupos.component.css']
})

export class ListaproyecGruposComponent implements OnInit {
  escuelas:Escu_prof[]=[];
  proyectos: any[] = [];
  Tip_proye: Tip_proyec[] = [];

  constructor(
    private ListproyecGruposService: ListproyecGruposService
  ) { }

  ngOnInit(): void {
    this.ListproyecGruposService.listar().subscribe(data => {
      this.proyectos = data;
      console.log(data);
    });
    this.listarEscuela();
  }

  listarEscuela(){
    this.ListproyecGruposService.listaEScuela().subscribe(data=>{
        this.escuelas = data
    })
  }

  selectEscuela(event:Event){
    const input = event.target as HTMLInputElement;
    const value = input.value
        this.ListproyecGruposService.listar().subscribe(data=>{
      this.proyectos = data;
      this.proyectos = this.proyectos.filter(data => data.actividad_ejecu.proyecto.escu_prof.id  == parseInt(value));
  })
  }

  search(event:Event){
    const input = event.target as HTMLInputElement;
    const value = input.value;
    this.ListproyecGruposService.listar().subscribe(data=>{
      this.proyectos = data;
      this.proyectos = this.proyectos.filter(data => data. nombre_grupo?.includes(value));
  })
  }

  Eliminar(id: number) {
    console.log(id)
    this.ListproyecGruposService.eliminar(id).subscribe(() => {
      // Aquí puedes realizar alguna acción después de eliminar el documento, si es necesario.
      // Por ejemplo, puedes actualizar la lista de documentos.
      this.ListproyecGruposService.listar().subscribe(data => {
        this.proyectos = data;
        console.log(data);
      });
    });
  }
  editar(id:any){
    console.log(id)
    this.ListproyecGruposService.dataAddGrupo.next(id);
  }

  eliminar(id:any){
    this.proyectos = this.proyectos.filter(objeto =>objeto.actividad_ejecu.idp !==id.actividad_ejecu.idp
    );
  }
}
