import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-frases',
  imports: [],
  templateUrl: './frases.component.html',
  styleUrl: './frases.component.css'
})
export class FrasesComponent {
  frase = "frase"
    @Input() hidden : boolean = false;
}
