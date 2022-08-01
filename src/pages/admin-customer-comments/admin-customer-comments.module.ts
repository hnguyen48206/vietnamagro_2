import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdminCustomerCommentsPage } from './admin-customer-comments';
import { DataTableModule } from 'angular2-datatable';

@NgModule({
  declarations: [
    AdminCustomerCommentsPage,
  ],
  imports: [
    IonicPageModule.forChild(AdminCustomerCommentsPage),
    DataTableModule
  ],
})
export class AdminCustomerCommentsPageModule {}
