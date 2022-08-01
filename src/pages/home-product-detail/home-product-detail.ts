import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { productsFirebaseController } from '../../providers/firebase-services/productsFirebaseController';
import { GlobalheroProvider } from '../../providers/globalhero/globalhero';

/**
 * Generated class for the HomeProductDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'HomeProductDetailPage',
  segment: 'home/:site/:groupName',
  defaultHistory: ['HomePage']
}) @Component({
  selector: 'page-home-product-detail',
  templateUrl: 'home-product-detail.html',
})
export class HomeProductDetailPage {
  currentSiteCatergory
  currentGroupName
  listOfProducts = []
  constructor(public global: GlobalheroProvider, public productsFirebaseController: productsFirebaseController, public navCtrl: NavController, public navParams: NavParams) {
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeProductDetailPage');
  }
  ionViewWillEnter() {
    console.log(this.navParams.get('site'))
    console.log(this.navParams.get('groupName'))
    this.currentSiteCatergory = this.navParams.get('site')
    this.currentGroupName = this.navParams.get('groupName')
    if (this.navParams.get('listOfProducts') != null) {
      this.listOfProducts = this.navParams.get('listOfProducts')
      console.log('Danh sách products')
      console.log(this.listOfProducts)
    }
    else {
      this.getProductsOfCatergory()
    }
  }
  getProductsOfCatergory() {
    if (this.currentGroupName != null) {
      // sản phẩm có nhóm
      this.productsFirebaseController.getNewsOfCatergory(this.currentSiteCatergory, { groupName: this.currentGroupName, status: true }).then(res => {
        console.log(res)
        let result = <any>res
        if (result.hasContent) {
          this.listOfProducts = result.data
        }
        console.log('Danh sách products')
        console.log(this.listOfProducts)
      })
    }
    else {
      // sản phẩm ko có nhóm
      this.productsFirebaseController.getNewsOfCatergory(this.currentSiteCatergory, null).then(res => {
        console.log(res)
        let result = <any>res
        if (result.hasContent) {
          for (let i = result.data.length - 1; i >= 0; i--) {
            if (result.data[i].id == 'productGroups') {
              //Đây ko phải sản phẩm mà là nhóm sp.
              result.data.splice(i, 1);
            }
          }
          this.listOfProducts = result.data
        }
        console.log('Danh sách products')
        console.log(this.listOfProducts)
      })
    }

  }
}
