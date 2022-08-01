
import { contactFirebaseController } from '../../providers/firebase-services/contactFirebaseController';
import { Component,  Input, Output, Renderer, EventEmitter  } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
/**
 * Generated class for the AppFooterComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-footer',
  templateUrl: 'app-footer.html'
})
export class AppFooterComponent {  
  @Input('currentSite') currentSiteCatergory: string;

  contactDetail = null

  constructor(public navCtrl:NavController, public contactFirebaseController:contactFirebaseController) {
    console.log('Hello AppFooterComponent Component');
  }
  goHome()
  {
    this.navCtrl.popToRoot()
  }
  ngOnChanges()
  {
    console.log(this.currentSiteCatergory)
    this.getCurrentContact()
  }
  menuClick(page) {
    console.log(page)
    if (page == 'home') {
      if (!this.isPageActive('HomeProductHomePage')) 
      this.navCtrl.push('HomeProductHomePage', { site: this.currentSiteCatergory })
    }
    else if (page == 'news')
    {
      if (!this.isPageActive('HomeProductNewsListPage')) 
      this.navCtrl.push('HomeProductNewsListPage', { site: this.currentSiteCatergory})
    }
    else if (page == 'process')
    {
      if (!this.isPageActive('HomeProductProcessPage')) 
      this.navCtrl.push('HomeProductProcessPage', { site: this.currentSiteCatergory})
    }
    else if (page == 'aboutus')
    {
      if (!this.isPageActive('HomeAboutUsPage')) 
      this.navCtrl.push('HomeAboutUsPage', { site: this.currentSiteCatergory})
    }
    else if (page == 'contact')
    {
      if (!this.isPageActive('HomeContactUsPage')) 
      this.navCtrl.push('HomeContactUsPage', { site: this.currentSiteCatergory})
    }
    return false
  }
  getCurrentContact() {
    this.contactFirebaseController.getContact().then(res => {
      console.log(res)
      let result = <any>res
      if (result.hasContent) {
        this.contactDetail = result.data
        console.log(this.contactDetail)
      }
    }).catch(err => {
    })
  }
  isPageActive(pageName: string): boolean {
    return this.navCtrl.getActive().id === pageName || this.navCtrl.getActive().name === pageName;
  }
}
