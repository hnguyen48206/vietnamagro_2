import { NgModule } from '@angular/core';
import { AppHeaderComponent } from './app-header/app-header';
import { CommonModule} from '@angular/common';
import { AppFooterComponent } from './app-footer/app-footer';
import { IonicModule } from 'ionic-angular';

@NgModule({
	declarations: [AppHeaderComponent,
    AppFooterComponent],
	imports: [CommonModule, IonicModule],
	exports: [AppHeaderComponent,
	AppFooterComponent]
})
export class ComponentsModule {}
