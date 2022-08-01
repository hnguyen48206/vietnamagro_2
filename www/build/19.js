webpackJsonp([19],{

/***/ 850:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminContactPageModule", function() { return AdminContactPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__admin_contact__ = __webpack_require__(874);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AdminContactPageModule = /** @class */ (function () {
    function AdminContactPageModule() {
    }
    AdminContactPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__admin_contact__["a" /* AdminContactPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__admin_contact__["a" /* AdminContactPage */]),
            ],
        })
    ], AdminContactPageModule);
    return AdminContactPageModule;
}());

//# sourceMappingURL=admin-contact.module.js.map

/***/ }),

/***/ 874:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_globalhero_globalhero__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_firebase_services_firebase_services__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_firebase_services_contactFirebaseController__ = __webpack_require__(380);
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
var AdminContactPage = /** @class */ (function () {
    function AdminContactPage(contactFirebaseController, sanitizer, alertCtrl, fbservices, global, menuCrtl, navCtrl, navParams) {
        this.contactFirebaseController = contactFirebaseController;
        this.sanitizer = sanitizer;
        this.alertCtrl = alertCtrl;
        this.fbservices = fbservices;
        this.global = global;
        this.menuCrtl = menuCrtl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.originalContactDetail = null;
        this.contactDetail = {
            companyName: '',
            address: '',
            phone: '',
            email: '',
            website: ''
        };
    }
    AdminContactPage.prototype.sideMenuTrigger = function () {
        this.menuCrtl.open();
    };
    AdminContactPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AdminContactPage');
    };
    AdminContactPage.prototype.ionViewWillEnter = function () {
        this.getCurrentContact();
    };
    AdminContactPage.prototype.getCurrentContact = function () {
        var _this = this;
        this.global.presentLoading('');
        this.contactFirebaseController.getContact().then(function (res) {
            _this.global.dismissLoading();
            console.log(res);
            var result = res;
            if (result.hasContent) {
                _this.originalContactDetail = result.data,
                    _this.contactDetail = _this.originalContactDetail;
            }
        }).catch(function (err) {
            _this.global.dismissLoading();
        });
    };
    AdminContactPage.prototype.validateInput = function () {
        if (this.contactDetail.companyName == '' || this.contactDetail.phone == '' || this.contactDetail.email == '' || this.contactDetail.website == '')
            this.global.presentToast('Các trường bắt buộc không thể bỏ trống');
        else if (!this.global.emailValidator(this.contactDetail.email))
            this.global.presentToast('Định dạng email không hợp lệ, vui lòng kiểm tra lại');
        else
            this.createUpdateContact();
    };
    AdminContactPage.prototype.createUpdateContact = function () {
        var _this = this;
        this.global.presentLoading('');
        if (this.originalContactDetail == null) {
            this.contactFirebaseController.createContact(this.contactDetail).then(function (res) {
                console.log(res);
                _this.contactDetail['id'] = res;
                _this.originalContactDetail = _this.contactDetail;
                _this.global.dismissLoading();
                _this.global.presentToast('Cập nhật thành công!');
            })
                .catch(function (err) {
                console.log(err);
                _this.global.dismissLoading();
                _this.global.presentToast('Đã có lỗi khi kết nối với hệ thống. Vui lòng thử lại sau');
            });
        }
        else {
            //Update old contact
            this.contactFirebaseController.updateContact(this.contactDetail).then(function () {
                _this.global.dismissLoading();
            }).catch(function (err) {
                _this.global.dismissLoading();
            });
        }
    };
    AdminContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-admin-contact',template:/*ion-inline-start:"C:\Users\HoangN\Downloads\vietnamargo_final\vietnamargo\src\pages\admin-contact\admin-contact.html"*/'  <ion-header *ngIf="global.isLogin" no-border>\n    <ion-item no-lines>\n      <img loading="lazy" class="sidemenuIcon" item-start src="imgs/sidemenu.png" (click)="sideMenuTrigger()" />\n      About Us\n    </ion-item>\n  </ion-header>\n\n<ion-content padding class="adminBG">\n  <div *ngIf="!global.isLogin" class="noLoginMessage">\n    <ion-item (click)="goHome()" no-lines text-center text-wrap>\n      <img loading="lazy" style=\'vertical-align:middle; width:30px; margin-right: 15px\' src=\'imgs/home.png\'>\n      <div style=\'vertical-align:middle; display:inline;\'>\n        Bạn chưa đăng nhập hệ thống. Vui lòng đăng nhập trước khi sử dụng tính năng này.</div>\n    </ion-item>\n  </div>\n\n  <div *ngIf="global.isLogin" class="contactWrapper">\n    <img loading="lazy" (click)="validateInput()" src="imgs/send.png" style="float:right; width:40px" />\n    <ion-item>\n      <ion-label fixed>Tên cty <span class="requiredInput">(*)</span></ion-label>\n      <ion-textarea [(ngModel)]="contactDetail.companyName" maxlength="60" placeholder="nhập tên công ty..."></ion-textarea>\n    </ion-item>\n    <ion-item>\n      <ion-label fixed>Địa chỉ</ion-label>\n      <ion-textarea [(ngModel)]="contactDetail.address" maxlength="60" placeholder="nhập địa chỉ...">\n      </ion-textarea>\n    </ion-item>\n    <ion-item>\n      <ion-label fixed>Điện thoại <span class="requiredInput">(*)</span></ion-label>\n      <ion-input [(ngModel)]="contactDetail.phone" type="number" placeholder="nhập số điện thoại..."></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label fixed>Email <span class="requiredInput">(*)</span></ion-label>\n      <ion-input [(ngModel)]="contactDetail.email" type="email" placeholder="nhập email..."></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label fixed>Webiste <span class="requiredInput">(*)</span></ion-label>\n      <ion-input [(ngModel)]="contactDetail.website" type="text" placeholder="nhập website..."></ion-input>\n    </ion-item>\n  \n  </div>\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\HoangN\Downloads\vietnamargo_final\vietnamargo\src\pages\admin-contact\admin-contact.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__providers_firebase_services_contactFirebaseController__["a" /* contactFirebaseController */],
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__providers_firebase_services_firebase_services__["a" /* FirebaseServicesProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_globalhero_globalhero__["a" /* GlobalheroProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], AdminContactPage);
    return AdminContactPage;
}());

//# sourceMappingURL=admin-contact.js.map

/***/ })

});
//# sourceMappingURL=19.js.map