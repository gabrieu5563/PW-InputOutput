import { Component } from '@angular/core';

@Component({
  selector: 'app-tarefas',
  imports: [],
  templateUrl: './tarefas.component.html',
  styleUrl: './tarefas.component.css'
})
export class TarefasComponent {
  tarefas: any = [
    {"id": 1, "nome": "Estudar matemática", "concluido": false},
    {"id": 2, "nome": "Fazer almoço", "concluido": true},
    {"id": 3, "nome": "Estudar pam", "concluido": false},
    {"id": 4, "nome": "Tarefa pw", "concluido": true},
    {"id": 5, "nome": "Dormir", "concluido": true},
    {"id": 6, "nome": "Arrumar quarto", "concluido": true},
  ]
  botao: boolean = true;

  mostrar(){
    this.botao = !this.botao
  }

  /*getConcluidas(){
    return this.tarefas.filter((item) => {
      return item.concluido;
    })
  }*/
}
