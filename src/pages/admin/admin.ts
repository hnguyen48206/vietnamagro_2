import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { FirebaseServicesProvider } from '../../providers/firebase-services/firebase-services';
import { GlobalheroProvider } from '../../providers/globalhero/globalhero';


/**
 * Generated class for the AdminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'AdminPage',
  segment: 'admin'
})
@Component({
  selector: 'page-admin',
  templateUrl: 'admin.html'
})
export class AdminPage {

  constructor(public menuCtrl: MenuController, public global: GlobalheroProvider, public fbProvider: FirebaseServicesProvider, public navCtrl: NavController, public navParams: NavParams) {
  }
  sideMenuTrigger() {
    this.menuCtrl.open()
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminPage');
  }
  ionViewWillEnter() {

  }
  isPageActive(pageName: string): boolean {
    return this.navCtrl.getActive().id === pageName || this.navCtrl.getActive().name === pageName;
  }
  openPage(id) {
    console.log(id)
    switch (id) {
      case 'home':
        console.log(this.isPageActive('AdminPage'))
        if (!this.isPageActive('AdminPage')) {
          this.navCtrl.setRoot('AdminPage');
        }
        this.menuCtrl.close()
        break;
      case 'aboutus':
        console.log(this.isPageActive('AdminAboutusPage'))
        if (!this.isPageActive('AdminAboutusPage')) {
          this.navCtrl.push('AdminAboutusPage');
        }
        this.menuCtrl.close()
        break;
      case 'products':
        console.log(this.isPageActive('AdminProductsPage'))
        if (!this.isPageActive('AdminProductsPage')) {
          this.navCtrl.push('AdminProductsPage');
        }
        this.menuCtrl.close()
        break;
      case 'news':
        console.log(this.isPageActive('AdminNewsPage'))
        if (!this.isPageActive('AdminNewsPage')) {
          this.navCtrl.push('AdminNewsPage');
        }
        this.menuCtrl.close()
        break;
      case 'process':
        console.log(this.isPageActive('AdminProcessPage'))
        if (!this.isPageActive('AdminProcessPage')) {
          this.navCtrl.push('AdminProcessPage');
        }
        this.menuCtrl.close()
        break;
      case 'supplier':
        console.log(this.isPageActive('AdminSupplierPage'))
        if (!this.isPageActive('AdminSupplierPage')) {
          this.navCtrl.push('AdminSupplierPage');
        }
        this.menuCtrl.close()
        break;
      case 'customer':
        console.log(this.isPageActive('AdminCustomerCommentsPage'))
        if (!this.isPageActive('AdminCustomerCommentsPage')) {
          this.navCtrl.push('AdminCustomerCommentsPage');
        }
        this.menuCtrl.close()
        break;
      case 'contact':
        console.log(this.isPageActive('AdminContactPage'))
        if (!this.isPageActive('AdminContactPage')) {
          this.navCtrl.push('AdminContactPage');
        }
        this.menuCtrl.close()
        break;
    }
  }
}
