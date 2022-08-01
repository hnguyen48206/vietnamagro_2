import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from '../../components/components.module';
import { HomeAboutUsPage } from './home-about-us';
@NgModule({
  declarations: [
    HomeAboutUsPage,
  ],
  imports: [
    IonicPageModule.forChild(HomeAboutUsPage),
    ComponentsModule
  ],
})
export class HomeAboutUsPageModule {}
