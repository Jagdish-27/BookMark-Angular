import { Component } from '@angular/core';
import { FaqQuestionComponent } from '../faq-question/faq-question.component';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [FaqQuestionComponent],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})
export class FaqComponent {

  
  openQuestion:number[] = [];

  public faqs:{id:number,question:string,ans:string}[]=[
    {
      id:1,
      question:'What is Bookmark?',
      ans:'Ans-1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi cupiditate quidem reiciendis nobis voluptate quia facere at numquam? Nostrum, iusto. Nostrum iure veniam in ipsum asperiores aut dolores aspernatur, perspiciatis nobis sit,'
    },
    {
      id:2,
      question:'How can I request a new browser?',
      ans:'Ans-2 eius est, libero maxime assumenda. Magnam minima dicta, provident id et assumenda illo officiis tempora eum, quam culpa reiciendis corporis accusamus, odio amet! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, blanditiis recusandae ducimus optio iure numquam perspiciatis, harum, excepturi quam fuga pariatur'
    },
    {
      id:3,
      question:'Is there a mobile app?',
      ans:'Ans-3 dicta animi magni est eum illo. Labore eius explicabo dicta, ipsum corrupti neque, autem ratione nesciunt minima, iusto fugit? Amet ut animi accusantium rem. Sapiente laudantium architecto veniam nisi libero aperiam asperiores magnam ab numquam minima consectetur aliquid maiores, est magni voluptatum pariatur'
    },
    {
      id:4,
      question:'What about other chromiumm browsers?',
      ans:'Ans-4 Temporibus praesentium nulla cum ut eligendi accusamus consequuntur, illum assumenda ipsam commodi, quia quis eum architecto sed atque hic possimus rerum? Doloribus dolores sunt iusto esse nostrum vero fugiat'
    },
    {
      id:5,
      question:'How can I bookmark?',
      ans:'Ans-5 id totam rerum in minus nobis non facere suscipit quaerat tempore maxime aperiam neque dolorem vitae eaque repudiandae. Debitis alias quibusdam provident ipsam quae voluptate amet, minus sequi placeat dignissimos! Aliquid dolor laudantium at quo aut quia maiores. Doloremque, ex tempora! Error.'
    }
  ]

  toggleQues(id:number){
    
    if(this.openQuestion.includes(id)){
      this.openQuestion = this.openQuestion.filter(faqId=> faqId !== id);
    }else{
      this.openQuestion = [id];
    }
  }

}
