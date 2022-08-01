import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { newsFirebaseController } from '../../providers/firebase-services/newsFirebaseController';
import { GlobalheroProvider } from '../../providers/globalhero/globalhero';
/**
 * Generated class for the HomeProductNewsListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'HomeProductNewsListPage',
  segment: 'home/:site/news',
  defaultHistory: ['HomePage']
})
@Component({
  selector: 'page-home-product-news-list',
  templateUrl: 'home-product-news-list.html',
})
export class HomeProductNewsListPage {
  newsDetailDialog
  currentNewsPiece
  currentSiteCatergory
  listOfNews=[]
  currentPage: number = 1;
  constructor(private popCtrl:PopoverController,public global:GlobalheroProvider,public newsFirebaseController:newsFirebaseController , public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeProductNewsListPage');
  }

  ionViewWillEnter() {
    console.log(this.navParams.get('site'))
    this.currentSiteCatergory = this.navParams.get('site') 
    this.getNewsOfCatergory()
  }
  getNewsOfCatergory() {
    this.newsFirebaseController.getNewsOfCatergory(this.currentSiteCatergory).then(res => {
      console.log(res)
      let result=<any>res
      if(result.hasContent)
      {
        for(let i = result.data.length - 1; i >= 0; i--) {
          if(result.data[i].title == null) {
            result.data.splice(i, 1);
          }
      } 
      }
      this.listOfNews = result.data
      console.log('danh sách tin')
      console.log(this.listOfNews)
    })
  }
  readNewsDetail(news) {
    let popover = this.popCtrl.create('NewsDetailPopoverPage',{news:news},{cssClass: 'newsDetailPopover'});
    popover.present();
  }
}
