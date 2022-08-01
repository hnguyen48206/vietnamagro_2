import { Component, ElementRef, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, AlertController } from 'ionic-angular';
import { GlobalheroProvider } from '../../providers/globalhero/globalhero';
import { FirebaseServicesProvider } from '../../providers/firebase-services/firebase-services';
import {DomSanitizer} from '@angular/platform-browser';
import { customerFirebaseController } from '../../providers/firebase-services/customerFirebaseController';

/**
 * Generated class for the AdminCustomerCommentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'AdminCustomerCommentsPage',
  segment: 'admin/customers',
  defaultHistory: ['AdminPage']
})@Component({
  selector: 'page-admin-customer-comments',
  templateUrl: 'admin-customer-comments.html',
})

export class AdminCustomerCommentsPage {
  currentItemToGetDetail=null
  listOfComments=[]
  showDetail=false
  constructor(private customerFirebaseController:customerFirebaseController,
    private sanitizer:DomSanitizer,private alertCtrl: AlertController, private fbservices: FirebaseServicesProvider, private global: GlobalheroProvider, private menuCrtl: MenuController, public navCtrl: NavController, public navParams: NavParams) {
  }
  sideMenuTrigger() {
    this.menuCrtl.open();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminCustomerCommentsPage');
  }
  ionViewWillEnter()
  {
    this.customerFirebaseController.getAllComments().then(res=>{
      console.log(res)
      let result=<any>res
      if(result.hasContent)
      {
        this.listOfComments=result.data
      }
    })
  }
  openShowDetail()
  {
    this.showDetail=true
  }
  closeShowDetail()
  {
    this.showDetail=false;
    if(!this.currentItemToGetDetail.status)
    {
      this.customerFirebaseController.updateCommentStatus(this.currentItemToGetDetail.id, true).then(res=>{
        this.ionViewWillEnter()
      }).catch(err=>{
      })
    }
  }
  viewItem(item){
    this.currentItemToGetDetail=item
    this.openShowDetail();   
  }
  deleteItem(item){
    this.global.presentLoading('')
    this.customerFirebaseController.deleteComment(item.id).then(res=>{
      this.global.dismissLoading();
      this.ionViewWillEnter()
    }).catch(err=>{
      this.global.dismissLoading()
    })
  }
  createComment()
  {
    let mail=Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    this.customerFirebaseController.createComment(
      {
        status:false,
        lastUpdated:this.global.getCurrentDateandTime(),
        email:'p8sm9lq9tagdsint0lteza',
        name:'abc',
        phone:'090000900',
        content:['kghkghhjkhkjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj']
      }
    )
  }

}
