import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomeContactUsPage } from './home-contact-us';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    HomeContactUsPage,
  ],
  imports: [
    IonicPageModule.forChild(HomeContactUsPage),
    ComponentsModule
  ],
})
export class HomeContactUsPageModule {}
