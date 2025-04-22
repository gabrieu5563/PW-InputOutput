import { Component } from '@angular/core';

@Component({
  selector: 'app-tarefas',
  imports: [],
  templateUrl: './tarefas.component.html',
  styleUrl: './tarefas.component.css'
})
export class TarefasComponent {
  tarefas: any = [
    {"id": 1, "nome": "estudar1", "concluido": false},
    {"id": 2, "nome": "estudar2", "concluido": false},
    {"id": 3, "nome": "estudar3", "concluido": true},
    {"id": 4, "nome": "estudar4", "concluido": false},
    {"id": 5, "nome": "estudar5", "concluido": true},
  ]
}
