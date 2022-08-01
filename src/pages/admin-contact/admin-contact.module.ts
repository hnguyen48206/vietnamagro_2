import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdminContactPage } from './admin-contact';

@NgModule({
  declarations: [
    AdminContactPage,
  ],
  imports: [
    IonicPageModule.forChild(AdminContactPage),
  ],
})
export class AdminContactPageModule {}
