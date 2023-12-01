import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-comentario',
  templateUrl: './comentario.component.html',
  styleUrls: ['./comentario.component.css']
})
export class ComentarioComponent implements OnInit{
  showTab: boolean = false; // Variable para controlar la visibilidad

  @Output() close: EventEmitter<void> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  
  }

  
  toggleTab() {
    this.showTab = !this.showTab;
  }

  closeTab() {
    this.showTab = false;
    this.close.emit();
  }

}
