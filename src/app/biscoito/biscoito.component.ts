import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-biscoito',
  imports: [],
  templateUrl: './biscoito.component.html',
  styleUrl: './biscoito.component.css'
})
export class BiscoitoComponent {
  @Input() aberto : boolean = true
  imagem = "fechado.png"

  biscoito(){
    if (this.aberto){
      this.imagem = "aberto.png"
    } else {
      this.imagem = "fechado.png"
    }
  }
}
