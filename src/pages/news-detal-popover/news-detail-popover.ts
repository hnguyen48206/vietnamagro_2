import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { GlobalheroProvider } from '../../providers/globalhero/globalhero';

/**
 * Generated class for the NewsDetalPopoverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'NewsDetailPopoverPage'
})
@Component({
  selector: 'page-news-detail-popover',
  templateUrl: 'news-detail-popover.html',
})
export class NewsDetailPopoverPage {
  currentNewsPiece
  constructor(private global:GlobalheroProvider,private viewCtrl: ViewController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsDetalPopoverPage');
  }

  ionViewWillEnter()
  {
    this.currentNewsPiece=this.navParams.get('news')
  }

  closeNewsDetailDialog()
  {
    this.viewCtrl.dismiss();
  }

}
