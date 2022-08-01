import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
import { aboutusFirebaseController } from '../../providers/firebase-services/aboutusFirebaseController';
import { GlobalheroProvider } from '../../providers/globalhero/globalhero';

/**
 * Generated class for the HomeAboutUsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage({
  name: 'HomeAboutUsPage',
  segment: 'home/:site/aboutus',
  defaultHistory: ['HomePage']
})

 @Component({
  selector: 'page-home-about-us',
  templateUrl: 'home-about-us.html',
})
export class HomeAboutUsPage {
  @ViewChild('aboutUsSlide') aboutUsSlide: Slides;
  aboutUs=null
  currentSiteCatergory
  constructor(private global:GlobalheroProvider,private aboutusFirebaseController: aboutusFirebaseController,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeAboutUsPage');
  }
  ionViewWillEnter() {
    this.currentSiteCatergory = this.navParams.get('site')
    this.getCurrentAboutUS()
  }
  nextSlide(slideToMove) {
    if (slideToMove == 'aboutUsSlide')
      this.aboutUsSlide.slideNext()
  }
  prevSlide(slideToMove) {
    if (slideToMove == 'aboutUsSlide')
      this.aboutUsSlide.slidePrev();
  }
  getCurrentAboutUS() {
    this.aboutusFirebaseController.getAboutUS().then(res => {
      let result = <any>res
      if (result.hasContent) {
        this.aboutUs = result.data
      }
      console.log(this.aboutUs)
    }).catch(err => {
    })
  }
}
