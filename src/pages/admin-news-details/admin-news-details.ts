import { Component, ElementRef, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, AlertController } from 'ionic-angular';
import { GlobalheroProvider } from '../../providers/globalhero/globalhero';
import { FirebaseServicesProvider } from '../../providers/firebase-services/firebase-services';
import {DomSanitizer} from '@angular/platform-browser';
import { aboutusFirebaseController } from '../../providers/firebase-services/aboutusFirebaseController';
import { newsFirebaseController } from '../../providers/firebase-services/newsFirebaseController';

/**
 * Generated class for the AdminAboutusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'AdminNewsDetailsPage',
  segment: 'admin/news/newsedit',
  defaultHistory: ['AdminPage']
})
@Component({
  selector: 'page-admin-news-details',
  templateUrl: 'admin-news-details.html',
})
export class AdminNewsDetailsPage {
  @ViewChild('itemContentInput') itemContentInput: ElementRef;

  itemInput = {
    shortDescription: '',
    title: '',
    detail: '',
    mediaList: [],
    status:true,
    lastUpdated: null,
    id:null
  }
  originalItemInput= null;
  modificationMediaList = [];
  currentChosenCatergory=null
  /////////////////////////////////////////////////////////////////
  mediaListToSend = []
  editMedia = false
  constructor(private newsFirebaseController:newsFirebaseController,
    private sanitizer:DomSanitizer,private alertCtrl: AlertController, private fbservices: FirebaseServicesProvider, private global: GlobalheroProvider, private menuCrtl: MenuController, public navCtrl: NavController, public navParams: NavParams) {
  }

  goBack() {
    this.navCtrl.pop()
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminAboutusPage');
  }
  ionViewWillEnter() {
    if(this.navParams.get('item')==null)
    this.navCtrl.popToRoot();
    else
    {
      this.originalItemInput=this.navParams.get('item');
      this.itemInput=this.originalItemInput
      this.currentChosenCatergory=this.navParams.get('currentChosenCatergory')
    }
  }
  textAreaResize() {
    var element = this.itemContentInput['_elementRef'].nativeElement.getElementsByClassName("text-input")[0];
    var scrollHeight = element.scrollHeight;
    element.style.height = scrollHeight + 'px';
    this.itemContentInput['_elementRef'].nativeElement.style.height = (scrollHeight + 16) + 'px';
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
    if (this.itemInput.title == '' || this.itemInput.detail == '')
      this.global.presentToast('C??c tr?????ng b???t bu???c kh??ng th??? b??? tr???ng');
    else
      {
        this.newsFirebaseController.updateNews(this.currentChosenCatergory, this.itemInput.id, this.itemInput).then(() => {
          this.global.dismissLoading()
          //update media if any
          if (this.mediaListToSend.length > 0)
            this.mediaUpload()
          else
            this.navCtrl.pop()
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
        this.fbservices.fbUploadFiles(media, 'news').then(
          res => {
            //url return
            console.log(res)
            //saveurl to news
            this.newsFirebaseController.addNewsMediaFileURLToDocumentObject(res, this.currentChosenCatergory, this.itemInput.id)
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
      }, 1000);
      self.mediaListToSend = []
    })
      .catch(err => {
        self.global.dismissLoading()
      });
  }

  openListOfCurrentMedia() {
    this.modificationMediaList = Array.from(this.originalItemInput.mediaList)
    this.editMedia = true
  }
  closeListOfCurrentMedia() {
    this.editMedia = false
    this.modificationMediaList = []
  }
  refreshModification() {
    this.modificationMediaList = Array.from(this.originalItemInput.mediaList)
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
    if (JSON.stringify(this.originalItemInput.mediaList) == JSON.stringify(this.modificationMediaList)) {
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
              let filesToDelete = this.originalItemInput.mediaList.filter(x => this.modificationMediaList.indexOf(x) === -1);
              console.log(filesToDelete)
              let promiseList = []
              for (let file of filesToDelete) {
                //delete files after remove during modification
                promiseList.push(this.fbservices.deleteFileFromfbStorage(file))
              }
              promiseList.push(this.newsFirebaseController.setMediaArrayToDocument(this.modificationMediaList, this.currentChosenCatergory, this.itemInput.id));
              let self = this;
              Promise.all(promiseList).then(function (values) {
                self.global.dismissLoading()
                self.global.presentToast('Sao l??u th??nh c??ng')
                self.closeListOfCurrentMedia();
                self.navCtrl.pop()
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
