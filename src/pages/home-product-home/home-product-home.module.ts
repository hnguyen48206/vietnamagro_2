import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from '../../components/components.module';
import { HomeProductHomePage } from './home-product-home';

@NgModule({
  declarations: [
    HomeProductHomePage    
  ],
  imports: [
    IonicPageModule.forChild(HomeProductHomePage),
    ComponentsModule
  ],
})
export class HomeProductHomePageModule {}
