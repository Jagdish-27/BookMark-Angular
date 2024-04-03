import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  navItems:string[] = ['FEATURES','PRICING','CONTACT','LOGIN'];

  sideNavOpen:boolean=false;

  width?:number;
  height?:number;

  ngOnInit(){
    this.width = window.innerWidth;
    this.height = window.innerHeight;
  }

  @HostListener('window:resize',['$event'])

  onWindowResize(){
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    
    if(this.width > 1150){
      this.sideNavOpen = false;
    }
  }

  openSideNav(){
    this.sideNavOpen = true;
  }

  closeSideNav(){
    this.sideNavOpen = false;
  }
}
