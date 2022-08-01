import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContactUsPopoverPage } from './contact-us-popover';

@NgModule({
  declarations: [
    ContactUsPopoverPage,
  ],
  imports: [
    IonicPageModule.forChild(ContactUsPopoverPage),
  ],
})
export class ContactUsPopoverPageModule {}
