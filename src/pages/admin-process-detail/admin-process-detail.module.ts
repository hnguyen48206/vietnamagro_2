import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdminProcessDetailPage } from './admin-process-detail';

@NgModule({
  declarations: [
    AdminProcessDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(AdminProcessDetailPage),
  ],
})
export class AdminProcessDetailPageModule {}
