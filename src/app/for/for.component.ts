import { Component } from '@angular/core';

@Component({
  selector: 'app-for',
  imports: [],
  templateUrl: './for.component.html',
  styleUrl: './for.component.css'
})
export class ForComponent {
  professores: string[] = ["wilton", "debora", "saulo", "pedro", "casdaido", "luca", "freitas", "pscosta", "renan"];

  remover(index:number){
    this.professores.splice(index,1);
  }
}
