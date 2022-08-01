import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdminSupplierPage } from './admin-supplier';
import { DataTableModule } from 'angular2-datatable';

@NgModule({
  declarations: [
    AdminSupplierPage,
  ],
  imports: [
    IonicPageModule.forChild(AdminSupplierPage),
    DataTableModule
  ],
})
export class AdminSupplierPageModule {}
