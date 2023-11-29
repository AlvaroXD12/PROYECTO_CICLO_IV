import { Component } from '@angular/core';
import { ComentarioComponent } from '../comentario/comentario.component';
import {MatDialog} from '@angular/material/dialog'


export class ButtonOverviewExample {}
@Component({
  selector: 'app-comentar',
  templateUrl: './comentar.component.html',
  styleUrls: ['./comentar.component.css']
})
export class ComentarComponent {
  title = 'angular-dialog';

  constructor(private matDialog:MatDialog){}
  openDialog(){
    this.matDialog.open(ComentarioComponent,{
      width: '650px',
    })
  }

}
