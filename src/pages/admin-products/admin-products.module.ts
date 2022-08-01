import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdminProductsPage } from './admin-products';
import { DataTableModule } from 'angular2-datatable';

@NgModule({
  declarations: [
    AdminProductsPage,
  ],
  imports: [
    IonicPageModule.forChild(AdminProductsPage),
    DataTableModule
  ],
})
export class AdminProductsPageModule {}
