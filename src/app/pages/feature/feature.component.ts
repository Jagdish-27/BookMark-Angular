import { Component } from '@angular/core';
import { LayoutComponent } from '../../components/layout/layout.component';
import { SimpleBookmarkComponent } from '../../components/simple-bookmark/simple-bookmark.component';
import { FeatureTabComponent } from '../../components/feature-tab/feature-tab.component';
import { DynamicChangeComponent } from '../../components/dynamic-change/dynamic-change.component';
import { DownloadExtComponent } from '../../components/download-ext/download-ext.component';
import { FaqComponent } from '../../components/faq/faq.component';

@Component({
  selector: 'app-feature',
  standalone: true,
  imports: [LayoutComponent,SimpleBookmarkComponent,FeatureTabComponent,DynamicChangeComponent,DownloadExtComponent, FaqComponent],
  templateUrl: './feature.component.html',
  styleUrl: './feature.component.scss'
})
export class FeatureComponent {

}
