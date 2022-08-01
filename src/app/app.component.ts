import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GlobalheroProvider } from '../providers/globalhero/globalhero';
import { Storage } from '@ionic/storage';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = 'HomePage';
  @ViewChild(Nav) nav: Nav;

  constructor(private menuCtrl: MenuController, private storage: Storage, public global: GlobalheroProvider, platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      this.initializeApp()
    });
  }

  initializeApp() {
    //onOffLog
    console.log = function() {};
    this.storage.get('currentUserProfile').then((val) => {
      if (val != null) {
        this.global.isLogin = true;
        console.log(val)
      }
    });
  }

  openPage(id) {
    console.log(id)
    switch (id) {
      case 'home':
        console.log(this.isPageActive('AdminPage'))
        if (!this.isPageActive('AdminPage')) {
          this.nav.setRoot('AdminPage');
        }
        this.menuCtrl.close()
        break;
      case 'aboutus':
        console.log(this.isPageActive('AdminAboutusPage'))
        if (!this.isPageActive('AdminAboutusPage')) {
          this.nav.push('AdminAboutusPage');
        }
        this.menuCtrl.close()
        break;
      case 'products':
        console.log(this.isPageActive('AdminProductsPage'))
        if (!this.isPageActive('AdminProductsPage')) {
          this.nav.push('AdminProductsPage');
        }
        this.menuCtrl.close()
        break;
      case 'news':
        console.log(this.isPageActive('AdminNewsPage'))
        if (!this.isPageActive('AdminNewsPage')) {
          this.nav.push('AdminNewsPage');
        }
        this.menuCtrl.close()
        break;
      case 'process':
        console.log(this.isPageActive('AdminProcessPage'))
        if (!this.isPageActive('AdminProcessPage')) {
          this.nav.push('AdminProcessPage');
        }
        this.menuCtrl.close()
        break;
      case 'supplier':
        console.log(this.isPageActive('AdminSupplierPage'))
        if (!this.isPageActive('AdminSupplierPage')) {
          this.nav.push('AdminSupplierPage');
        }
        this.menuCtrl.close()
        break;
      case 'customer':
        console.log(this.isPageActive('AdminCustomerCommentsPage'))
        if (!this.isPageActive('AdminCustomerCommentsPage')) {
          this.nav.push('AdminCustomerCommentsPage');
        }
        this.menuCtrl.close()
        break;
      case 'contact':
        console.log(this.isPageActive('AdminContactPage'))
        if (!this.isPageActive('AdminContactPage')) {
          this.nav.push('AdminContactPage');
        }
        this.menuCtrl.close()
        break;
    }
  }
  isPageActive(pageName: string): boolean {
    return this.nav.getActive().id === pageName || this.nav.getActive().name === pageName;
  }
}

