import { Component } from '@angular/core';

@Component({
  selector: 'app-bottom-footer',
  standalone: true,
  imports: [],
  templateUrl: './bottom-footer.component.html',
  styleUrl: './bottom-footer.component.scss'
})
export class BottomFooterComponent {

  bottomNavItems:string[] = ['FEATURES','PRICING','CONTACT'];
}
