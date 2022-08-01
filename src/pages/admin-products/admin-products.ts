import { Component, ElementRef, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, AlertController } from 'ionic-angular';
import { GlobalheroProvider } from '../../providers/globalhero/globalhero';
import { FirebaseServicesProvider } from '../../providers/firebase-services/firebase-services';
import { DomSanitizer } from '@angular/platform-browser';
import { productsFirebaseController } from '../../providers/firebase-services/productsFirebaseController';


/**
 * Generated class for the AdminNewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'AdminProductsPage',
  segment: 'admin/products',
  defaultHistory: ['AdminPage']
})
@Component({
  selector: 'page-admin-products',
  templateUrl: 'admin-products.html',
})
export class AdminProductsPage {
  @ViewChild('itemContentInput') itemContentInput: ElementRef;
  addItemGroupDialog
  addItemGroupDialogInput = {
    groupName: '',
    groupAvatar: '',
    mode: 'create',
    oldAvatar: '',
    oldGroupItem: null
  }
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
    lastUpdated: null,
    groupName: ''
  }
  mediaListToSend = []
  addItem = false
  groupManager = false
  listOfNews = []
  listOfNewsGroups = null
  listOfNewsGroupsToDisplay = []
  constructor(private productsFirebaseController: productsFirebaseController,
    private sanitizer: DomSanitizer, private alertCtrl: AlertController, private fbservices: FirebaseServicesProvider, private global: GlobalheroProvider, private menuCrtl: MenuController, public navCtrl: NavController, public navParams: NavParams) {

  }
  sideMenuTrigger() {
    this.menuCrtl.open();
  }
  openAddItem() {
    if (this.listOfNewsGroups.isRequired && this.listOfNewsGroups.data.length == 0)
      this.global.presentToast('Danh mục này yêu cầu phải có ít nhất 1 nhóm sản phẩm. Xin vui lòng tạo nhóm trước.')
    else
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
      lastUpdated: null,
      groupName: ''
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
    let inputValidate = true
    if (this.listOfNewsGroups != null && this.listOfNewsGroups.isRequired) {
      if (this.userInput.title == '' || this.userInput.detail == '' || this.userInput.groupName == '') {
        this.global.presentToast('Các trường bắt buộc không thể bỏ trống');
        inputValidate = false
      }
    }
    else {
      if (this.userInput.title == '' || this.userInput.detail == '') {
        this.global.presentToast('Các trường bắt buộc không thể bỏ trống');
        inputValidate = false
      }
    }
    if (this.validateInput) {
      this.global.presentLoading('')
      this.productsFirebaseController.createNews(this.userInput, this.currentChosenCatergory).then(res => {
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
            this.productsFirebaseController.addNewsMediaFileURLToDocumentObject(res, this.currentChosenCatergory, newsId)
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
    this.productsFirebaseController.getAllNewsCatergoriesMetadata().then(res => {
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
    this.productsFirebaseController.getNewsOfCatergory(catergoryID,null).then(res => {
      console.log(res)
      let result = <any>res
      if (result.hasContent) {
        for (let i = result.data.length - 1; i >= 0; i--) {
          if (result.data[i].id == 'productGroups') {
            //Đây ko phải sản phẩm mà là nhóm sp.
            this.listOfNewsGroups = result.data[i]
            result.data.splice(i, 1);
          }
        }
        this.listOfNews = result.data
        this.listOfNewsGroupsToDisplay = []
        if (this.listOfNewsGroups.data.length > 0) {
          for (let group of this.listOfNewsGroups.data) {
            let parsedObj = JSON.parse(group)
            this.listOfNewsGroupsToDisplay.push({
              id: group,
              groupName: parsedObj.groupName,
              groupAvatar: parsedObj.groupAvatar
            })
          }
        }
        else
          this.listOfNewsGroupsToDisplay = []
        console.log('Danh sách products')
        console.log(this.listOfNews)
        console.log('Danh sách products groups đã parse')
        console.log(this.listOfNewsGroupsToDisplay)
        console.log('Danh sách products groups chưa parse')
        console.log(this.listOfNewsGroups)
      }
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
            this.productsFirebaseController.deleteNews(this.currentChosenCatergory, item.id).then(res => {
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
    this.navCtrl.push('AdminProductDetailPage', { currentChosenCatergory: this.currentChosenCatergory, item: item, itemGroup:this.listOfNewsGroupsToDisplay })
  }
  openAddItemGroupDialog(item) {
    this.addItemGroupDialog = document.getElementById('addItemGroupDialog') as HTMLDialogElement;
    if (item != null) {
      console.log(item)
      //Edit existing group
      this.addItemGroupDialogInput.groupName = item.groupName
      this.addItemGroupDialogInput.mode = 'edit'
      this.addItemGroupDialogInput.oldAvatar = item.groupAvatar,
        this.addItemGroupDialogInput.oldGroupItem = item.id
    }
    else {
      //Create new group
      this.addItemGroupDialogInput.mode = 'create'
    }
    this.addItemGroupDialog.showModal()
  }
  closeAddItemGroupDialog() {
    this.addItemGroupDialogInput = {
      groupName: '',
      groupAvatar: '',
      mode: 'create',
      oldAvatar: '',
      oldGroupItem: null
    }
    this.addItemGroupDialog.close()
  }
  deleteItemGroup(group) {
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
            let self = this;
            this.productsFirebaseController.deleteExistingItemGroup(this.currentChosenCatergory, group.id).then(res => {
              this.global.dismissLoading();
              this.getNewsOfCatergory(this.currentChosenCatergory)
            }).catch(err => {
              self.global.presentToast('Đã có lỗi xảy ra khi kết nối hệ thống, xin vui lòng thử lại')
            })
          }
        }
      ]
    });
    alert.present();
  }
  itemGroupAvatarChangeListener($event): void {
    this.addItemGroupDialogInput.groupAvatar = this.fileListToArray($event.target.files)[0];
    let fileinput = document.getElementById("itemGroupAvatar") as HTMLInputElement;
    fileinput.files = null;
  }
  addItemGroupConfirm() {
    if (this.addItemGroupDialogInput.mode == 'create') {
      if (this.addItemGroupDialogInput.groupAvatar == '' || this.addItemGroupDialogInput.groupName == '')
        this.global.presentToast('Bạn cần cung cấp đầy đủ các trường bắt buộc.')
      else {
        this.global.presentLoading('')
        this.productsFirebaseController.createNewItemGroups(this.addItemGroupDialogInput.groupAvatar, this.addItemGroupDialogInput.groupName, this.currentChosenCatergory)
          .then(res => {
            this.global.dismissLoading()
            this.global.presentToast('Tạo nhóm thành công')
            this.closeAddItemGroupDialog()
            this.getNewsOfCatergory(this.currentChosenCatergory)
          })
          .catch(err => {
            console.log(err)
            this.global.dismissLoading()
            this.global.presentToast('Đã có lỗi xảy ra khi kết nối hệ thống, xin vui lòng thử lại')
          })
      }
    }
    else {
      this.global.presentLoading('')
      this.productsFirebaseController.updateExistingItemGroup(this.addItemGroupDialogInput.groupAvatar, this.addItemGroupDialogInput.groupName, this.addItemGroupDialogInput.oldGroupItem, this.currentChosenCatergory)
        .then(res => {
          this.global.dismissLoading()
          this.global.presentToast('Chỉnh sửa nhóm thành công')
          this.closeAddItemGroupDialog()
          this.getNewsOfCatergory(this.currentChosenCatergory)
        })
        .catch(err => {
          console.log(err)
          this.global.dismissLoading()
          this.global.presentToast('Đã có lỗi xảy ra khi kết nối hệ thống, xin vui lòng thử lại')
        })
    }

  }
}
