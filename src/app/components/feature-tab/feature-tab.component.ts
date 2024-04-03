import { Component, ElementRef, ViewChild } from '@angular/core';
import { DynamicChangeComponent } from '../dynamic-change/dynamic-change.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-feature-tab',
  standalone: true,
  imports: [DynamicChangeComponent, CommonModule],
  templateUrl: './feature-tab.component.html',
  styleUrl: './feature-tab.component.scss'
})
export class FeatureTabComponent {

  @ViewChild('lineElement')lineElement!:ElementRef<HTMLElement>

  activeTab:string='Simple Bookmarking';

  tabList:string[] = ['Simple Bookmarking','Speedy Searching','Easy Sharing'];

  tabClick(item:string){
    this.activeTab = item;
    const screen = window.innerWidth;
    if(screen > 1150){
      if(item === 'Simple Bookmarking'){
        this.lineElement.nativeElement.style.left = '25'+'%'
        this.lineElement.nativeElement.style.transition = '0.5s'
      }else if(item === 'Speedy Searching'){
        this.lineElement.nativeElement.style.left = '42'+'%'
        this.lineElement.nativeElement.style.transition = '0.5s'
      }else{
        this.lineElement.nativeElement.style.left = '58'+'%'
        this.lineElement.nativeElement.style.transition = '0.5s'
      }
    }else if(screen > 488 && screen < 516){
      if(item === 'Simple Bookmarking'){
        this.lineElement.nativeElement.style.top = '326'+'px'
        this.lineElement.nativeElement.style.transition = '0.5s'
      }else if(item === 'Speedy Searching'){
        this.lineElement.nativeElement.style.top = '381'+'px'
        this.lineElement.nativeElement.style.transition = '0.5s'
      }else{
        this.lineElement.nativeElement.style.top = '434'+'px'
        this.lineElement.nativeElement.style.transition = '0.5s'
      }
    }else if(screen >516 && screen < 1150){
      if(item === 'Simple Bookmarking'){
        this.lineElement.nativeElement.style.top = '306'+'px'
        this.lineElement.nativeElement.style.transition = '0.5s'
      }else if(item === 'Speedy Searching'){
        this.lineElement.nativeElement.style.top = '361'+'px'
        this.lineElement.nativeElement.style.transition = '0.5s'
      }else{
        this.lineElement.nativeElement.style.top = '414'+'px'
        this.lineElement.nativeElement.style.transition = '0.5s'
      }
    }else{
      if(item === 'Simple Bookmarking'){
        this.lineElement.nativeElement.style.top = '346'+'px'
        this.lineElement.nativeElement.style.transition = '0.5s'
      }else if(item === 'Speedy Searching'){
        this.lineElement.nativeElement.style.top = '400'+'px'
        this.lineElement.nativeElement.style.transition = '0.5s'
      }else{
        this.lineElement.nativeElement.style.top = '453'+'px'
        this.lineElement.nativeElement.style.transition = '0.5s'
      }
    }
  }
}
