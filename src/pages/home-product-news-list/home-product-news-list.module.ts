import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomeProductNewsListPage } from './home-product-news-list';
import { ComponentsModule } from '../../components/components.module';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    HomeProductNewsListPage
  ],
  imports: [
    IonicPageModule.forChild(HomeProductNewsListPage),
    ComponentsModule,
    NgxPaginationModule
  ],
})
export class HomeProductNewsListPageModule {}
