import { Component, ElementRef, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, AlertController } from 'ionic-angular';
import { GlobalheroProvider } from '../../providers/globalhero/globalhero';
import { FirebaseServicesProvider } from '../../providers/firebase-services/firebase-services';
import {DomSanitizer} from '@angular/platform-browser';
import { aboutusFirebaseController } from '../../providers/firebase-services/aboutusFirebaseController';

/**
 * Generated class for the AdminAboutusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'AdminAboutusPage',
  segment: 'admin/aboutus',
  defaultHistory: ['AdminPage']
}
)
@Component({
  selector: 'page-admin-aboutus',
  templateUrl: 'admin-aboutus.html',
})
export class AdminAboutusPage {
  @ViewChild('aboutusContentInput') aboutusContentInput: ElementRef;

  aboutUsInput = {
    shortDescription: '',
    title: '',
    detail: '',
    mediaList: [],
    status:true,
    lastUpdated: null
  }
  originalAboutUS = null;
  modificationMediaList = [];
  /////////////////////////////////////////////////////////////////
  mediaListToSend = []
  editMedia = false
  constructor(private aboutusFirebaseController:aboutusFirebaseController,
    private sanitizer:DomSanitizer,private alertCtrl: AlertController, private fbservices: FirebaseServicesProvider, private global: GlobalheroProvider, private menuCrtl: MenuController, public navCtrl: NavController, public navParams: NavParams) {
  }
  goHome() {
    this.navCtrl.setRoot('AdminPage')
  }
  sideMenuTrigger() {
    this.menuCrtl.open();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminAboutusPage');
  }
  ionViewWillEnter() {
    this.getCurrentAboutUS()
  }
  getCurrentAboutUS() {
    this.global.presentLoading('')
    this.aboutusFirebaseController.getAboutUS().then(res => {
      this.global.dismissLoading()
      console.log(res)
      let result = <any>res
      if (result.hasContent) {
        this.originalAboutUS = result.data
        this.aboutUsInput = this.originalAboutUS
      }
    }).catch(err => {
      this.global.dismissLoading()
    })
  }
  textAreaResize() {
    var element = this.aboutusContentInput['_elementRef'].nativeElement.getElementsByClassName("text-input")[0];
    var scrollHeight = element.scrollHeight;
    element.style.height = scrollHeight + 'px';
    this.aboutusContentInput['_elementRef'].nativeElement.style.height = (scrollHeight + 16) + 'px';
  }
  fileChangeListener($event): void {
    this.mediaListToSend = this.mediaListToSend.concat(this.fileListToArray($event.target.files));
    let fileinput = document.getElementById("fileInputId") as HTMLInputElement;
    fileinput.value = null;
    console.log(this.mediaListToSend)
    if (this.mediaListToSend.length > 10) {
      this.mediaListToSend.length = 10;
      this.global.presentToast('B???n ch??? ???????c d??ng t???i ??a 10 file media.')
    }
  }
  fileListToArray(fileList) {
    return Array.prototype.slice.call(fileList);
  }
  removeFileFromList(filename) {
    for (let i = this.mediaListToSend.length - 1; i >= 0; i--) {
      if (this.mediaListToSend[i].name === filename) {
        this.mediaListToSend.splice(i, 1);
      }
    }
  }
  validateInput() {
    if (this.aboutUsInput.title == '' || this.aboutUsInput.detail == '')
      this.global.presentToast('C??c tr?????ng b???t bu???c kh??ng th??? b??? tr???ng');
    else
      this.createUpdateAboutUS()
  }
  createUpdateAboutUS() {
    this.global.presentLoading('')
    if (this.originalAboutUS == null) {
      this.aboutusFirebaseController.createAboutUs(this.aboutUsInput).then(res => {
        console.log(res)
        this.aboutUsInput['id'] = res
        this.originalAboutUS = this.aboutUsInput
        this.global.dismissLoading()
        this.global.presentToast('C???p nh???t th??nh c??ng!')

        //update media if any
        if (this.mediaListToSend.length > 0)
          this.mediaUpload()
        else
          this.getCurrentAboutUS()
      })
        .catch(err => {
          console.log(err)
          this.global.dismissLoading()
          this.global.presentToast('???? c?? l???i khi k???t n???i v???i h??? th???ng. Vui l??ng th??? l???i sau')
        })
    }
    else {
      //Update old about us
      this.aboutusFirebaseController.updateAboutUS('data', this.aboutUsInput).then(() => {
        this.global.dismissLoading()
        //update media if any
        if (this.mediaListToSend.length > 0)
          this.mediaUpload()
        else
          this.getCurrentAboutUS()
      }).catch(err => {
        this.global.dismissLoading()
      })
    }
  }
  mediaUpload() {
    this.global.presentLoading('??ang upload c??c file media')
    let promiseList = []
    for (let media of this.mediaListToSend) {
      promiseList.push(
        this.fbservices.fbUploadFiles(media, 'aboutus').then(
          res => {
            //url return
            console.log(res)
            //saveurl to about us
            this.fbservices.addMediaFileURLToDocumentObject(res, 'aboutus', this.originalAboutUS.id)
          }
        ).catch(err => {
          console.log(err)
        })
      )
    }
    let self = this;
    Promise.all(promiseList).then(function (values) {
      console.log('All upload completed')
      setTimeout(() => {
        self.global.dismissLoading()
        self.getCurrentAboutUS();
      }, 1000);
      self.mediaListToSend=[]
    })
      .catch(err => {
        self.global.dismissLoading()
      });
  }

  openListOfCurrentMedia() {
    this.modificationMediaList = Array.from(this.originalAboutUS.mediaList)
    this.editMedia = true
  }
  closeListOfCurrentMedia() {
    this.editMedia = false
    this.modificationMediaList = []
  }
  refreshModification() {
    this.modificationMediaList = Array.from(this.originalAboutUS.mediaList)
  }
  deleteModification(item) {
    if (item == null)
      this.modificationMediaList = []
    else
      for (let i = this.modificationMediaList.length - 1; i >= 0; i--) {
        if (this.modificationMediaList[i] === item) {
          this.modificationMediaList.splice(i, 1);
        }
      }
  }
  reorderItems(indexes) {
    let element = this.modificationMediaList[indexes.from];
    this.modificationMediaList.splice(indexes.from, 1);
    this.modificationMediaList.splice(indexes.to, 0, element);
  }
  confirmMediaModification() {
    if (JSON.stringify(this.originalAboutUS.mediaList) == JSON.stringify(this.modificationMediaList)) {
      //There is no modification, just exit
      this.closeListOfCurrentMedia()
    }
    else {
      let alert = this.alertCtrl.create({
        title: 'L??u ??',
        message: 'B???n c?? ch???c ch???n mu???n c???p nh???t thay ?????i?',
        buttons: [
          {
            text: 'Kh??ng',
            role: 'cancel',
            handler: () => {
              alert.dismiss();
            }
          },
          {
            text: 'C??',
            handler: () => {
              this.global.presentLoading('Sao l??u thay ?????i')
              let filesToDelete = this.originalAboutUS.mediaList.filter(x => this.modificationMediaList.indexOf(x) === -1);
              console.log(filesToDelete)
              let promiseList = []
              for (let file of filesToDelete) {
                //delete files after remove during modification
                promiseList.push(this.fbservices.deleteFileFromfbStorage(file))
              }
              promiseList.push(this.fbservices.setMediaArrayToDocument(this.modificationMediaList, 'aboutus', this.originalAboutUS.id));
              let self = this;
              Promise.all(promiseList).then(function (values) {
                self.global.dismissLoading()
                self.global.presentToast('Sao l??u th??nh c??ng')
                self.closeListOfCurrentMedia();
                self.getCurrentAboutUS();
              })
                .catch(err => {
                  self.global.dismissLoading()
                  self.global.presentToast('???? c?? l???i khi k???t n???i v???i h??? th???ng. Vui l??ng th??? l???i sau')
                });
            }
          }
        ]
      });
      alert.present();
    }
  }

}
