import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdminProcessPage } from './admin-process';
import { DataTableModule } from 'angular2-datatable';

@NgModule({
  declarations: [
    AdminProcessPage,
  ],
  imports: [
    IonicPageModule.forChild(AdminProcessPage),
    DataTableModule
  ],
})
export class AdminProcessPageModule {}
