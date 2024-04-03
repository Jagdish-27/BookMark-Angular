import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-button.component.html',
  styleUrl: './hero-button.component.scss'
})
export class HeroButtonComponent {

  @Input() color:string = '#fff'
  @Input() background_color:string = 'hsl(231, 69%, 60%)';
  @Input() text:string = 'Get it on Chrome'

}
