import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdminNewsDetailsPage } from './admin-news-details';

@NgModule({
  declarations: [
    AdminNewsDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(AdminNewsDetailsPage),
  ],
})
export class AdminNewsDetailsPageModule {}
