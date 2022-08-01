import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
import { processFirebaseController } from '../../providers/firebase-services/processFirebaseController';
import { GlobalheroProvider } from '../../providers/globalhero/globalhero';

/**
 * Generated class for the HomeProductProcessPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'HomeProductProcessPage',
  segment: 'home/:site/process',
  defaultHistory: ['HomePage']
})
@Component({
  selector: 'page-home-product-process',
  templateUrl: 'home-product-process.html',
})
export class HomeProductProcessPage {
  @ViewChild('processSlide') processSlide: Slides;

  currentSiteCatergory
  listOfProcess=[]
  constructor(public global:GlobalheroProvider,public processFirebaseController:processFirebaseController,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeProductProcessPage');
  }

  ionViewWillEnter() {
    console.log(this.navParams.get('site'))
    this.currentSiteCatergory = this.navParams.get('site') 
    this.getProcessOfCatergory()
  }
  nextSlide(slideToMove) {
    if (slideToMove == 'processSlide')
      this.processSlide.slideNext()
  }
  prevSlide(slideToMove) {
    if (slideToMove == 'processSlide')
      this.processSlide.slidePrev();
  }
  getProcessOfCatergory() {
    this.processFirebaseController.getNewsOfCatergory(this.currentSiteCatergory).then(res => {
      console.log(res)
      let result = <any>res
      if (result.hasContent) {
        for (let i = result.data.length - 1; i >= 0; i--) {
          if (result.data[i].title == null) {
            result.data.splice(i, 1);
          }
        }
      }
      this.listOfProcess = result.data
      console.log('Danh sách process')
      console.log(this.listOfProcess)
    })
  }

}
