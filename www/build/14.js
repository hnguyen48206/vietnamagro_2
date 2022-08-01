webpackJsonp([14],{

/***/ 855:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminProcessPageModule", function() { return AdminProcessPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__admin_process__ = __webpack_require__(879);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_datatable__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_datatable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AdminProcessPageModule = /** @class */ (function () {
    function AdminProcessPageModule() {
    }
    AdminProcessPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__admin_process__["a" /* AdminProcessPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__admin_process__["a" /* AdminProcessPage */]),
                __WEBPACK_IMPORTED_MODULE_3_angular2_datatable__["DataTableModule"]
            ],
        })
    ], AdminProcessPageModule);
    return AdminProcessPageModule;
}());

//# sourceMappingURL=admin-process.module.js.map

/***/ }),

/***/ 879:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminProcessPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_globalhero_globalhero__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_firebase_services_firebase_services__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_firebase_services_processFirebaseController__ = __webpack_require__(383);
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
 * Generated class for the AdminNewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AdminProcessPage = /** @class */ (function () {
    function AdminProcessPage(processFirebaseController, sanitizer, alertCtrl, fbservices, global, menuCrtl, navCtrl, navParams) {
        this.processFirebaseController = processFirebaseController;
        this.sanitizer = sanitizer;
        this.alertCtrl = alertCtrl;
        this.fbservices = fbservices;
        this.global = global;
        this.menuCrtl = menuCrtl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.currentChosenCatergory = '';
        this.newsCatergories = {
            newsCatergoriesCollectionID: [],
            newsCatergoriesMetadata: []
        };
        this.userInput = {
            shortDescription: '',
            title: '',
            detail: '',
            mediaList: [],
            status: true,
            lastUpdated: null
        };
        this.mediaListToSend = [];
        this.addItem = false;
        this.listOfNews = [];
    }
    AdminProcessPage.prototype.sideMenuTrigger = function () {
        this.menuCrtl.open();
    };
    AdminProcessPage.prototype.openAddItem = function () {
        if (this.listOfNews.length == 1)
            this.global.presentToast('Bạn chỉ có thể tạo 1 quy trình cho 1 loại sản phẩm. Vui lòng sử dụng tính năng edit hoặc delete quy trình hiện tại.');
        else
            this.addItem = true;
    };
    AdminProcessPage.prototype.closeAddItem = function () {
        this.addItem = false;
        this.userInput = {
            shortDescription: '',
            title: '',
            detail: '',
            mediaList: [],
            status: true,
            lastUpdated: null
        };
        this.mediaListToSend = [];
    };
    AdminProcessPage.prototype.textAreaResize = function () {
        var element = this.itemContentInput['_elementRef'].nativeElement.getElementsByClassName("text-input")[0];
        var scrollHeight = element.scrollHeight;
        element.style.height = scrollHeight + 'px';
        this.itemContentInput['_elementRef'].nativeElement.style.height = (scrollHeight + 16) + 'px';
    };
    AdminProcessPage.prototype.fileChangeListener = function ($event) {
        this.mediaListToSend = this.mediaListToSend.concat(this.fileListToArray($event.target.files));
        var fileinput = document.getElementById("fileInputId");
        fileinput.value = null;
        console.log(this.mediaListToSend);
        if (this.mediaListToSend.length > 10) {
            this.mediaListToSend.length = 10;
            this.global.presentToast('Bạn chỉ được dùng tối đa 10 file media.');
        }
    };
    AdminProcessPage.prototype.fileListToArray = function (fileList) {
        return Array.prototype.slice.call(fileList);
    };
    AdminProcessPage.prototype.removeFileFromList = function (filename) {
        for (var i = this.mediaListToSend.length - 1; i >= 0; i--) {
            if (this.mediaListToSend[i].name === filename) {
                this.mediaListToSend.splice(i, 1);
            }
        }
    };
    AdminProcessPage.prototype.validateInput = function () {
        var _this = this;
        if (this.userInput.title == '' || this.userInput.detail == '')
            this.global.presentToast('Các trường bắt buộc không thể bỏ trống');
        else {
            this.global.presentLoading('');
            this.processFirebaseController.createNews(this.userInput, this.currentChosenCatergory).then(function (res) {
                console.log(res);
                _this.global.dismissLoading();
                _this.global.presentToast('Cập nhật thành công!');
                //update media if any
                if (_this.mediaListToSend.length > 0)
                    _this.mediaUpload(res);
                else {
                    _this.closeAddItem();
                    _this.getNewsOfCatergory(_this.currentChosenCatergory);
                }
            })
                .catch(function (err) {
                console.log(err);
                _this.global.dismissLoading();
                _this.global.presentToast('Đã có lỗi khi kết nối với hệ thống. Vui lòng thử lại sau');
            });
        }
    };
    AdminProcessPage.prototype.mediaUpload = function (newsId) {
        var _this = this;
        this.global.presentLoading('Đang upload các file media');
        var promiseList = [];
        for (var _i = 0, _a = this.mediaListToSend; _i < _a.length; _i++) {
            var media = _a[_i];
            promiseList.push(this.fbservices.fbUploadFiles(media, 'news').then(function (res) {
                //url return
                console.log(res);
                //saveurl to news
                _this.processFirebaseController.addNewsMediaFileURLToDocumentObject(res, _this.currentChosenCatergory, newsId);
            }).catch(function (err) {
                console.log(err);
            }));
        }
        var self = this;
        Promise.all(promiseList).then(function (values) {
            console.log('All upload completed');
            setTimeout(function () {
                self.global.dismissLoading();
                self.closeAddItem();
                self.getNewsOfCatergory(self.currentChosenCatergory);
            }, 1000);
            self.mediaListToSend = [];
        })
            .catch(function (err) {
            self.global.dismissLoading();
        });
    };
    AdminProcessPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AdminNewsPage');
    };
    AdminProcessPage.prototype.ionViewWillEnter = function () {
        this.getCatergories();
    };
    AdminProcessPage.prototype.getCatergories = function () {
        var _this = this;
        this.currentChosenCatergory = '';
        this.newsCatergories = {
            newsCatergoriesCollectionID: [],
            newsCatergoriesMetadata: []
        };
        this.global.presentLoading('');
        this.processFirebaseController.getAllNewsCatergoriesMetadata().then(function (res) {
            for (var key in res) {
                if (res.hasOwnProperty(key)) {
                    _this.newsCatergories.newsCatergoriesMetadata.push(res[key]);
                }
            }
            if (_this.currentChosenCatergory == '')
                _this.newsCatergories.newsCatergoriesCollectionID = Object.keys(res);
            if (_this.global.lastChosenCatergory == null)
                _this.currentChosenCatergory = _this.newsCatergories.newsCatergoriesCollectionID[0];
            else
                _this.currentChosenCatergory = _this.global.lastChosenCatergory;
            console.log(_this.newsCatergories);
            _this.global.dismissLoading();
            _this.getNewsOfCatergory(_this.currentChosenCatergory);
        });
    };
    AdminProcessPage.prototype.getNewsOfCatergory = function (catergoryID) {
        var _this = this;
        this.processFirebaseController.getNewsOfCatergory(catergoryID).then(function (res) {
            console.log(res);
            var result = res;
            if (result.hasContent) {
                for (var i = result.data.length - 1; i >= 0; i--) {
                    if (result.data[i].title == null) {
                        result.data.splice(i, 1);
                    }
                }
            }
            _this.listOfNews = result.data;
        });
    };
    AdminProcessPage.prototype.segmentChanged = function (e) {
        this.global.lastChosenCatergory = this.currentChosenCatergory;
        this.getNewsOfCatergory(this.currentChosenCatergory);
    };
    AdminProcessPage.prototype.deleteItem = function (item) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Lưu ý',
            message: 'Bạn có chắc chắn muốn thực hiện lệnh xóa?',
            buttons: [
                {
                    text: 'Không',
                    role: 'cancel',
                    handler: function () {
                    }
                },
                {
                    text: 'Có',
                    handler: function () {
                        _this.global.presentLoading('');
                        _this.processFirebaseController.deleteNews(_this.currentChosenCatergory, item.id).then(function (res) {
                            if (item.mediaList.length > 0) {
                                for (var _i = 0, _a = item.mediaList; _i < _a.length; _i++) {
                                    var media = _a[_i];
                                    _this.fbservices.deleteFileFromfbStorage(media);
                                }
                            }
                            _this.global.dismissLoading();
                            _this.getNewsOfCatergory(_this.currentChosenCatergory);
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    AdminProcessPage.prototype.editItem = function (item) {
        this.navCtrl.push('AdminProcessDetailPage', { currentChosenCatergory: this.currentChosenCatergory, item: item });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('itemContentInput'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], AdminProcessPage.prototype, "itemContentInput", void 0);
    AdminProcessPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-admin-process',template:/*ion-inline-start:"C:\Users\HoangN\Desktop\ionic\vietnamargo\src\pages\admin-process\admin-process.html"*/'  <ion-header *ngIf="global.isLogin" no-border>\n    <ion-item no-lines>\n      <img loading="lazy" class="sidemenuIcon" item-start src="imgs/sidemenu.png" (click)="sideMenuTrigger()" />\n      Quy Trình\n    </ion-item>\n  </ion-header>\n\n<ion-content padding class="adminBG">\n\n  <div *ngIf="!global.isLogin" class="noLoginMessage">\n    <ion-item (click)="goHome()" no-lines text-center text-wrap>\n      <img loading="lazy" style=\'vertical-align:middle; width:30px; margin-right: 15px\' src=\'imgs/home.png\'>\n      <div style=\'vertical-align:middle; display:inline;\'>\n        Bạn chưa đăng nhập hệ thống. Vui lòng đăng nhập trước khi sử dụng tính năng này.</div>\n    </ion-item>\n  </div>\n\n\n  <div *ngIf="global.isLogin && !addItem" class="dataGrid">\n    <div\n      *ngIf="newsCatergories.newsCatergoriesCollectionID.length>0 && newsCatergories.newsCatergoriesMetadata.length>0">\n      <ion-segment [(ngModel)]="currentChosenCatergory" color="primary" (ionChange)="segmentChanged($event)">\n        <ion-segment-button *ngFor="let catergory of newsCatergories.newsCatergoriesMetadata; let i=index"\n          value="{{newsCatergories.newsCatergoriesCollectionID[i]}}">\n          <h4 style="padding-top:4px; font-weight: bold;"><img loading="lazy" class="segmentIcon"\n              *ngIf="currentChosenCatergory==newsCatergories.newsCatergoriesCollectionID[i]"\n              src="imgs/tick.png" />{{newsCatergories.newsCatergoriesMetadata[i]}}</h4>\n        </ion-segment-button>\n      </ion-segment>\n\n      <ion-item>\n        <img loading="lazy" item-end (click)="openAddItem()" style="width:30px;" src="imgs/add.png" />\n      </ion-item>\n\n      \n      <div class="row margintop20px paddingtopbottom15px whitebackground">\n        <div class="col-12">\n          <div class="table-responsive">\n            <table class="table table-striped table-hover table-bordered " [mfData]="listOfNews" #mf="mfDataTable"\n              [mfRowsOnPage]="10">\n              <thead>\n                <tr>\n                  <th style="width:40px;max-width:40px;">#</th>\n                  <th>\n                    <mfDefaultSorter by="title">Tiêu đề</mfDefaultSorter>\n                  </th>\n                  <th>\n                    <mfDefaultSorter by="shortDescription">Mô tả ngắn</mfDefaultSorter>\n                  </th>\n                  <th>\n                    <mfDefaultSorter by="status">Trạng thái</mfDefaultSorter>\n                  </th>\n                  <th>\n                    <mfDefaultSorter by="lastUpdated.date">Ngày cập nhật</mfDefaultSorter>\n                  </th>       \n                  <th style="width:10%">                 \n                  </th>              \n                </tr>\n              </thead>\n              <tbody>\n                <ng-container *ngFor="let item of mf.data; let i = index;">\n                  <tr *ngIf="item.title!=null">\n                    <td style="vertical-align: middle;" scope="row">{{i+1}}</td>\n                    <td style="vertical-align: middle;">{{item.title}}</td>\n                    <td style="vertical-align: middle;">{{item.shortDescription}}</td>\n                    <td *ngIf="item.status" style="vertical-align: middle;">xuất bản</td>\n                    <td *ngIf="!item.status" style="vertical-align: middle;">không xuất bản</td>\n                    <td style="vertical-align: middle;">{{item.lastUpdated.date}}</td>\n                    <td>\n                      <ion-item style="background:transparent" no-padding no-lines text-center>\n                      <img loading="lazy" (click)="editItem(item)" src="imgs/edit.png" style="width:20px; margin-right:10%"/>\n                      <img loading="lazy" (click)="deleteItem(item)" src="imgs/delete.png" style="width:20px"/>\n                    </ion-item>\n                    </td>\n                  </tr>\n                </ng-container>\n              </tbody>\n              <tfoot>\n                <tr>\n                  <td colspan="4">\n                    <mfBootstrapPaginator></mfBootstrapPaginator>\n                  </td>\n                </tr>\n              </tfoot>\n            </table>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div *ngIf="global.isLogin && addItem" class="addItemWrapper">\n    <div style="width: 100%; margin-bottom: 8%;">\n      <img loading="lazy" (click)="validateInput()" src="imgs/send.png" style="float:right; width:40px" />\n      <img loading="lazy" (click)="closeAddItem()" src="imgs/close.png" style="width: 30px; float:left" />\n    </div>\n\n    <ion-item>\n      <ion-label fixed>Tiêu đề <span class="requiredInput">(*)</span></ion-label>\n      <ion-textarea [(ngModel)]="userInput.title" maxlength="60" placeholder="nhập tiêu đề..."></ion-textarea>\n    </ion-item>\n    <ion-item>\n      <ion-label fixed>Mô tả ngắn</ion-label>\n      <ion-textarea [(ngModel)]="userInput.shortDescription" maxlength="120" placeholder="nhập mô tả...">\n      </ion-textarea>\n    </ion-item>\n    <ion-item>\n      <ion-label style="color:#999">Trang thái xuất bản</ion-label>\n      <ion-toggle [(ngModel)]="userInput.status"></ion-toggle>\n    </ion-item>\n    <ion-item>\n      <ion-label color="primary" stacked>Chọn thêm File Media</ion-label>\n      <ion-input accept="video/*,image/*" id="fileInputId" type="file" (change)="fileChangeListener($event)" multiple>\n      </ion-input>\n    </ion-item>\n    <ion-grid style="padding:10px" *ngIf="mediaListToSend.length!=0">\n      <ion-row *ngFor="let file of mediaListToSend ; let i = index">\n        <ion-col col-1>\n          <ion-icon (click)="removeFileFromList(file.name)" style="font-size: 1.5rem; color: tomato; margin-right:10px"\n            name="md-close">\n          </ion-icon>\n        </ion-col>\n        <ion-col>{{file.name}}</ion-col>\n      </ion-row>\n    </ion-grid>\n    <ion-item>\n      <ion-label fixed>Nội dung <span class="requiredInput">(*)</span></ion-label>\n      <ion-textarea [(ngModel)]="userInput.detail" rows="5" #itemContentInput id="itemContentInput"\n        (keyup)="textAreaResize()" placeholder="nhập nội dung..."></ion-textarea>\n    </ion-item>\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\HoangN\Desktop\ionic\vietnamargo\src\pages\admin-process\admin-process.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__providers_firebase_services_processFirebaseController__["a" /* processFirebaseController */],
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__providers_firebase_services_firebase_services__["a" /* FirebaseServicesProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_globalhero_globalhero__["a" /* GlobalheroProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], AdminProcessPage);
    return AdminProcessPage;
}());

//# sourceMappingURL=admin-process.js.map

/***/ })

});
//# sourceMappingURL=14.js.map