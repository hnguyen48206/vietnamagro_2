import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastController, LoadingController, PopoverController } from 'ionic-angular';

/*
  Generated class for the GlobalheroProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GlobalheroProvider {
  userSiteSetting={
    currentChosenSite:'',
    dataForHeader:{data:null, updatedTime:null}
  }
  lastChosenCatergory=null
  loading
  isLogin = false
  listOfSettings = [{
    name: 'Quy Trình',
    icon: 'imgs/process.png',
    id: 'process'
  },
  {
    name: 'Sản Phẩm',
    icon: 'imgs/product.png',
    id: 'products'
  },
  {
    name: 'Nhà Cung Cấp',
    icon: 'imgs/supplier.png',
    id: 'supplier'
  },
  {
    name: 'Tin Tức',
    icon: 'imgs/news.png',
    id: 'news'
  },
  {
    name: 'Contacts Khách Hàng',
    icon: 'imgs/customer.png',
    id: 'customer'
  },
  {
    name: 'About us',
    icon: 'imgs/aboutus.png',
    id: 'aboutus'
  },
  {
    name: 'Liên hệ',
    icon: 'imgs/contact.png',
    id: 'contact'
  }]
  constructor(public popCtrl: PopoverController,public loadingCtrl: LoadingController, public http: HttpClient, public toastCtrl: ToastController) {
    console.log('Hello GlobalheroProvider Provider');
  }

  emailValidator(email) {
    var re = /^(?:[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
    return re.test(email);
  }
  openContactUsPopOver()
  {
    let popover = this.popCtrl.create('ContactUsPopoverPage',{},{cssClass: 'contactUsPopover'});
    popover.present({
      ev: event, duration:0
      });  }
  presentToast(mess) {
    console.log(mess)
    let toast = this.toastCtrl.create({
      message: mess,
      duration: 3000,
      position: 'bottom'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
    toast.present();
  }
  presentLoading(mess) {
    this.loading = this.loadingCtrl.create({
      content: mess
    });
    this.loading.present();
  }
  dismissLoading() {
    this.loading.dismiss()
  }
  findDuplicates(data: Array<any>): Array<any> {
    return Array.from(new Set(data)).filter((value) => data.indexOf(value) !== data.lastIndexOf(value));
  }
  getCurrentDateandTime() {
    let today = new Date();
    let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    return {
      date: date, time: time
    }
  }
  isVideoCheck(url) {
    url = url.toLowerCase()
    if (url.includes('mp4') || url.includes('3gp') || url.includes('wmv') || url.includes('wav') || url.includes('mp3') || url.includes('avi') || url.includes('mpg'))
      return true
    else
      return false
  }
}
