import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-faq-answer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq-answer.component.html',
  styleUrl: './faq-answer.component.scss',
})
export class FaqAnswerComponent {
  @Input() isOpen: boolean = false;

  @Input() answer:any;
}
