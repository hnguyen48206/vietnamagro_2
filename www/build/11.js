webpackJsonp([11],{

/***/ 857:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminSupplierDetailPageModule", function() { return AdminSupplierDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__admin_supplier_detail__ = __webpack_require__(881);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AdminSupplierDetailPageModule = /** @class */ (function () {
    function AdminSupplierDetailPageModule() {
    }
    AdminSupplierDetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__admin_supplier_detail__["a" /* AdminSupplierDetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__admin_supplier_detail__["a" /* AdminSupplierDetailPage */]),
            ],
        })
    ], AdminSupplierDetailPageModule);
    return AdminSupplierDetailPageModule;
}());

//# sourceMappingURL=admin-supplier-detail.module.js.map

/***/ }),

/***/ 881:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminSupplierDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_globalhero_globalhero__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_firebase_services_firebase_services__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_firebase_services_supplierFirebaseController__ = __webpack_require__(385);
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
var AdminSupplierDetailPage = /** @class */ (function () {
    function AdminSupplierDetailPage(supplierFirebaseController, sanitizer, alertCtrl, fbservices, global, menuCrtl, navCtrl, navParams) {
        this.supplierFirebaseController = supplierFirebaseController;
        this.sanitizer = sanitizer;
        this.alertCtrl = alertCtrl;
        this.fbservices = fbservices;
        this.global = global;
        this.menuCrtl = menuCrtl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.itemInput = {
            shortDescription: '',
            title: '',
            detail: '',
            mediaList: [],
            status: true,
            lastUpdated: null,
            id: null
        };
        this.originalItemInput = null;
        this.modificationMediaList = [];
        this.currentChosenCatergory = null;
        /////////////////////////////////////////////////////////////////
        this.mediaListToSend = [];
        this.editMedia = false;
    }
    AdminSupplierDetailPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    AdminSupplierDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AdminAboutusPage');
    };
    AdminSupplierDetailPage.prototype.ionViewWillEnter = function () {
        if (this.navParams.get('item') == null)
            this.navCtrl.popToRoot();
        else {
            this.originalItemInput = this.navParams.get('item');
            this.itemInput = this.originalItemInput;
            this.currentChosenCatergory = this.navParams.get('currentChosenCatergory');
        }
    };
    AdminSupplierDetailPage.prototype.textAreaResize = function () {
        var element = this.itemContentInput['_elementRef'].nativeElement.getElementsByClassName("text-input")[0];
        var scrollHeight = element.scrollHeight;
        element.style.height = scrollHeight + 'px';
        this.itemContentInput['_elementRef'].nativeElement.style.height = (scrollHeight + 16) + 'px';
    };
    AdminSupplierDetailPage.prototype.fileChangeListener = function ($event) {
        this.mediaListToSend = this.mediaListToSend.concat(this.fileListToArray($event.target.files));
        var fileinput = document.getElementById("fileInputId");
        fileinput.value = null;
        console.log(this.mediaListToSend);
        if (this.mediaListToSend.length > 10) {
            this.mediaListToSend.length = 10;
            this.global.presentToast('B???n ch??? ???????c d??ng t???i ??a 10 file media.');
        }
    };
    AdminSupplierDetailPage.prototype.fileListToArray = function (fileList) {
        return Array.prototype.slice.call(fileList);
    };
    AdminSupplierDetailPage.prototype.removeFileFromList = function (filename) {
        for (var i = this.mediaListToSend.length - 1; i >= 0; i--) {
            if (this.mediaListToSend[i].name === filename) {
                this.mediaListToSend.splice(i, 1);
            }
        }
    };
    AdminSupplierDetailPage.prototype.validateInput = function () {
        var _this = this;
        if (this.itemInput.title == '' || this.itemInput.detail == '')
            this.global.presentToast('C??c tr?????ng b???t bu???c kh??ng th??? b??? tr???ng');
        else {
            this.supplierFirebaseController.updateNews(this.currentChosenCatergory, this.itemInput.id, this.itemInput).then(function () {
                _this.global.dismissLoading();
                //update media if any
                if (_this.mediaListToSend.length > 0)
                    _this.mediaUpload();
                else
                    _this.navCtrl.pop();
            }).catch(function (err) {
                _this.global.dismissLoading();
            });
        }
    };
    AdminSupplierDetailPage.prototype.mediaUpload = function () {
        var _this = this;
        this.global.presentLoading('??ang upload c??c file media');
        var promiseList = [];
        for (var _i = 0, _a = this.mediaListToSend; _i < _a.length; _i++) {
            var media = _a[_i];
            promiseList.push(this.fbservices.fbUploadFiles(media, 'news').then(function (res) {
                //url return
                console.log(res);
                //saveurl to news
                _this.supplierFirebaseController.addNewsMediaFileURLToDocumentObject(res, _this.currentChosenCatergory, _this.itemInput.id);
            }).catch(function (err) {
                console.log(err);
            }));
        }
        var self = this;
        Promise.all(promiseList).then(function (values) {
            console.log('All upload completed');
            setTimeout(function () {
                self.global.dismissLoading();
            }, 1000);
            self.mediaListToSend = [];
        })
            .catch(function (err) {
            self.global.dismissLoading();
        });
    };
    AdminSupplierDetailPage.prototype.openListOfCurrentMedia = function () {
        this.modificationMediaList = Array.from(this.originalItemInput.mediaList);
        this.editMedia = true;
    };
    AdminSupplierDetailPage.prototype.closeListOfCurrentMedia = function () {
        this.editMedia = false;
        this.modificationMediaList = [];
    };
    AdminSupplierDetailPage.prototype.refreshModification = function () {
        this.modificationMediaList = Array.from(this.originalItemInput.mediaList);
    };
    AdminSupplierDetailPage.prototype.deleteModification = function (item) {
        if (item == null)
            this.modificationMediaList = [];
        else
            for (var i = this.modificationMediaList.length - 1; i >= 0; i--) {
                if (this.modificationMediaList[i] === item) {
                    this.modificationMediaList.splice(i, 1);
                }
            }
    };
    AdminSupplierDetailPage.prototype.reorderItems = function (indexes) {
        var element = this.modificationMediaList[indexes.from];
        this.modificationMediaList.splice(indexes.from, 1);
        this.modificationMediaList.splice(indexes.to, 0, element);
    };
    AdminSupplierDetailPage.prototype.confirmMediaModification = function () {
        var _this = this;
        if (JSON.stringify(this.originalItemInput.mediaList) == JSON.stringify(this.modificationMediaList)) {
            //There is no modification, just exit
            this.closeListOfCurrentMedia();
        }
        else {
            var alert_1 = this.alertCtrl.create({
                title: 'L??u ??',
                message: 'B???n c?? ch???c ch???n mu???n c???p nh???t thay ?????i?',
                buttons: [
                    {
                        text: 'Kh??ng',
                        role: 'cancel',
                        handler: function () {
                            alert_1.dismiss();
                        }
                    },
                    {
                        text: 'C??',
                        handler: function () {
                            _this.global.presentLoading('Sao l??u thay ?????i');
                            var filesToDelete = _this.originalItemInput.mediaList.filter(function (x) { return _this.modificationMediaList.indexOf(x) === -1; });
                            console.log(filesToDelete);
                            var promiseList = [];
                            for (var _i = 0, filesToDelete_1 = filesToDelete; _i < filesToDelete_1.length; _i++) {
                                var file = filesToDelete_1[_i];
                                //delete files after remove during modification
                                promiseList.push(_this.fbservices.deleteFileFromfbStorage(file));
                            }
                            promiseList.push(_this.supplierFirebaseController.setMediaArrayToDocument(_this.modificationMediaList, _this.currentChosenCatergory, _this.itemInput.id));
                            var self = _this;
                            Promise.all(promiseList).then(function (values) {
                                self.global.dismissLoading();
                                self.global.presentToast('Sao l??u th??nh c??ng');
                                self.closeListOfCurrentMedia();
                                self.navCtrl.pop();
                            })
                                .catch(function (err) {
                                self.global.dismissLoading();
                                self.global.presentToast('???? c?? l???i khi k???t n???i v???i h??? th???ng. Vui l??ng th??? l???i sau');
                            });
                        }
                    }
                ]
            });
            alert_1.present();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('itemContentInput'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], AdminSupplierDetailPage.prototype, "itemContentInput", void 0);
    AdminSupplierDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-admin-supplier-detail',template:/*ion-inline-start:"C:\Users\HoangN\Desktop\ionic\vietnamargo\src\pages\admin-supplier-detail\admin-supplier-detail.html"*/'<ion-header no-border *ngIf="global.isLogin">\n    <ion-item no-lines>\n      <img loading="lazy" class="sidemenuIcon" item-start src="imgs/back.png" (click)="goBack()" />\n      Ch???nh s???a nh?? cung c???p\n      </ion-item>\n</ion-header>\n\n<ion-content padding class="adminBG">\n  <div *ngIf="!global.isLogin" class="noLoginMessage">\n    <ion-item (click)="goHome()" no-lines text-center text-wrap>\n      <img loading="lazy" style=\'vertical-align:middle; width:30px; margin-right: 15px\' src=\'imgs/home.png\'>\n      <div style=\'vertical-align:middle; display:inline;\'>\n        B???n ch??a ????ng nh???p h??? th???ng. Vui l??ng ????ng nh???p tr?????c khi s??? d???ng t??nh n??ng n??y.</div>\n    </ion-item>\n  </div>\n\n  <div *ngIf="global.isLogin && !editMedia" class="editItemWrapper">\n    <img loading="lazy" (click)="validateInput()" src="imgs/send.png" style="float:right; width:40px" />\n    <ion-item>\n      <ion-label fixed>Ti??u ????? <span class="requiredInput">(*)</span></ion-label>\n      <ion-textarea [(ngModel)]="itemInput.title" maxlength="60" placeholder="nh???p ti??u ?????..."></ion-textarea>\n    </ion-item>\n    <ion-item>\n      <ion-label fixed>M?? t??? ng???n</ion-label>\n      <ion-textarea [(ngModel)]="itemInput.shortDescription" maxlength="120" placeholder="nh???p m?? t???...">\n      </ion-textarea>\n    </ion-item>\n    <ion-item>\n      <ion-label style="color:#999">Trang th??i xu???t b???n</ion-label>\n      <ion-toggle [(ngModel)]="itemInput.status"></ion-toggle>\n    </ion-item>\n    <ion-item *ngIf="itemInput.mediaList.length!=0" (click)="openListOfCurrentMedia()">\n      <img loading="lazy" src="imgs/media.png" style="width: 40px;" item-start /><span>C??c file media ???? c??:\n        {{itemInput.mediaList.length}}</span>\n      <ion-icon item-end style="font-weight: 1.5em;" name="ios-arrow-forward"></ion-icon>\n    </ion-item>\n    <ion-item>\n      <ion-label color="primary" stacked>Ch???n th??m File Media</ion-label>\n      <ion-input accept="video/*,image/*" id="fileInputId" type="file" (change)="fileChangeListener($event)" multiple>\n      </ion-input>\n    </ion-item>\n    <ion-grid style="padding:10px" *ngIf="mediaListToSend.length!=0">\n      <ion-row *ngFor="let file of mediaListToSend ; let i = index">\n        <ion-col col-1>\n          <ion-icon (click)="removeFileFromList(file.name)" style="font-size: 1.5rem; color: tomato; margin-right:10px"\n            name="md-close">\n          </ion-icon>\n        </ion-col>\n        <ion-col>{{file.name}}</ion-col>\n      </ion-row>\n    </ion-grid>\n    <ion-item>\n      <ion-label fixed>N???i dung <span class="requiredInput">(*)</span></ion-label>\n      <ion-textarea [(ngModel)]="itemInput.detail" rows="5" #aboutusContentInput id="itemContentInput"\n        (keyup)="textAreaResize()" placeholder="nh???p n???i dung..."></ion-textarea>\n    </ion-item>\n  </div>\n\n  <div *ngIf="global.isLogin && editMedia" class="mediaToReorderWrapper">\n    <ion-item style="margin-bottom: 15px">\n      <button (click)="deleteModification(null)" ion-button color="danger" item-start>Xo?? T???t C???</button>\n      <button (click)="confirmMediaModification()" color="secondary" ion-button item-start>X??c Nh???n</button>\n      <ion-icon (click)="refreshModification()" item-start style="font-size: 3rem; color: rgb(35, 149, 255);"\n        name="md-refresh"></ion-icon>\n\n      <img loading="lazy" (click)="closeListOfCurrentMedia()" src="imgs/close.png" style="width: 30px;" item-end />\n    </ion-item>\n    <ion-list no-lines reorder="true" (ionItemReorder)="reorderItems($event);">\n      <ion-item class="listOfMediaToReorder" *ngFor="let item of modificationMediaList">\n        <ion-icon (click)="deleteModification(item)" style="font-size: 2rem; color: tomato; margin-right:5%"\n          name="md-close">\n        </ion-icon>\n        <img loading="lazy" *ngIf="!global.isVideoCheck(item)" tabindex="0" class="thumbnail"\n          [src]="sanitizer.bypassSecurityTrustResourceUrl(item)" />\n        <video *ngIf="global.isVideoCheck(item)" class="thumbnail" controls preload="none">\n          <source [src]="sanitizer.bypassSecurityTrustResourceUrl(item)" type="video/mp4">\n        </video>\n      </ion-item>\n    </ion-list>\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\HoangN\Desktop\ionic\vietnamargo\src\pages\admin-supplier-detail\admin-supplier-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__providers_firebase_services_supplierFirebaseController__["a" /* supplierFirebaseController */],
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__providers_firebase_services_firebase_services__["a" /* FirebaseServicesProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_globalhero_globalhero__["a" /* GlobalheroProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], AdminSupplierDetailPage);
    return AdminSupplierDetailPage;
}());

//# sourceMappingURL=admin-supplier-detail.js.map

/***/ })

});
//# sourceMappingURL=11.js.map