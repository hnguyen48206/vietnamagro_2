import { Component,  Input, Output, Renderer, EventEmitter  } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { productsFirebaseController } from '../../providers/firebase-services/productsFirebaseController';

/**
 * Generated class for the AppHeaderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-header',
  templateUrl: 'app-header.html'
})
export class AppHeaderComponent {
  @Input('currentSite') currentSiteCatergory: string;
  
  listOfProducts = []
  listOfProductGroups = null
  listOfProductGroupsToDisplay = []

  constructor(public navCtrl:NavController, public productsFirebaseController:productsFirebaseController) {
    console.log('Hello AppHeaderComponent Component');
  }
  ngOnChanges()
  {
    console.log(this.currentSiteCatergory)
    this.getProductsOfCatergory()
  }
  menuClick(page) {
    console.log(page)
    if (page == 'home') {
      if (!this.isPageActive('HomeProductHomePage')) {
        this.navCtrl.push('HomeProductHomePage', { site: this.currentSiteCatergory })
      }
    }
    else if (page.startsWith('productGroup')) {
      if (!this.isPageActive('HomeProductDetailPage')) {
        console.log(page.split('productGroup')[1])
        let groupName=page.split('productGroup')[1]
        let productsOnlyArray=[]
        for(let product of this.listOfProducts)
        {
          if(product.groupName!=null && product.groupName==groupName)
          productsOnlyArray.push(product)
        }
        this.navCtrl.push('HomeProductDetailPage', { site: this.currentSiteCatergory, groupName:groupName, listOfProducts:productsOnlyArray })
      }     
    }
    else if (page == 'products')
    {
      if (!this.isPageActive('HomeProductDetailPage')) 
      this.navCtrl.push('HomeProductDetailPage', { site: this.currentSiteCatergory, listOfProducts:this.listOfProducts })
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
  isPageActive(pageName: string): boolean {
    return this.navCtrl.getActive().id === pageName || this.navCtrl.getActive().name === pageName;
  }
  getProductsOfCatergory() {
    this.productsFirebaseController.getNewsOfCatergory(this.currentSiteCatergory, null).then(res => {
      console.log('Data từ header')

      console.log(res)
      let result = <any>res
      if (result.hasContent) {
        console.log(result)
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

  goHome()
  {
    this.navCtrl.popToRoot()
  }

}
