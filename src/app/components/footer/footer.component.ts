import { Component, inject } from '@angular/core';
import { BottomFooterComponent } from '../bottom-footer/bottom-footer.component';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [BottomFooterComponent,FormsModule,ReactiveFormsModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  fb = inject(FormBuilder);

  email_form = this.fb.group({
    email:['',[Validators.required,Validators.email]]
  })

  isEmailInvalid(): boolean {
    const emailControl = this.email_form.controls.email;
    return emailControl.invalid && (emailControl.dirty || emailControl.touched);
  }
}
