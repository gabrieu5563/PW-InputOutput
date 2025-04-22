import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TextOverflowComponent } from "./text-overflow/text-overflow.component";
import { BiscoitoComponent } from "./biscoito/biscoito.component";
import { FrasesComponent } from "./frases/frases.component";
import { AleatorioComponent } from "./aleatorio/aleatorio.component";
import { BotaoComponent } from "./botao/botao.component";
import { ForComponent } from "./for/for.component";
import { TarefasComponent } from "./tarefas/tarefas.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TextOverflowComponent, BiscoitoComponent, FrasesComponent, AleatorioComponent, BotaoComponent, ForComponent, TarefasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pw3-input-output';

  resultado : string = "";
  hidden : boolean = true;
  imagem = "fechado.png"

  processar(resultado:string){
    this.resultado = resultado
  }

  onHiddenChange(hidden: boolean){
    this.hidden = hidden;
  }

  onImagemChange(imagem : string){
    this.imagem = imagem;
  }
}
