import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddinformefinalRoutingModule } from './addinformefinal-routing.module';
import { FormsModule } from '@angular/forms';
import { AddinformefinalComponent } from './pages/addinformefinal/addinformefinal.component';


@NgModule({
  declarations: [
    AddinformefinalComponent
  ],
  imports: [
    CommonModule,
    AddinformefinalRoutingModule,
    FormsModule
  ]
})
export class AddinformefinalModule { }
