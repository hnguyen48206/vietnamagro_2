webpackJsonp([20],{

/***/ 869:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminAboutusPageModule", function() { return AdminAboutusPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__admin_aboutus__ = __webpack_require__(894);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AdminAboutusPageModule = /** @class */ (function () {
    function AdminAboutusPageModule() {
    }
    AdminAboutusPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__admin_aboutus__["a" /* AdminAboutusPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__admin_aboutus__["a" /* AdminAboutusPage */]),
            ],
        })
    ], AdminAboutusPageModule);
    return AdminAboutusPageModule;
}());

//# sourceMappingURL=admin-aboutus.module.js.map

/***/ }),

/***/ 894:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminAboutusPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_globalhero_globalhero__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_firebase_services_firebase_services__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_firebase_services_aboutusFirebaseController__ = __webpack_require__(386);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the AdminAboutusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AdminAboutusPage = /** @class */ (function () {
    function AdminAboutusPage(aboutusFirebaseController, sanitizer, alertCtrl, fbservices, global, menuCrtl, navCtrl, navParams) {
        this.aboutusFirebaseController = aboutusFirebaseController;
        this.sanitizer = sanitizer;
        this.alertCtrl = alertCtrl;
        this.fbservices = fbservices;
        this.global = global;
        this.menuCrtl = menuCrtl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.aboutUsInput = {
            shortDescription: '',
            title: '',
            detail: '',
            mediaList: [],
            status: true,
            lastUpdated: null
        };
        this.originalAboutUS = null;
        this.modificationMediaList = [];
        /////////////////////////////////////////////////////////////////
        this.mediaListToSend = [];
        this.editMedia = false;
    }
    AdminAboutusPage.prototype.goHome = function () {
        this.navCtrl.setRoot('AdminPage');
    };
    AdminAboutusPage.prototype.sideMenuTrigger = function () {
        this.menuCrtl.open();
    };
    AdminAboutusPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AdminAboutusPage');
    };
    AdminAboutusPage.prototype.ionViewWillEnter = function () {
        this.getCurrentAboutUS();
    };
    AdminAboutusPage.prototype.getCurrentAboutUS = function () {
        var _this = this;
        this.global.presentLoading('');
        this.aboutusFirebaseController.getAboutUS().then(function (res) {
            _this.global.dismissLoading();
            console.log(res);
            var result = res;
            if (result.hasContent) {
                _this.originalAboutUS = result.data;
                _this.aboutUsInput = _this.originalAboutUS;
            }
        }).catch(function (err) {
            _this.global.dismissLoading();
        });
    };
    AdminAboutusPage.prototype.textAreaResize = function () {
        var element = this.aboutusContentInput['_elementRef'].nativeElement.getElementsByClassName("text-input")[0];
        var scrollHeight = element.scrollHeight;
        element.style.height = scrollHeight + 'px';
        this.aboutusContentInput['_elementRef'].nativeElement.style.height = (scrollHeight + 16) + 'px';
    };
    AdminAboutusPage.prototype.fileChangeListener = function ($event) {
        this.mediaListToSend = this.mediaListToSend.concat(this.fileListToArray($event.target.files));
        var fileinput = document.getElementById("fileInputId");
        fileinput.value = null;
        console.log(this.mediaListToSend);
        if (this.mediaListToSend.length > 10) {
            this.mediaListToSend.length = 10;
            this.global.presentToast('Bạn chỉ được dùng tối đa 10 file media.');
        }
    };
    AdminAboutusPage.prototype.fileListToArray = function (fileList) {
        return Array.prototype.slice.call(fileList);
    };
    AdminAboutusPage.prototype.removeFileFromList = function (filename) {
        for (var i = this.mediaListToSend.length - 1; i >= 0; i--) {
            if (this.mediaListToSend[i].name === filename) {
                this.mediaListToSend.splice(i, 1);
            }
        }
    };
    AdminAboutusPage.prototype.validateInput = function () {
        if (this.aboutUsInput.title == '' || this.aboutUsInput.detail == '')
            this.global.presentToast('Các trường bắt buộc không thể bỏ trống');
        else
            this.createUpdateAboutUS();
    };
    AdminAboutusPage.prototype.createUpdateAboutUS = function () {
        var _this = this;
        this.global.presentLoading('');
        if (this.originalAboutUS == null) {
            this.aboutusFirebaseController.createAboutUs(this.aboutUsInput).then(function (res) {
                console.log(res);
                _this.aboutUsInput['id'] = res;
                _this.originalAboutUS = _this.aboutUsInput;
                _this.global.dismissLoading();
                _this.global.presentToast('Cập nhật thành công!');
                //update media if any
                if (_this.mediaListToSend.length > 0)
                    _this.mediaUpload();
                else
                    _this.getCurrentAboutUS();
            })
                .catch(function (err) {
                console.log(err);
                _this.global.dismissLoading();
                _this.global.presentToast('Đã có lỗi khi kết nối với hệ thống. Vui lòng thử lại sau');
            });
        }
        else {
            //Update old about us
            this.aboutusFirebaseController.updateAboutUS('data', this.aboutUsInput).then(function () {
                _this.global.dismissLoading();
                //update media if any
                if (_this.mediaListToSend.length > 0)
                    _this.mediaUpload();
                else
                    _this.getCurrentAboutUS();
            }).catch(function (err) {
                _this.global.dismissLoading();
            });
        }
    };
    AdminAboutusPage.prototype.mediaUpload = function () {
        var _this = this;
        this.global.presentLoading('Đang upload các file media');
        var promiseList = [];
        for (var _i = 0, _a = this.mediaListToSend; _i < _a.length; _i++) {
            var media = _a[_i];
            promiseList.push(this.fbservices.fbUploadFiles(media, 'aboutus').then(function (res) {
                //url return
                console.log(res);
                //saveurl to about us
                _this.fbservices.addMediaFileURLToDocumentObject(res, 'aboutus', _this.originalAboutUS.id);
            }).catch(function (err) {
                console.log(err);
            }));
        }
        var self = this;
        Promise.all(promiseList).then(function (values) {
            console.log('All upload completed');
            setTimeout(function () {
                self.global.dismissLoading();
                self.getCurrentAboutUS();
            }, 1000);
            self.mediaListToSend = [];
        })
            .catch(function (err) {
            self.global.dismissLoading();
        });
    };
    AdminAboutusPage.prototype.openListOfCurrentMedia = function () {
        this.modificationMediaList = Array.from(this.originalAboutUS.mediaList);
        this.editMedia = true;
    };
    AdminAboutusPage.prototype.closeListOfCurrentMedia = function () {
        this.editMedia = false;
        this.modificationMediaList = [];
    };
    AdminAboutusPage.prototype.refreshModification = function () {
        this.modificationMediaList = Array.from(this.originalAboutUS.mediaList);
    };
    AdminAboutusPage.prototype.deleteModification = function (item) {
        if (item == null)
            this.modificationMediaList = [];
        else
            for (var i = this.modificationMediaList.length - 1; i >= 0; i--) {
                if (this.modificationMediaList[i] === item) {
                    this.modificationMediaList.splice(i, 1);
                }
            }
    };
    AdminAboutusPage.prototype.reorderItems = function (indexes) {
        var element = this.modificationMediaList[indexes.from];
        this.modificationMediaList.splice(indexes.from, 1);
        this.modificationMediaList.splice(indexes.to, 0, element);
    };
    AdminAboutusPage.prototype.confirmMediaModification = function () {
        var _this = this;
        if (JSON.stringify(this.originalAboutUS.mediaList) == JSON.stringify(this.modificationMediaList)) {
            //There is no modification, just exit
            this.closeListOfCurrentMedia();
        }
        else {
            var alert_1 = this.alertCtrl.create({
                title: 'Lưu ý',
                message: 'Bạn có chắc chắn muốn cập nhật thay đổi?',
                buttons: [
                    {
                        text: 'Không',
                        role: 'cancel',
                        handler: function () {
                            alert_1.dismiss();
                        }
                    },
                    {
                        text: 'Có',
                        handler: function () {
                            _this.global.presentLoading('Sao lưu thay đổi');
                            var filesToDelete = _this.originalAboutUS.mediaList.filter(function (x) { return _this.modificationMediaList.indexOf(x) === -1; });
                            console.log(filesToDelete);
                            var promiseList = [];
                            for (var _i = 0, filesToDelete_1 = filesToDelete; _i < filesToDelete_1.length; _i++) {
                                var file = filesToDelete_1[_i];
                                //delete files after remove during modification
                                promiseList.push(_this.fbservices.deleteFileFromfbStorage(file));
                            }
                            promiseList.push(_this.fbservices.setMediaArrayToDocument(_this.modificationMediaList, 'aboutus', _this.originalAboutUS.id));
                            var self = _this;
                            Promise.all(promiseList).then(function (values) {
                                self.global.dismissLoading();
                                self.global.presentToast('Sao lưu thành công');
                                self.closeListOfCurrentMedia();
                                self.getCurrentAboutUS();
                            })
                                .catch(function (err) {
                                self.global.dismissLoading();
                                self.global.presentToast('Đã có lỗi khi kết nối với hệ thống. Vui lòng thử lại sau');
                            });
                        }
                    }
                ]
            });
            alert_1.present();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('aboutusContentInput'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], AdminAboutusPage.prototype, "aboutusContentInput", void 0);
    AdminAboutusPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-admin-aboutus',template:/*ion-inline-start:"C:\Users\HoangN\Desktop\ionic\vietnamargo\src\pages\admin-aboutus\admin-aboutus.html"*/'  <ion-header *ngIf="global.isLogin" no-border>\n    <ion-item no-lines>\n      <img loading="lazy" class="sidemenuIcon" item-start src="imgs/sidemenu.png" (click)="sideMenuTrigger()" />\n      About Us\n    </ion-item>\n  </ion-header>\n\n<ion-content padding class="adminBG">\n  <div *ngIf="!global.isLogin" class="noLoginMessage">\n    <ion-item (click)="goHome()" no-lines text-center text-wrap>\n      <img loading="lazy" style=\'vertical-align:middle; width:30px; margin-right: 15px\' src=\'imgs/home.png\'>\n      <div style=\'vertical-align:middle; display:inline;\'>\n        Bạn chưa đăng nhập hệ thống. Vui lòng đăng nhập trước khi sử dụng tính năng này.</div>\n    </ion-item>\n  </div>\n\n  <div *ngIf="global.isLogin && !editMedia" class="aboutusWrapper">\n    <img loading="lazy" (click)="validateInput()" src="imgs/send.png" style="float:right; width:40px" />\n    <ion-item>\n      <ion-label fixed>Tiêu đề <span class="requiredInput">(*)</span></ion-label>\n      <ion-textarea [(ngModel)]="aboutUsInput.title" maxlength="60" placeholder="nhập tiêu đề..."></ion-textarea>\n    </ion-item>\n    <ion-item>\n      <ion-label fixed>Mô tả ngắn</ion-label>\n      <ion-textarea [(ngModel)]="aboutUsInput.shortDescription" maxlength="120" placeholder="nhập mô tả...">\n      </ion-textarea>\n    </ion-item>\n    <ion-item>\n      <ion-label style="color:#999">Trang thái xuất bản</ion-label>\n      <ion-toggle [(ngModel)]="aboutUsInput.status"></ion-toggle>\n    </ion-item>\n    <ion-item *ngIf="aboutUsInput.mediaList.length!=0" (click)="openListOfCurrentMedia()">\n      <img loading="lazy" src="imgs/media.png" style="width: 40px;" item-start /><span>Các file media đã có:\n        {{aboutUsInput.mediaList.length}}</span>\n      <ion-icon item-end style="font-weight: 1.5em;" name="ios-arrow-forward"></ion-icon>\n    </ion-item>\n    <ion-item>\n      <ion-label color="primary" stacked>Chọn thêm File Media</ion-label>\n      <ion-input accept="video/*,image/*" id="fileInputId" type="file" (change)="fileChangeListener($event)" multiple>\n      </ion-input>\n    </ion-item>\n    <ion-grid style="padding:10px" *ngIf="mediaListToSend.length!=0">\n      <ion-row *ngFor="let file of mediaListToSend ; let i = index">\n        <ion-col col-1>\n          <ion-icon (click)="removeFileFromList(file.name)" style="font-size: 1.5rem; color: tomato; margin-right:10px"\n            name="md-close">\n          </ion-icon>\n        </ion-col>\n        <ion-col>{{file.name}}</ion-col>\n      </ion-row>\n    </ion-grid>\n    <ion-item>\n      <ion-label fixed>Nội dung <span class="requiredInput">(*)</span></ion-label>\n      <ion-textarea [(ngModel)]="aboutUsInput.detail" rows="5" #aboutusContentInput id="aboutusContentInput"\n        (keyup)="textAreaResize()" placeholder="nhập nội dung..."></ion-textarea>\n    </ion-item>\n  </div>\n\n  <div *ngIf="global.isLogin && editMedia" class="mediaToReorderWrapper">\n    <ion-item style="margin-bottom: 15px">\n      <button (click)="deleteModification(null)" ion-button color="danger" item-start>Xoá Tất Cả</button>\n      <button (click)="confirmMediaModification()" color="secondary" ion-button item-start>Xác Nhận</button>\n      <ion-icon (click)="refreshModification()" item-start style="font-size: 3rem; color: rgb(35, 149, 255);"\n        name="md-refresh"></ion-icon>\n\n      <img loading="lazy" (click)="closeListOfCurrentMedia()" src="imgs/close.png" style="width: 30px;" item-end />\n    </ion-item>\n    <ion-list no-lines reorder="true" (ionItemReorder)="reorderItems($event);">\n      <ion-item class="listOfMediaToReorder" *ngFor="let item of modificationMediaList">\n        <ion-icon (click)="deleteModification(item)" style="font-size: 2rem; color: tomato; margin-right:5%"\n          name="md-close">\n        </ion-icon>\n        <img loading="lazy" *ngIf="!global.isVideoCheck(item)" tabindex="0" class="thumbnail"\n          [src]="sanitizer.bypassSecurityTrustResourceUrl(item)" />\n        <video *ngIf="global.isVideoCheck(item)" class="thumbnail" controls preload="none">\n          <source [src]="sanitizer.bypassSecurityTrustResourceUrl(item)" type="video/mp4">\n        </video>\n      </ion-item>\n    </ion-list>\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\HoangN\Desktop\ionic\vietnamargo\src\pages\admin-aboutus\admin-aboutus.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__providers_firebase_services_aboutusFirebaseController__["a" /* aboutusFirebaseController */],
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__providers_firebase_services_firebase_services__["a" /* FirebaseServicesProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_globalhero_globalhero__["a" /* GlobalheroProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], AdminAboutusPage);
    return AdminAboutusPage;
}());

//# sourceMappingURL=admin-aboutus.js.map

/***/ })

});
//# sourceMappingURL=20.js.map