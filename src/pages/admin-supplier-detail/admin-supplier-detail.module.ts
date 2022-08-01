import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdminSupplierDetailPage } from './admin-supplier-detail';

@NgModule({
  declarations: [
    AdminSupplierDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(AdminSupplierDetailPage),
  ],
})
export class AdminSupplierDetailPageModule {}
