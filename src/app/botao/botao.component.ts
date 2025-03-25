import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-botao',
  imports: [],
  templateUrl: './botao.component.html',
  styleUrl: './botao.component.css'
})
export class BotaoComponent {
  @Output() imagem = new EventEmitter<string>();
  @Output() hidden = new EventEmitter<boolean>();
  biscoito(){
    this.imagem.emit("aberto.png")
    this.hidden.emit(false)
  }

  fechado()
  {
    this.imagem.emit("fechado.png")
    this.hidden.emit(true)
  }
}
