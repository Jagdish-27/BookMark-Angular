import { Component } from '@angular/core';
import { HeroButtonComponent } from '../hero-button/hero-button.component';

@Component({
  selector: 'app-simple-bookmark',
  standalone: true,
  imports: [HeroButtonComponent],
  templateUrl: './simple-bookmark.component.html',
  styleUrl: './simple-bookmark.component.scss'
})
export class SimpleBookmarkComponent {

  text:string='Get it on Firefox';
  background_color:string = '#f4f5f8';
  color:string = 'black';

}
