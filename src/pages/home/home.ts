import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GlobalheroProvider } from '../../providers/globalhero/globalhero';

@IonicPage({
  name: 'HomePage',
  segment: 'home'
})
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public global:GlobalheroProvider) {

  }
  goToAdmin(){
    this.navCtrl.setRoot('AdminPage')
  }
  goToSite(site)
  {
    this.global.userSiteSetting.currentChosenSite=site;
    this.navCtrl.push('HomeProductHomePage',{site:site})
  }
  ionViewWillEnter()
  {
    this.global.userSiteSetting.currentChosenSite=''
  }
}
