import { Component, Input } from '@angular/core';
import { HeroButtonComponent } from '../hero-button/hero-button.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [HeroButtonComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() img:string='';
  @Input() add_text:string='';
  @Input() version_text:string='';

}
