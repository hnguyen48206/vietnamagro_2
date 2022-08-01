import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomeProductProcessPage } from './home-product-process';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    HomeProductProcessPage,
  ],
  imports: [
    IonicPageModule.forChild(HomeProductProcessPage),
    ComponentsModule
  ],
})
export class HomeProductProcessPageModule {}
