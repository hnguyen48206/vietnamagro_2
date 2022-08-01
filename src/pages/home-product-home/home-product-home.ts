import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GlobalheroProvider } from '../../providers/globalhero/globalhero';
import { processFirebaseController } from '../../providers/firebase-services/processFirebaseController';
import { productsFirebaseController } from '../../providers/firebase-services/productsFirebaseController';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { newsFirebaseController } from '../../providers/firebase-services/newsFirebaseController';
import { PopoverController } from 'ionic-angular';
/**
 * Generated class for the HomeProductHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'HomeProductHomePage',
  segment: 'home/:site',
  defaultHistory: ['HomePage']
})
@Component({
  selector: 'page-home-product-home',
  templateUrl: 'home-product-home.html',
})
export class HomeProductHomePage {
  @ViewChild('processSlide') processSlide: Slides;
  newsDetailDialog
  currentNewsPiece
  currentSiteCatergory
  listOfProducts = []
  listOfProductGroups = null
  listOfProductGroupsToDisplay = []
  listOfProcess = []
  listOfNews = []
  constructor(private popCtrl:PopoverController,private newsFirebaseController: newsFirebaseController, private processFirebaseController: processFirebaseController, private productsFirebaseController: productsFirebaseController, public global: GlobalheroProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeProductHomePage');
  }
  ionViewWillEnter() {
    this.currentSiteCatergory = this.navParams.get('site')
    console.log(this.navParams.get('site'))
    this.getProductsOfCatergory()
    this.getProcessOfCatergory()
    this.getNewsOfCatergory()
  }
  ionViewDidEnter() {
  }
  nextSlide(slideToMove) {
    if (slideToMove == 'processSlide')
      this.processSlide.slideNext()
  }
  prevSlide(slideToMove) {
    if (slideToMove == 'processSlide')
      this.processSlide.slidePrev();
  }
  menuClick(page) {
    console.log(page)
    if (page == 'home') {
      this.navCtrl.push('HomeProductHomePage', { site: this.currentSiteCatergory })
    }
    else if (page.startsWith('productGroup')) {
      console.log(page.split('productGroup')[1])
      let groupName = page.split('productGroup')[1]
      let productsOnlyArray = []
      for (let product of this.listOfProducts) {
        if (product.groupName != null && product.groupName == groupName)
          productsOnlyArray.push(product)
      }
      this.navCtrl.push('HomeProductDetailPage', { site: this.currentSiteCatergory, groupName: groupName, listOfProducts: productsOnlyArray })
    }
    return false
  }
  getNewsOfCatergory() {
    this.newsFirebaseController.getNewsOfCatergory(this.currentSiteCatergory).then(res => {
      console.log(res)
      let result = <any>res
      if (result.hasContent) {
        for (let i = result.data.length - 1; i >= 0; i--) {
          if (result.data[i].title == null) {
            result.data.splice(i, 1);
          }
        }
      }
      this.listOfNews = result.data
    })
  }
  getProductsOfCatergory() {
    this.productsFirebaseController.getNewsOfCatergory(this.currentSiteCatergory, null).then(res => {
      console.log(res)
      let result = <any>res
      if (result.hasContent) {
        for (let i = result.data.length - 1; i >= 0; i--) {
          if (result.data[i].id == 'productGroups') {
            //Đây ko phải sản phẩm mà là nhóm sp.
            this.listOfProductGroups = result.data[i]
            result.data.splice(i, 1);
          }
        }
        this.listOfProducts = result.data
        this.listOfProductGroupsToDisplay = []
        if (this.listOfProductGroups.data.length > 0) {
          for (let group of this.listOfProductGroups.data) {
            let parsedObj = JSON.parse(group)
            this.listOfProductGroupsToDisplay.push({
              id: group,
              groupName: parsedObj.groupName,
              groupAvatar: parsedObj.groupAvatar
            })
          }
        }
        else
          this.listOfProductGroupsToDisplay = []
        console.log('Danh sách products')
        console.log(this.listOfProducts)
        console.log('Danh sách products groups đã parse')
        console.log(this.listOfProductGroupsToDisplay)
        console.log('Danh sách products groups chưa parse')
        console.log(this.listOfProductGroups)
      }
    })
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
  readNewsDetail(news) {
    if(news==null)
    {
      this.navCtrl.push('HomeProductNewsListPage', { site: this.currentSiteCatergory})
    }
    else
    {
      let popover = this.popCtrl.create('NewsDetailPopoverPage',{news:news},{cssClass: 'newsDetailPopover'});
      popover.present();
    }
   
  }
 
}
