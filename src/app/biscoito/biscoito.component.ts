import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-biscoito',
  imports: [],
  templateUrl: './biscoito.component.html',
  styleUrl: './biscoito.component.css'
})
export class BiscoitoComponent {
  @Input() imagem = "fechado.png"

  biscoito(){
    this.imagem = "aberto.png"
  }

  fechado()
  {
    this.imagem = "fechado.png"
  }
}
