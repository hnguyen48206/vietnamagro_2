import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdminProductDetailPage } from './admin-product-detail';

@NgModule({
  declarations: [
    AdminProductDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(AdminProductDetailPage),
  ],
})
export class AdminProductDetailPageModule {}
