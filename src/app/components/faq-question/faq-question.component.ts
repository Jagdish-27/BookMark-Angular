import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FaqAnswerComponent } from '../faq-answer/faq-answer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-faq-question',
  standalone: true,
  imports: [FaqAnswerComponent, CommonModule],
  templateUrl: './faq-question.component.html',
  styleUrl: './faq-question.component.scss'
})
export class FaqQuestionComponent {


  @Input() isOpen_s:boolean = false;
  @Input() faq!: { id: number, question: string, ans: string, }
  @Output() onToggleView = new EventEmitter<number>();


  isOpen:boolean=false;

  onArrowClick(){
    this.isOpen = !this.isOpen;
  }

  

}
