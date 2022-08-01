webpackJsonp([8],{

/***/ 859:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsPopoverPageModule", function() { return ContactUsPopoverPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_us_popover__ = __webpack_require__(883);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ContactUsPopoverPageModule = /** @class */ (function () {
    function ContactUsPopoverPageModule() {
    }
    ContactUsPopoverPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__contact_us_popover__["a" /* ContactUsPopoverPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__contact_us_popover__["a" /* ContactUsPopoverPage */]),
            ],
        })
    ], ContactUsPopoverPageModule);
    return ContactUsPopoverPageModule;
}());

//# sourceMappingURL=contact-us-popover.module.js.map

/***/ }),

/***/ 883:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactUsPopoverPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_globalhero_globalhero__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_firebase_services_customerFirebaseController__ = __webpack_require__(384);
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
 * Generated class for the ContactUsPopoverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ContactUsPopoverPage = /** @class */ (function () {
    function ContactUsPopoverPage(global, customerFirebaseController, navCtrl, navParams) {
        this.global = global;
        this.customerFirebaseController = customerFirebaseController;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.contactUsInput = {
            name: '',
            email: '',
            phone: '',
            content: [''],
            status: false,
            lastUpdated: null
        };
    }
    ContactUsPopoverPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomeContactUsPage');
    };
    ContactUsPopoverPage.prototype.ionViewWillEnter = function () {
        this.currentSiteCatergory = this.navParams.get('site');
    };
    ContactUsPopoverPage.prototype.ionViewDidEnter = function () {
        var input = document.querySelector("#phone");
        this.internationalPhonePrefix = window.intlTelInput(input, {
            // utilsScript is useful for providing validation and pretty formatting
            utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.3/js/utils.min.js",
            initialCountry: 'vn',
            preferredCountries: ['vn', 'us'],
            separateDialCode: true
        });
    };
    ContactUsPopoverPage.prototype.textAreaResize = function () {
        var element = this.contactUsContentInput['_elementRef'].nativeElement.getElementsByClassName("text-input")[0];
        var scrollHeight = element.scrollHeight;
        element.style.height = scrollHeight + 'px';
        this.contactUsContentInput['_elementRef'].nativeElement.style.height = (scrollHeight + 16) + 'px';
    };
    ContactUsPopoverPage.prototype.sendFeeback = function () {
        var _this = this;
        this.contactUsInput.lastUpdated = this.global.getCurrentDateandTime();
        this.contactUsInput.phone = this.internationalPhonePrefix.getNumber();
        this.customerFirebaseController.createComment(this.contactUsInput);
        this.global.presentLoading('Xin vui lòng đợi trong giây lát...');
        setTimeout(function () {
            _this.global.dismissLoading();
        }, 2000);
    };
    ContactUsPopoverPage.prototype.validateInput = function () {
        console.log(this.internationalPhonePrefix.getNumber() + this.internationalPhonePrefix.isValidNumber());
        console.log(this.contactUsInput);
        if (this.contactUsInput.name == '' || this.contactUsInput.email == '' || this.contactUsInput.content[0] == '')
            this.global.presentToast('Các trường bắt buộc không thể bỏ trống');
        else if (!this.global.emailValidator(this.contactUsInput.email))
            this.global.presentToast('Định dạng email không hợp lệ, vui lòng kiểm tra lại');
        else if (this.internationalPhonePrefix.getNumber() != '' && !this.internationalPhonePrefix.isValidNumber())
            this.global.presentToast('Định dạng số điện thoại không hợp lệ, vui lòng kiểm tra lại');
        else
            this.sendFeeback();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('contactUsContentInput'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], ContactUsPopoverPage.prototype, "contactUsContentInput", void 0);
    ContactUsPopoverPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-contact-us-popover',template:/*ion-inline-start:"C:\Users\HoangN\Downloads\vietnamargo_final\vietnamargo\src\pages\contact-us-popover\contact-us-popover.html"*/'<ion-grid id="contactForm" padding>\n  <ion-row style="height: 100%;" justify-content-center align-items-center>\n    <ion-item style="margin-bottom: 10px;" no-lines>\n      <span item-start class="punchingLabel">\n        Liên Hệ Với Chúng Tôi\n      </span>\n      <img item-end loading="lazy" src="imgs/send.png" style="float:right; width:40px" />\n    </ion-item>\n   \n    <ion-item no-lines>\n      <ion-label fixed>Họ Tên <span class="requiredInput">(*)</span></ion-label>\n      <ion-textarea [(ngModel)]="contactUsInput.name" maxlength="40" placeholder="nhập họ tên..."></ion-textarea>\n    </ion-item>\n    <ion-item no-lines>\n      <ion-label fixed>Email <span class="requiredInput">(*)</span></ion-label>\n      <ion-textarea [(ngModel)]="contactUsInput.email" maxlength="40" placeholder="nhập email...">\n      </ion-textarea>\n    </ion-item>\n   \n    <input style="border: 1px solid lightblue;\n    border-radius: 15px;\n    padding-top: 5px;\n    padding-bottom: 5px;" type="tel" id="phone" name="phone">\n\n    <ion-item style="margin-top:10px" no-lines>\n      <ion-label fixed>Nội dung <span class="requiredInput">(*)</span></ion-label>\n      <ion-textarea [(ngModel)]="contactUsInput.content[0]" rows="5" #contactUsContentInput id="contactUsContentInput"\n        (keyup)="textAreaResize()" placeholder="nhập nội dung..."></ion-textarea>\n    </ion-item>\n\n    <div (click)="validateInput()" style="width:200px; height: 50px; display: table;\n    margin: 0 auto;background-color: transparent; text-align: center;">\n    <div style="display:table-cell; vertical-align: middle; width:75%; background-color: tomato;">\n    <span style="font-weight: bold; color: white;">Gửi Thông Tin</span>\n    </div>\n    <div style="display:table-cell; width:25%; background-color: #f3dd1d; vertical-align: middle;">\n      <ion-icon style="font-size: 2em; font-weight: bold; color: white;" name="ios-arrow-forward"></ion-icon>\n    </div>\n    </div>\n\n  </ion-row>\n</ion-grid>'/*ion-inline-end:"C:\Users\HoangN\Downloads\vietnamargo_final\vietnamargo\src\pages\contact-us-popover\contact-us-popover.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_globalhero_globalhero__["a" /* GlobalheroProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_firebase_services_customerFirebaseController__["a" /* customerFirebaseController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ContactUsPopoverPage);
    return ContactUsPopoverPage;
}());

//# sourceMappingURL=contact-us-popover.js.map

/***/ })

});
//# sourceMappingURL=8.js.map