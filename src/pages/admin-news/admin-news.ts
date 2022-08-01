import { Component, ElementRef, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, AlertController } from 'ionic-angular';
import { GlobalheroProvider } from '../../providers/globalhero/globalhero';
import { FirebaseServicesProvider } from '../../providers/firebase-services/firebase-services';
import { DomSanitizer } from '@angular/platform-browser';
import { newsFirebaseController } from '../../providers/firebase-services/newsFirebaseController';


/**
 * Generated class for the AdminNewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'AdminNewsPage',
  segment: 'admin/news',
  defaultHistory: ['AdminPage']
})
@Component({
  selector: 'page-admin-news',
  templateUrl: 'admin-news.html',
})
export class AdminNewsPage {
  @ViewChild('itemContentInput') itemContentInput: ElementRef;

  currentChosenCatergory = ''
  newsCatergories = {
    newsCatergoriesCollectionID: [],
    newsCatergoriesMetadata: []
  }

  userInput = {
    shortDescription: '',
    title: '',
    detail: '',
    mediaList: [],
    status: true,
    lastUpdated: null
  }
  mediaListToSend = []
  addItem = false

  listOfNews = []

  constructor(private newsFirebaseController: newsFirebaseController,
    private sanitizer: DomSanitizer, private alertCtrl: AlertController, private fbservices: FirebaseServicesProvider, private global: GlobalheroProvider, private menuCrtl: MenuController, public navCtrl: NavController, public navParams: NavParams) {

  }
  sideMenuTrigger() {
    this.menuCrtl.open();
  }
  openAddItem() {
    this.addItem = true
  }
  closeAddItem() {
    this.addItem = false;
    this.userInput = {
      shortDescription: '',
      title: '',
      detail: '',
      mediaList: [],
      status: true,
      lastUpdated: null
    }
    this.mediaListToSend = []
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
      this.global.presentToast('Bạn chỉ được dùng tối đa 10 file media.')
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
    if (this.userInput.title == '' || this.userInput.detail == '')
      this.global.presentToast('Các trường bắt buộc không thể bỏ trống');
    else {
      this.global.presentLoading('')
      this.newsFirebaseController.createNews(this.userInput, this.currentChosenCatergory).then(res => {
        console.log(res)
        this.global.dismissLoading()
        this.global.presentToast('Cập nhật thành công!')

        //update media if any
        if (this.mediaListToSend.length > 0)
          this.mediaUpload(res)
        else {
          this.closeAddItem()
          this.getNewsOfCatergory(this.currentChosenCatergory)
        }
      })
        .catch(err => {
          console.log(err)
          this.global.dismissLoading()
          this.global.presentToast('Đã có lỗi khi kết nối với hệ thống. Vui lòng thử lại sau')
        })
    }
  }
  mediaUpload(newsId) {
    this.global.presentLoading('Đang upload các file media')
    let promiseList = []
    for (let media of this.mediaListToSend) {
      promiseList.push(
        this.fbservices.fbUploadFiles(media, 'news').then(
          res => {
            //url return
            console.log(res)
            //saveurl to news
            this.newsFirebaseController.addNewsMediaFileURLToDocumentObject(res, this.currentChosenCatergory, newsId)
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
        self.closeAddItem()
        self.getNewsOfCatergory(self.currentChosenCatergory)
      }, 1000);
      self.mediaListToSend = []
    })
      .catch(err => {
        self.global.dismissLoading()
      });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminNewsPage');
  }
  ionViewWillEnter() {
    this.getCatergories()
  }
  getCatergories() {
    this.currentChosenCatergory = ''
    this.newsCatergories = {
      newsCatergoriesCollectionID: [],
      newsCatergoriesMetadata: []
    }
    this.global.presentLoading('')
    this.newsFirebaseController.getAllNewsCatergoriesMetadata().then(res => {
      for (let key in <any>res) {
        if (<any>res.hasOwnProperty(key)) {
          this.newsCatergories.newsCatergoriesMetadata.push(<any>res[key])
        }
      }
      if (this.currentChosenCatergory == '')
        this.newsCatergories.newsCatergoriesCollectionID = Object.keys(res)
      if (this.global.lastChosenCatergory == null)
        this.currentChosenCatergory = this.newsCatergories.newsCatergoriesCollectionID[0]
      else
        this.currentChosenCatergory = this.global.lastChosenCatergory

      console.log(this.newsCatergories)
      this.global.dismissLoading()
      this.getNewsOfCatergory(this.currentChosenCatergory)
    })
  }
  getNewsOfCatergory(catergoryID) {
    this.newsFirebaseController.getNewsOfCatergory(catergoryID).then(res => {
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
    })
  }
  segmentChanged(e) {
    this.global.lastChosenCatergory = this.currentChosenCatergory
    this.getNewsOfCatergory(this.currentChosenCatergory)
  }
  deleteItem(item) {
    let alert = this.alertCtrl.create({
      title: 'Lưu ý',
      message: 'Bạn có chắc chắn muốn thực hiện lệnh xóa?',
      buttons: [
        {
          text: 'Không',
          role: 'cancel',
          handler: () => {
          }
        },
        {
          text: 'Có',
          handler: () => {
            this.global.presentLoading('')
            this.newsFirebaseController.deleteNews(this.currentChosenCatergory, item.id).then(res => {
              if (item.mediaList.length > 0) {
                for (let media of item.mediaList)
                  this.fbservices.deleteFileFromfbStorage(media)
              }
              this.global.dismissLoading();
              this.getNewsOfCatergory(this.currentChosenCatergory)
            })
          }
        }
      ]
    });
    alert.present();

  }
  editItem(item) {
    this.navCtrl.push('AdminNewsDetailsPage', { currentChosenCatergory: this.currentChosenCatergory, item: item })
  }
}
