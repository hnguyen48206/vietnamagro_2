import { Component, ElementRef, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { customerFirebaseController } from '../../providers/firebase-services/customerFirebaseController';
import { GlobalheroProvider } from '../../providers/globalhero/globalhero';
declare var window
/**
 * Generated class for the HomeContactUsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage({
  name: 'HomeContactUsPage',
  segment: 'home/:site/contact',
  defaultHistory: ['HomePage']
})

@Component({
  selector: 'page-home-contact-us',
  templateUrl: 'home-contact-us.html',
})
export class HomeContactUsPage {
  @ViewChild('contactUsContentInput') contactUsContentInput: ElementRef;
  currentSiteCatergory
  contactUsInput = {
    name: '',
    email: '',
    phone: '',
    content: [''],
    status: false,
    lastUpdated: null
  }
  internationalPhonePrefix
  constructor(private global: GlobalheroProvider, public customerFirebaseController: customerFirebaseController, public navCtrl: NavController, public navParams: NavParams) {
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeContactUsPage');
  }
  ionViewWillEnter() {
    this.currentSiteCatergory = this.navParams.get('site')
  }
  ionViewDidEnter() {
    var input = document.querySelector("#phone");
    this.internationalPhonePrefix = window.intlTelInput(input, {
      // utilsScript is useful for providing validation and pretty formatting
      utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.3/js/utils.min.js",
      initialCountry: 'vn',
      preferredCountries: ['vn', 'us'],
      separateDialCode: true
    });
  }
  textAreaResize() {
    var element = this.contactUsContentInput['_elementRef'].nativeElement.getElementsByClassName("text-input")[0];
    var scrollHeight = element.scrollHeight;
    element.style.height = scrollHeight + 'px';
    this.contactUsContentInput['_elementRef'].nativeElement.style.height = (scrollHeight + 16) + 'px';
  }
  sendFeeback() {
    this.contactUsInput.lastUpdated = this.global.getCurrentDateandTime()
    this.contactUsInput.phone=this.internationalPhonePrefix.getNumber()
    this.customerFirebaseController.createComment(
      this.contactUsInput
    )
    this.global.presentLoading('Xin vui lòng đợi trong giây lát...')
    setTimeout(() => {
      this.global.dismissLoading();
    }, 2000);
  }
  validateInput() {
    console.log(this.internationalPhonePrefix.getNumber() + this.internationalPhonePrefix.isValidNumber())
    console.log(this.contactUsInput)
    if (this.contactUsInput.name == '' || this.contactUsInput.email == '' || this.contactUsInput.content[0] == '')
      this.global.presentToast('Các trường bắt buộc không thể bỏ trống');
    else if (!this.global.emailValidator(this.contactUsInput.email))
      this.global.presentToast('Định dạng email không hợp lệ, vui lòng kiểm tra lại')
    else if (this.internationalPhonePrefix.getNumber() != '' && !this.internationalPhonePrefix.isValidNumber())
      this.global.presentToast('Định dạng số điện thoại không hợp lệ, vui lòng kiểm tra lại')
    else
      this.sendFeeback()
  }
}
