import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InformefinalRoutingModule } from './informefinal-routing.module';
import { InformefinalComponent } from './pages/informefinal/informefinal.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    InformefinalComponent,
  ],
  imports: [
    CommonModule,
    InformefinalRoutingModule,
    FormsModule,
  ]
})
export class InformefinalModule { }
