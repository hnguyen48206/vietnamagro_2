import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewsDetailPopoverPage } from './news-detail-popover';

@NgModule({
  declarations: [
    NewsDetailPopoverPage,
  ],
  imports: [
    IonicPageModule.forChild(NewsDetailPopoverPage),
  ],
})
export class NewsDetailPopoverPageModule {}
