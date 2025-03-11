import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TextOverflowComponent } from "./text-overflow/text-overflow.component";
import { BiscoitoComponent } from "./biscoito/biscoito.component";
import { FrasesComponent } from "./frases/frases.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TextOverflowComponent, BiscoitoComponent, FrasesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pw3-input-output';
}
