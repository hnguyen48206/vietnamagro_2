import { Component, ElementRef, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, AlertController } from 'ionic-angular';
import { GlobalheroProvider } from '../../providers/globalhero/globalhero';
import { FirebaseServicesProvider } from '../../providers/firebase-services/firebase-services';
import { DomSanitizer } from '@angular/platform-browser';
import { contactFirebaseController } from '../../providers/firebase-services/contactFirebaseController';

/**
 * Generated class for the AdminAboutusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'AdminContactPage',
  segment: 'admin/contact',
  defaultHistory: ['AdminPage']
}
)
@Component({
  selector: 'page-admin-contact',
  templateUrl: 'admin-contact.html',
})
export class AdminContactPage {
  originalContactDetail = null
  contactDetail = {
    companyName: '',
    address: '',
    phone: '',
    email: '',
    website: ''
  }
  constructor(private contactFirebaseController: contactFirebaseController,
    private sanitizer: DomSanitizer, private alertCtrl: AlertController, private fbservices: FirebaseServicesProvider, private global: GlobalheroProvider, private menuCrtl: MenuController, public navCtrl: NavController, public navParams: NavParams) {
  }
  sideMenuTrigger() {
    this.menuCrtl.open();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminContactPage');
  }
  ionViewWillEnter() {
    this.getCurrentContact()
  }
  getCurrentContact() {
    this.global.presentLoading('')
    this.contactFirebaseController.getContact().then(res => {
      this.global.dismissLoading()
      console.log(res)
      let result = <any>res
      if (result.hasContent) {
        this.originalContactDetail = result.data,
        this.contactDetail=this.originalContactDetail
      }
    }).catch(err => {
      this.global.dismissLoading()
    })
  }

  validateInput() {
    if (this.contactDetail.companyName == '' || this.contactDetail.phone == '' || this.contactDetail.email == '' || this.contactDetail.website == '')
      this.global.presentToast('C??c tr?????ng b???t bu???c kh??ng th??? b??? tr???ng');
    else if (!this.global.emailValidator(this.contactDetail.email))
      this.global.presentToast('?????nh d???ng email kh??ng h???p l???, vui l??ng ki???m tra l???i')
    else
      this.createUpdateContact()
  }
  createUpdateContact() {
    this.global.presentLoading('')
    if (this.originalContactDetail == null) {
      this.contactFirebaseController.createContact(this.contactDetail).then(res => {
        console.log(res)
        this.contactDetail['id'] = res
        this.originalContactDetail = this.contactDetail
        this.global.dismissLoading()
        this.global.presentToast('C???p nh???t th??nh c??ng!')
      })
        .catch(err => {
          console.log(err)
          this.global.dismissLoading()
          this.global.presentToast('???? c?? l???i khi k???t n???i v???i h??? th???ng. Vui l??ng th??? l???i sau')
        })
    }
    else {
      //Update old contact
      this.contactFirebaseController.updateContact(this.contactDetail).then(() => {
        this.global.dismissLoading()
      }).catch(err => {
        this.global.dismissLoading()
      })
    }
  }

}

