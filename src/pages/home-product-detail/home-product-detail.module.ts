import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomeProductDetailPage } from './home-product-detail';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    HomeProductDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(HomeProductDetailPage),
    ComponentsModule
  ],
})
export class HomeProductDetailPageModule {}
