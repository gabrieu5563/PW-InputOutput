import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-text-overflow',
  imports: [],
  templateUrl: './text-overflow.component.html',
  styleUrl: './text-overflow.component.css'
})
export class TextOverflowComponent {
  @Input() titulo = "bucaneiro"
  @Input() texto = "os macacos do bloons td6 o jogo de tower defense são perfeitos em estourar balões";
  @Input() clip : boolean = true;
}
