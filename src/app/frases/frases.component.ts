import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-frases',
  imports: [],
  templateUrl: './frases.component.html',
  styleUrl: './frases.component.css'
})
export class FrasesComponent {
  frases : string[] = ["O único jeito de fazer um excelente trabalho é amar o que você faz",
  "Não desista. Cada fracasso é uma oportunidade para começar de novo com mais experiência",
  "O sucesso não é a chave para a felicidade. A felicidade é a chave para o sucesso.",
  "A maior glória não é nunca cair, mas levantar-se sempre.",
  "Faça hoje o que os outros não querem, faça amanhã o que os outros não podem.",
  "Não espere. O tempo nunca será o momento certo.",
  "O único impossível é aquilo que você não tenta.",
  "Você é mais forte do que pensa.",
  "A diferença entre o ordinário e o extraordinário é aquele pequeno extra.",
  "O futuro pertence àqueles que acreditam na beleza dos seus sonhos."  ]
  @Input() hidden : boolean = false;

  frase = this.frases[this.randomizar()]

  randomizar(){
    return Math.floor(Math.random() * 10)
  }
}
