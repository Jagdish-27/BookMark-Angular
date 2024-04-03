import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dynamic-change',
  standalone: true,
  imports: [],
  templateUrl: './dynamic-change.component.html',
  styleUrl: './dynamic-change.component.scss'
})
export class DynamicChangeComponent {

  @Input() currentTab:string = 'Simple Bookmarking';
}
