webpackJsonp([12],{

/***/ 870:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminProductsPageModule", function() { return AdminProductsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__admin_products__ = __webpack_require__(895);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_datatable__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_datatable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AdminProductsPageModule = /** @class */ (function () {
    function AdminProductsPageModule() {
    }
    AdminProductsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__admin_products__["a" /* AdminProductsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__admin_products__["a" /* AdminProductsPage */]),
                __WEBPACK_IMPORTED_MODULE_3_angular2_datatable__["DataTableModule"]
            ],
        })
    ], AdminProductsPageModule);
    return AdminProductsPageModule;
}());

//# sourceMappingURL=admin-products.module.js.map

/***/ }),

/***/ 895:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminProductsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_globalhero_globalhero__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_firebase_services_firebase_services__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_firebase_services_productsFirebaseController__ = __webpack_require__(379);
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
var AdminProductsPage = /** @class */ (function () {
    function AdminProductsPage(productsFirebaseController, sanitizer, alertCtrl, fbservices, global, menuCrtl, navCtrl, navParams) {
        this.productsFirebaseController = productsFirebaseController;
        this.sanitizer = sanitizer;
        this.alertCtrl = alertCtrl;
        this.fbservices = fbservices;
        this.global = global;
        this.menuCrtl = menuCrtl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.addItemGroupDialogInput = {
            groupName: '',
            groupAvatar: '',
            mode: 'create',
            oldAvatar: '',
            oldGroupItem: null
        };
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
            lastUpdated: null,
            groupName: ''
        };
        this.mediaListToSend = [];
        this.addItem = false;
        this.groupManager = false;
        this.listOfNews = [];
        this.listOfNewsGroups = null;
        this.listOfNewsGroupsToDisplay = [];
    }
    AdminProductsPage.prototype.sideMenuTrigger = function () {
        this.menuCrtl.open();
    };
    AdminProductsPage.prototype.openAddItem = function () {
        if (this.listOfNewsGroups.isRequired && this.listOfNewsGroups.data.length == 0)
            this.global.presentToast('Danh m???c n??y y??u c???u ph???i c?? ??t nh???t 1 nh??m s???n ph???m. Xin vui l??ng t???o nh??m tr?????c.');
        else
            this.addItem = true;
    };
    AdminProductsPage.prototype.closeAddItem = function () {
        this.addItem = false;
        this.userInput = {
            shortDescription: '',
            title: '',
            detail: '',
            mediaList: [],
            status: true,
            lastUpdated: null,
            groupName: ''
        };
        this.mediaListToSend = [];
    };
    AdminProductsPage.prototype.textAreaResize = function () {
        var element = this.itemContentInput['_elementRef'].nativeElement.getElementsByClassName("text-input")[0];
        var scrollHeight = element.scrollHeight;
        element.style.height = scrollHeight + 'px';
        this.itemContentInput['_elementRef'].nativeElement.style.height = (scrollHeight + 16) + 'px';
    };
    AdminProductsPage.prototype.fileChangeListener = function ($event) {
        this.mediaListToSend = this.mediaListToSend.concat(this.fileListToArray($event.target.files));
        var fileinput = document.getElementById("fileInputId");
        fileinput.value = null;
        console.log(this.mediaListToSend);
        if (this.mediaListToSend.length > 10) {
            this.mediaListToSend.length = 10;
            this.global.presentToast('B???n ch??? ???????c d??ng t???i ??a 10 file media.');
        }
    };
    AdminProductsPage.prototype.fileListToArray = function (fileList) {
        return Array.prototype.slice.call(fileList);
    };
    AdminProductsPage.prototype.removeFileFromList = function (filename) {
        for (var i = this.mediaListToSend.length - 1; i >= 0; i--) {
            if (this.mediaListToSend[i].name === filename) {
                this.mediaListToSend.splice(i, 1);
            }
        }
    };
    AdminProductsPage.prototype.validateInput = function () {
        var _this = this;
        var inputValidate = true;
        if (this.listOfNewsGroups != null && this.listOfNewsGroups.isRequired) {
            if (this.userInput.title == '' || this.userInput.detail == '' || this.userInput.groupName == '') {
                this.global.presentToast('C??c tr?????ng b???t bu???c kh??ng th??? b??? tr???ng');
                inputValidate = false;
            }
        }
        else {
            if (this.userInput.title == '' || this.userInput.detail == '') {
                this.global.presentToast('C??c tr?????ng b???t bu???c kh??ng th??? b??? tr???ng');
                inputValidate = false;
            }
        }
        if (this.validateInput) {
            this.global.presentLoading('');
            this.productsFirebaseController.createNews(this.userInput, this.currentChosenCatergory).then(function (res) {
                console.log(res);
                _this.global.dismissLoading();
                _this.global.presentToast('C???p nh???t th??nh c??ng!');
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
                _this.global.presentToast('???? c?? l???i khi k???t n???i v???i h??? th???ng. Vui l??ng th??? l???i sau');
            });
        }
    };
    AdminProductsPage.prototype.mediaUpload = function (newsId) {
        var _this = this;
        this.global.presentLoading('??ang upload c??c file media');
        var promiseList = [];
        for (var _i = 0, _a = this.mediaListToSend; _i < _a.length; _i++) {
            var media = _a[_i];
            promiseList.push(this.fbservices.fbUploadFiles(media, 'news').then(function (res) {
                //url return
                console.log(res);
                //saveurl to news
                _this.productsFirebaseController.addNewsMediaFileURLToDocumentObject(res, _this.currentChosenCatergory, newsId);
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
    AdminProductsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AdminNewsPage');
    };
    AdminProductsPage.prototype.ionViewWillEnter = function () {
        this.getCatergories();
    };
    AdminProductsPage.prototype.getCatergories = function () {
        var _this = this;
        this.currentChosenCatergory = '';
        this.newsCatergories = {
            newsCatergoriesCollectionID: [],
            newsCatergoriesMetadata: []
        };
        this.global.presentLoading('');
        this.productsFirebaseController.getAllNewsCatergoriesMetadata().then(function (res) {
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
    AdminProductsPage.prototype.getNewsOfCatergory = function (catergoryID) {
        var _this = this;
        this.productsFirebaseController.getNewsOfCatergory(catergoryID, null).then(function (res) {
            console.log(res);
            var result = res;
            if (result.hasContent) {
                for (var i = result.data.length - 1; i >= 0; i--) {
                    if (result.data[i].id == 'productGroups') {
                        //????y ko ph???i s???n ph???m m?? l?? nh??m sp.
                        _this.listOfNewsGroups = result.data[i];
                        result.data.splice(i, 1);
                    }
                }
                _this.listOfNews = result.data;
                _this.listOfNewsGroupsToDisplay = [];
                if (_this.listOfNewsGroups.data.length > 0) {
                    for (var _i = 0, _a = _this.listOfNewsGroups.data; _i < _a.length; _i++) {
                        var group = _a[_i];
                        var parsedObj = JSON.parse(group);
                        _this.listOfNewsGroupsToDisplay.push({
                            id: group,
                            groupName: parsedObj.groupName,
                            groupAvatar: parsedObj.groupAvatar
                        });
                    }
                }
                else
                    _this.listOfNewsGroupsToDisplay = [];
                console.log('Danh s??ch products');
                console.log(_this.listOfNews);
                console.log('Danh s??ch products groups ???? parse');
                console.log(_this.listOfNewsGroupsToDisplay);
                console.log('Danh s??ch products groups ch??a parse');
                console.log(_this.listOfNewsGroups);
            }
        });
    };
    AdminProductsPage.prototype.segmentChanged = function (e) {
        this.global.lastChosenCatergory = this.currentChosenCatergory;
        this.getNewsOfCatergory(this.currentChosenCatergory);
    };
    AdminProductsPage.prototype.deleteItem = function (item) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'L??u ??',
            message: 'B???n c?? ch???c ch???n mu???n th???c hi???n l???nh x??a?',
            buttons: [
                {
                    text: 'Kh??ng',
                    role: 'cancel',
                    handler: function () {
                    }
                },
                {
                    text: 'C??',
                    handler: function () {
                        _this.global.presentLoading('');
                        _this.productsFirebaseController.deleteNews(_this.currentChosenCatergory, item.id).then(function (res) {
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
    AdminProductsPage.prototype.editItem = function (item) {
        this.navCtrl.push('AdminProductDetailPage', { currentChosenCatergory: this.currentChosenCatergory, item: item, itemGroup: this.listOfNewsGroupsToDisplay });
    };
    AdminProductsPage.prototype.openAddItemGroupDialog = function (item) {
        this.addItemGroupDialog = document.getElementById('addItemGroupDialog');
        if (item != null) {
            console.log(item);
            //Edit existing group
            this.addItemGroupDialogInput.groupName = item.groupName;
            this.addItemGroupDialogInput.mode = 'edit';
            this.addItemGroupDialogInput.oldAvatar = item.groupAvatar,
                this.addItemGroupDialogInput.oldGroupItem = item.id;
        }
        else {
            //Create new group
            this.addItemGroupDialogInput.mode = 'create';
        }
        this.addItemGroupDialog.showModal();
    };
    AdminProductsPage.prototype.closeAddItemGroupDialog = function () {
        this.addItemGroupDialogInput = {
            groupName: '',
            groupAvatar: '',
            mode: 'create',
            oldAvatar: '',
            oldGroupItem: null
        };
        this.addItemGroupDialog.close();
    };
    AdminProductsPage.prototype.deleteItemGroup = function (group) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'L??u ??',
            message: 'B???n c?? ch???c ch???n mu???n th???c hi???n l???nh x??a?',
            buttons: [
                {
                    text: 'Kh??ng',
                    role: 'cancel',
                    handler: function () {
                    }
                },
                {
                    text: 'C??',
                    handler: function () {
                        _this.global.presentLoading('');
                        var self = _this;
                        _this.productsFirebaseController.deleteExistingItemGroup(_this.currentChosenCatergory, group.id).then(function (res) {
                            _this.global.dismissLoading();
                            _this.getNewsOfCatergory(_this.currentChosenCatergory);
                        }).catch(function (err) {
                            self.global.presentToast('???? c?? l???i x???y ra khi k???t n???i h??? th???ng, xin vui l??ng th??? l???i');
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    AdminProductsPage.prototype.itemGroupAvatarChangeListener = function ($event) {
        this.addItemGroupDialogInput.groupAvatar = this.fileListToArray($event.target.files)[0];
        var fileinput = document.getElementById("itemGroupAvatar");
        fileinput.files = null;
    };
    AdminProductsPage.prototype.addItemGroupConfirm = function () {
        var _this = this;
        if (this.addItemGroupDialogInput.mode == 'create') {
            if (this.addItemGroupDialogInput.groupAvatar == '' || this.addItemGroupDialogInput.groupName == '')
                this.global.presentToast('B???n c???n cung c???p ?????y ????? c??c tr?????ng b???t bu???c.');
            else {
                this.global.presentLoading('');
                this.productsFirebaseController.createNewItemGroups(this.addItemGroupDialogInput.groupAvatar, this.addItemGroupDialogInput.groupName, this.currentChosenCatergory)
                    .then(function (res) {
                    _this.global.dismissLoading();
                    _this.global.presentToast('T???o nh??m th??nh c??ng');
                    _this.closeAddItemGroupDialog();
                    _this.getNewsOfCatergory(_this.currentChosenCatergory);
                })
                    .catch(function (err) {
                    console.log(err);
                    _this.global.dismissLoading();
                    _this.global.presentToast('???? c?? l???i x???y ra khi k???t n???i h??? th???ng, xin vui l??ng th??? l???i');
                });
            }
        }
        else {
            this.global.presentLoading('');
            this.productsFirebaseController.updateExistingItemGroup(this.addItemGroupDialogInput.groupAvatar, this.addItemGroupDialogInput.groupName, this.addItemGroupDialogInput.oldGroupItem, this.currentChosenCatergory)
                .then(function (res) {
                _this.global.dismissLoading();
                _this.global.presentToast('Ch???nh s???a nh??m th??nh c??ng');
                _this.closeAddItemGroupDialog();
                _this.getNewsOfCatergory(_this.currentChosenCatergory);
            })
                .catch(function (err) {
                console.log(err);
                _this.global.dismissLoading();
                _this.global.presentToast('???? c?? l???i x???y ra khi k???t n???i h??? th???ng, xin vui l??ng th??? l???i');
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('itemContentInput'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], AdminProductsPage.prototype, "itemContentInput", void 0);
    AdminProductsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-admin-products',template:/*ion-inline-start:"C:\Users\HoangN\Desktop\ionic\vietnamargo\src\pages\admin-products\admin-products.html"*/'  <ion-header *ngIf="global.isLogin" no-border>\n    <ion-item no-lines>\n      <img loading="lazy" class="sidemenuIcon" item-start src="imgs/sidemenu.png" (click)="sideMenuTrigger()" />\n      S???n Ph???m\n    </ion-item>\n  </ion-header>\n\n<ion-content padding class="adminBG">\n\n  <div *ngIf="!global.isLogin" class="noLoginMessage">\n    <ion-item (click)="goHome()" no-lines text-center text-wrap>\n      <img loading="lazy" style=\'vertical-align:middle; width:30px; margin-right: 15px\' src=\'imgs/home.png\'>\n      <div style=\'vertical-align:middle; display:inline;\'>\n        B???n ch??a ????ng nh???p h??? th???ng. Vui l??ng ????ng nh???p tr?????c khi s??? d???ng t??nh n??ng n??y.</div>\n    </ion-item>\n  </div>\n\n\n  <div *ngIf="global.isLogin && !addItem" class="dataGrid">\n    <div\n      *ngIf="newsCatergories.newsCatergoriesCollectionID.length>0 && newsCatergories.newsCatergoriesMetadata.length>0">\n      <ion-segment [(ngModel)]="currentChosenCatergory" color="primary" (ionChange)="segmentChanged($event)">\n        <ion-segment-button *ngFor="let catergory of newsCatergories.newsCatergoriesMetadata; let i=index"\n          value="{{newsCatergories.newsCatergoriesCollectionID[i]}}">\n          <h4 style="padding-top:4px; font-weight: bold;"><img loading="lazy" class="segmentIcon"\n              *ngIf="currentChosenCatergory==newsCatergories.newsCatergoriesCollectionID[i]"\n              src="imgs/tick.png" />{{newsCatergories.newsCatergoriesMetadata[i]}}</h4>\n        </ion-segment-button>\n      </ion-segment>\n\n      <ion-item no-lines>\n        <div *ngIf="listOfNewsGroups!=null && listOfNewsGroups.isRequired" (click)="openAddItemGroupDialog(null)"\n          class="actionBtn" item-end><img loading="lazy" style="width:30px;" src="imgs/add.png" /> Th??m Nh??m S???n Ph???m\n        </div>\n        <div (click)="openAddItem()" class="actionBtn" item-end><img loading="lazy" style="width:30px;"\n            src="imgs/add.png" /> Th??m S???n Ph???m</div>\n      </ion-item>\n\n      <dialog id="addItemGroupDialog">\n        <h2 *ngIf="addItemGroupDialogInput.mode==\'create\'" style="margin-bottom:10px">Th??m nh??m s???n Ph???m</h2>\n        <h2 *ngIf="addItemGroupDialogInput.mode==\'edit\'" style="margin-bottom:10px"><img style="height: 50px;" [src]="addItemGroupDialogInput.oldAvatar"/>\n          Ch???nh s???a nh??m s???n Ph???m</h2>\n\n        <ion-item>\n          <ion-label fixed>T??n nh??m <span class="requiredInput">(*)</span></ion-label>\n          <ion-textarea [(ngModel)]="addItemGroupDialogInput.groupName" maxlength="60" placeholder="nh???p t??n..."></ion-textarea>\n        </ion-item>\n        <ion-item>\n          <ion-label color="primary" stacked>???nh ?????i di???n <span class="requiredInput">(*)</span></ion-label>\n          <ion-input accept="image/*" id="itemGroupAvatar" type="file" (change)="itemGroupAvatarChangeListener($event)" multiple>\n          </ion-input>\n        </ion-item>\n        <ion-item>\n          <button style="padding:15px" ion-button color="danger" round="true" (click)="closeAddItemGroupDialog()">H???y</button>\n          <button style="padding:15px"  ion-button round="true" (click)="addItemGroupConfirm()">?????ng ??</button>\n         </ion-item>\n        </dialog> \n\n      <div *ngIf="listOfNewsGroups!=null && listOfNewsGroups.isRequired" class="newsGroupsManagerWrapper">\n        <ion-item no-lines>\n          <span style="padding: 7px;\n        border: solid 2px #ffc98a;\n        display: inline-block; width:100%;\n        border-radius: 15px;">Nh??m S???n Ph???m</span>\n        </ion-item>\n        <div class="row margintop20px paddingtopbottom15px whitebackground">\n          <div class="col-12">\n            <div class="table-responsive">\n              <table class="table table-striped table-hover table-bordered " [mfData]="listOfNewsGroupsToDisplay"\n                #mf="mfDataTable" [mfRowsOnPage]="10">\n                <thead>\n                  <tr>\n                    <th style="width:40px;max-width:40px;">#</th>\n                    <th>\n                      <mfDefaultSorter by="groupName">T??n nh??m</mfDefaultSorter>\n                    </th>\n                    <th>\n                      ???nh ?????i di???n\n                    </th>\n                    <th>\n                    </th>\n                  </tr>\n                </thead>\n                <tbody *ngIf="listOfNewsGroupsToDisplay.length>0">\n                  <ng-container *ngFor="let item of mf.data; let i = index;">\n                    <tr>\n                      <td style="vertical-align: middle;" scope="row">{{i+1}}</td>\n                      <td style="vertical-align: middle;">{{item.groupName}}</td>\n                      <td style="vertical-align: middle;"><img style="height:30px" [src]="item.groupAvatar"/></td>\n                      <td>\n                        <ion-item style="background:transparent" no-padding no-lines text-center>\n                          <img loading="lazy" (click)="openAddItemGroupDialog(item)" src="imgs/edit.png"\n                            style="width:20px; margin-right:10%" />\n                          <img loading="lazy" (click)="deleteItemGroup(item)" src="imgs/delete.png"\n                            style="width:20px" />\n                        </ion-item>\n                      </td>\n                    </tr>\n                  </ng-container>\n                </tbody>\n                <tfoot>\n                  <tr>\n                    <td colspan="4">\n                      <mfBootstrapPaginator></mfBootstrapPaginator>\n                    </td>\n                  </tr>\n                </tfoot>\n              </table>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <ion-item no-lines>\n        <span style="padding: 7px;\n        border: solid 2px #ffc98a;\n        display: inline-block; width:100%;\n        border-radius: 15px;">S???n Ph???m</span>\n      </ion-item>\n      <div class="row margintop20px paddingtopbottom15px whitebackground">\n        <div class="col-12">\n          <div class="table-responsive">\n            <table class="table table-striped table-hover table-bordered " [mfData]="listOfNews" #mf="mfDataTable"\n              [mfRowsOnPage]="10">\n              <thead>\n                <tr>\n                  <th style="width:40px;max-width:40px;">#</th>\n                  <th>\n                    <mfDefaultSorter by="title">Ti??u ?????</mfDefaultSorter>\n                  </th>\n                  <th *ngIf="listOfNewsGroups!=null && listOfNewsGroups.isRequired">\n                    <mfDefaultSorter by="groupName">Nh??m</mfDefaultSorter>\n                  </th>\n                  <th>\n                    <mfDefaultSorter by="shortDescription">M?? t??? ng???n</mfDefaultSorter>\n                  </th>\n                  <th>\n                    <mfDefaultSorter by="status">Tr???ng th??i</mfDefaultSorter>\n                  </th>\n                  <th>\n                    <mfDefaultSorter by="lastUpdated.date">Ng??y c???p nh???t</mfDefaultSorter>\n                  </th>\n                  <th style="width:10%">                 \n                  </th> \n                </tr>\n              </thead>\n              <tbody>\n                <ng-container *ngFor="let item of mf.data; let i = index;">\n                  <tr *ngIf="item.title!=null">\n                    <td style="vertical-align: middle;" scope="row">{{i+1}}</td>\n                    <td style="vertical-align: middle;">{{item.title}}</td>\n                    <td *ngIf="listOfNewsGroups!=null && listOfNewsGroups.isRequired" style="vertical-align: middle;">{{item.groupName}}</td>\n                    <td style="vertical-align: middle;">{{item.shortDescription}}</td>\n                    <td *ngIf="item.status" style="vertical-align: middle;">xu???t b???n</td>\n                    <td *ngIf="!item.status" style="vertical-align: middle;">kh??ng xu???t b???n</td>\n                    <td style="vertical-align: middle;">{{item.lastUpdated.date}}</td>\n                    <td>\n                      <ion-item style="background:transparent" no-padding no-lines text-center>\n                        <img loading="lazy" (click)="editItem(item)" src="imgs/edit.png"\n                          style="width:20px; margin-right:10%" />\n                        <img loading="lazy" (click)="deleteItem(item)" src="imgs/delete.png" style="width:20px" />\n                      </ion-item>\n                    </td>\n                  </tr>\n                </ng-container>\n              </tbody>\n              <tfoot>\n                <tr>\n                  <td colspan="4">\n                    <mfBootstrapPaginator></mfBootstrapPaginator>\n                  </td>\n                </tr>\n              </tfoot>\n            </table>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div *ngIf="global.isLogin && addItem" class="addItemWrapper">\n    <div style="width: 100%; margin-bottom: 8%;">\n      <img loading="lazy" (click)="validateInput()" src="imgs/send.png" style="float:right; width:40px" />\n      <img loading="lazy" (click)="closeAddItem()" src="imgs/close.png" style="width: 30px; float:left" />\n    </div>\n\n    <ion-item>\n      <ion-label fixed>Ti??u ????? <span class="requiredInput">(*)</span></ion-label>\n      <ion-textarea [(ngModel)]="userInput.title" maxlength="60" placeholder="nh???p ti??u ?????..."></ion-textarea>\n    </ion-item>\n    <ion-item>\n      <ion-label fixed>M?? t??? ng???n</ion-label>\n      <ion-textarea [(ngModel)]="userInput.shortDescription" maxlength="120" placeholder="nh???p m?? t???...">\n      </ion-textarea>\n    </ion-item>\n    <ion-item  *ngIf="this.listOfNewsGroups!=null && this.listOfNewsGroups.isRequired">\n      <ion-label>Nh??m s???n ph???m <span class="requiredInput">(*)</span></ion-label>\n      <ion-select [(ngModel)]="userInput.groupName">\n        <ion-option *ngFor="let group of listOfNewsGroupsToDisplay" [value]="group.groupName">{{group.groupName}}</ion-option>       \n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label style="color:#999">Trang th??i xu???t b???n</ion-label>\n      <ion-toggle [(ngModel)]="userInput.status"></ion-toggle>\n    </ion-item>\n    <ion-item>\n      <ion-label color="primary" stacked>Ch???n th??m File Media</ion-label>\n      <ion-input accept="video/*,image/*" id="fileInputId" type="file" (change)="fileChangeListener($event)" multiple>\n      </ion-input>\n    </ion-item>\n    <ion-grid style="padding:10px" *ngIf="mediaListToSend.length!=0">\n      <ion-row *ngFor="let file of mediaListToSend ; let i = index">\n        <ion-col col-1>\n          <ion-icon (click)="removeFileFromList(file.name)" style="font-size: 1.5rem; color: tomato; margin-right:10px"\n            name="md-close">\n          </ion-icon>\n        </ion-col>\n        <ion-col>{{file.name}}</ion-col>\n      </ion-row>\n    </ion-grid>\n    <ion-item>\n      <ion-label fixed>N???i dung <span class="requiredInput">(*)</span></ion-label>\n      <ion-textarea [(ngModel)]="userInput.detail" rows="5" #itemContentInput id="itemContentInput"\n        (keyup)="textAreaResize()" placeholder="nh???p n???i dung..."></ion-textarea>\n    </ion-item>\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\HoangN\Desktop\ionic\vietnamargo\src\pages\admin-products\admin-products.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__providers_firebase_services_productsFirebaseController__["a" /* productsFirebaseController */],
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__providers_firebase_services_firebase_services__["a" /* FirebaseServicesProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_globalhero_globalhero__["a" /* GlobalheroProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], AdminProductsPage);
    return AdminProductsPage;
}());

//# sourceMappingURL=admin-products.js.map

/***/ })

});
//# sourceMappingURL=12.js.map