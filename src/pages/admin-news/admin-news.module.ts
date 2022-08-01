import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdminNewsPage } from './admin-news';
import { DataTableModule } from 'angular2-datatable';

@NgModule({
  declarations: [
    AdminNewsPage,
  ],
  imports: [
    IonicPageModule.forChild(AdminNewsPage),
    DataTableModule
  ],
})
export class AdminNewsPageModule {}
