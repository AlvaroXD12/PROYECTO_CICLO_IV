import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComentarRoutingModule } from './comentar-routing.module';

import { MatButtonModule} from '@angular/material/button';
import { MatIconModule} from '@angular/material/icon';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { FormsModule} from '@angular/forms';
import { MatDialogModule} from '@angular/material/dialog';
import { ComentarComponent } from './comentar/comentar.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ComentarComponent],

  imports: [
    CommonModule,
    ComentarRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatDialogModule,
    RouterModule,
  ]
})
export class ComentarModule {
  
}
