webpackJsonp([4],{

/***/ 862:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeContactUsPageModule", function() { return HomeContactUsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_contact_us__ = __webpack_require__(886);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(871);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var HomeContactUsPageModule = /** @class */ (function () {
    function HomeContactUsPageModule() {
    }
    HomeContactUsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__home_contact_us__["a" /* HomeContactUsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home_contact_us__["a" /* HomeContactUsPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]
            ],
        })
    ], HomeContactUsPageModule);
    return HomeContactUsPageModule;
}());

//# sourceMappingURL=home-contact-us.module.js.map

/***/ }),

/***/ 871:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_header_app_header__ = __webpack_require__(872);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_footer_app_footer__ = __webpack_require__(873);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(121);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__app_header_app_header__["a" /* AppHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_3__app_footer_app_footer__["a" /* AppFooterComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["d" /* IonicModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_1__app_header_app_header__["a" /* AppHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_3__app_footer_app_footer__["a" /* AppFooterComponent */]]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 872:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_firebase_services_productsFirebaseController__ = __webpack_require__(379);
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
 * Generated class for the AppHeaderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var AppHeaderComponent = /** @class */ (function () {
    function AppHeaderComponent(navCtrl, productsFirebaseController) {
        this.navCtrl = navCtrl;
        this.productsFirebaseController = productsFirebaseController;
        this.listOfProducts = [];
        this.listOfProductGroups = null;
        this.listOfProductGroupsToDisplay = [];
        console.log('Hello AppHeaderComponent Component');
    }
    AppHeaderComponent.prototype.ngOnChanges = function () {
        console.log(this.currentSiteCatergory);
        this.getProductsOfCatergory();
    };
    AppHeaderComponent.prototype.menuClick = function (page) {
        console.log(page);
        if (page == 'home') {
            if (!this.isPageActive('HomeProductHomePage')) {
                this.navCtrl.push('HomeProductHomePage', { site: this.currentSiteCatergory });
            }
        }
        else if (page.startsWith('productGroup')) {
            if (!this.isPageActive('HomeProductDetailPage')) {
                console.log(page.split('productGroup')[1]);
                var groupName = page.split('productGroup')[1];
                var productsOnlyArray = [];
                for (var _i = 0, _a = this.listOfProducts; _i < _a.length; _i++) {
                    var product = _a[_i];
                    if (product.groupName != null && product.groupName == groupName)
                        productsOnlyArray.push(product);
                }
                this.navCtrl.push('HomeProductDetailPage', { site: this.currentSiteCatergory, groupName: groupName, listOfProducts: productsOnlyArray });
            }
        }
        else if (page == 'products') {
            if (!this.isPageActive('HomeProductDetailPage'))
                this.navCtrl.push('HomeProductDetailPage', { site: this.currentSiteCatergory, listOfProducts: this.listOfProducts });
        }
        else if (page == 'news') {
            if (!this.isPageActive('HomeProductNewsListPage'))
                this.navCtrl.push('HomeProductNewsListPage', { site: this.currentSiteCatergory });
        }
        else if (page == 'process') {
            if (!this.isPageActive('HomeProductProcessPage'))
                this.navCtrl.push('HomeProductProcessPage', { site: this.currentSiteCatergory });
        }
        else if (page == 'aboutus') {
            if (!this.isPageActive('HomeAboutUsPage'))
                this.navCtrl.push('HomeAboutUsPage', { site: this.currentSiteCatergory });
        }
        else if (page == 'contact') {
            if (!this.isPageActive('HomeContactUsPage'))
                this.navCtrl.push('HomeContactUsPage', { site: this.currentSiteCatergory });
        }
        return false;
    };
    AppHeaderComponent.prototype.isPageActive = function (pageName) {
        return this.navCtrl.getActive().id === pageName || this.navCtrl.getActive().name === pageName;
    };
    AppHeaderComponent.prototype.getProductsOfCatergory = function () {
        var _this = this;
        this.productsFirebaseController.getNewsOfCatergory(this.currentSiteCatergory, null).then(function (res) {
            console.log('Data từ header');
            console.log(res);
            var result = res;
            if (result.hasContent) {
                console.log(result);
                for (var i = result.data.length - 1; i >= 0; i--) {
                    if (result.data[i].id == 'productGroups') {
                        //Đây ko phải sản phẩm mà là nhóm sp.
                        _this.listOfProductGroups = result.data[i];
                        result.data.splice(i, 1);
                    }
                }
                _this.listOfProducts = result.data;
                _this.listOfProductGroupsToDisplay = [];
                if (_this.listOfProductGroups.data.length > 0) {
                    for (var _i = 0, _a = _this.listOfProductGroups.data; _i < _a.length; _i++) {
                        var group = _a[_i];
                        var parsedObj = JSON.parse(group);
                        _this.listOfProductGroupsToDisplay.push({
                            id: group,
                            groupName: parsedObj.groupName,
                            groupAvatar: parsedObj.groupAvatar
                        });
                    }
                }
                else
                    _this.listOfProductGroupsToDisplay = [];
                console.log('Danh sách products');
                console.log(_this.listOfProducts);
                console.log('Danh sách products groups đã parse');
                console.log(_this.listOfProductGroupsToDisplay);
                console.log('Danh sách products groups chưa parse');
                console.log(_this.listOfProductGroups);
            }
        });
    };
    AppHeaderComponent.prototype.goHome = function () {
        this.navCtrl.popToRoot();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('currentSite'),
        __metadata("design:type", String)
    ], AppHeaderComponent.prototype, "currentSiteCatergory", void 0);
    AppHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-header',template:/*ion-inline-start:"C:\Users\HoangN\Desktop\ionic\vietnamargo\src\components\app-header\app-header.html"*/'<div class="headerBar">\n  <div style="height: 10%;"></div>\n  <div (click)="goHome()" id="siteLogo"></div>\n  <div (click)="goHome()" id="siteName"></div>\n  <nav id="navigationBar" aria-label="Main Navigation">\n    <ul>\n      <li><a href="#" (click)="menuClick(\'home\')">Trang Chủ</a></li>\n      <li *ngIf="listOfProductGroups!=null && listOfProductGroups.isRequired" class="dropdown">\n        <button type="button" class="dropdown__title" aria-expanded="false" aria-controls="sweets-dropdown">\n          Sản Phẩm\n        </button>\n        <ul class="dropdown__menu" id="sweets-dropdown">\n          <li *ngFor="let productGroup of listOfProductGroupsToDisplay">\n            <a (click)="menuClick(\'productGroup\'+ productGroup.groupName)" href="#">{{productGroup.groupName}}</a>\n          </li>\n        </ul>\n      </li>\n      <li *ngIf="listOfProductGroups!=null && !listOfProductGroups.isRequired"><a href="#"\n          (click)="menuClick(\'products\')">Sản Phẩm</a></li>\n      <li><a href="#" (click)="menuClick(\'news\')">Tin Tức</a></li>\n      <li><a href="#" (click)="menuClick(\'process\')">Quy Trình</a></li>\n      <li><a href="#" (click)="menuClick(\'aboutus\')">Giới Thiệu</a></li>\n      <li><a href="#" (click)="menuClick(\'contact\')">Liên Hệ</a></li>\n    </ul>\n  </nav>\n</div>\n'/*ion-inline-end:"C:\Users\HoangN\Desktop\ionic\vietnamargo\src\components\app-header\app-header.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_firebase_services_productsFirebaseController__["a" /* productsFirebaseController */]])
    ], AppHeaderComponent);
    return AppHeaderComponent;
}());

//# sourceMappingURL=app-header.js.map

/***/ }),

/***/ 873:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppFooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_firebase_services_contactFirebaseController__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(121);
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
 * Generated class for the AppFooterComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var AppFooterComponent = /** @class */ (function () {
    function AppFooterComponent(navCtrl, contactFirebaseController) {
        this.navCtrl = navCtrl;
        this.contactFirebaseController = contactFirebaseController;
        this.contactDetail = null;
        console.log('Hello AppFooterComponent Component');
    }
    AppFooterComponent.prototype.goHome = function () {
        this.navCtrl.popToRoot();
    };
    AppFooterComponent.prototype.ngOnChanges = function () {
        console.log(this.currentSiteCatergory);
        this.getCurrentContact();
    };
    AppFooterComponent.prototype.menuClick = function (page) {
        console.log(page);
        if (page == 'home') {
            if (!this.isPageActive('HomeProductHomePage'))
                this.navCtrl.push('HomeProductHomePage', { site: this.currentSiteCatergory });
        }
        else if (page == 'news') {
            if (!this.isPageActive('HomeProductNewsListPage'))
                this.navCtrl.push('HomeProductNewsListPage', { site: this.currentSiteCatergory });
        }
        else if (page == 'process') {
            if (!this.isPageActive('HomeProductProcessPage'))
                this.navCtrl.push('HomeProductProcessPage', { site: this.currentSiteCatergory });
        }
        else if (page == 'aboutus') {
            if (!this.isPageActive('HomeAboutUsPage'))
                this.navCtrl.push('HomeAboutUsPage', { site: this.currentSiteCatergory });
        }
        else if (page == 'contact') {
            if (!this.isPageActive('HomeContactUsPage'))
                this.navCtrl.push('HomeContactUsPage', { site: this.currentSiteCatergory });
        }
        return false;
    };
    AppFooterComponent.prototype.getCurrentContact = function () {
        var _this = this;
        this.contactFirebaseController.getContact().then(function (res) {
            console.log(res);
            var result = res;
            if (result.hasContent) {
                _this.contactDetail = result.data;
                console.log(_this.contactDetail);
            }
        }).catch(function (err) {
        });
    };
    AppFooterComponent.prototype.isPageActive = function (pageName) {
        return this.navCtrl.getActive().id === pageName || this.navCtrl.getActive().name === pageName;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])('currentSite'),
        __metadata("design:type", String)
    ], AppFooterComponent.prototype, "currentSiteCatergory", void 0);
    AppFooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-footer',template:/*ion-inline-start:"C:\Users\HoangN\Desktop\ionic\vietnamargo\src\components\app-footer\app-footer.html"*/'<div *ngIf="contactDetail!=null" class="footerBar">\n  <ion-grid>\n    <ion-row style="height:10px"></ion-row>\n    <ion-row justify-content-center align-items-center>\n      <ion-col text-center>\n        <img (click)="goHome()" loading="lazy" src="https://i.ibb.co/pJZQzqV/sitelogo.png" />\n      </ion-col>\n      <ion-col id="contactContent" *ngIf="contactDetail!=null">\n        <p>\n          <ion-icon name="contact"></ion-icon>\n          Tên Công Ty: {{contactDetail.companyName}}\n          <br>\n          <ion-icon name="md-home"></ion-icon>\n          Địa Chỉ: {{contactDetail.address}}\n          <br>\n          <ion-icon name="md-call"></ion-icon>\n          Số Điện Thoại: {{contactDetail.phone}}\n          <br>\n          <ion-icon name="md-mail"></ion-icon>\n          Email: {{contactDetail.email}}\n          <br>\n          <ion-icon name="md-globe"></ion-icon>\n          Website: {{contactDetail.website}}\n        </p>\n      </ion-col>\n      <ion-col id="footerSubmenu" text-center>\n        <li><a href="#" (click)="menuClick(\'news\')">Tin Tức</a></li>\n        <li><a href="#" (click)="menuClick(\'process\')">Quy Trình</a></li>\n        <li><a href="#" (click)="menuClick(\'aboutus\')">Giới Thiệu</a></li>\n        <li><a href="#" (click)="menuClick(\'contact\')">Liên Hệ</a></li>\n      </ion-col>\n    </ion-row>\n    <ion-row justify-content-center align-items-center>\n      <span style="font-size: 1.2rem;">Copyright © 2020 Vietnamagro. All rights reserved. Design by HoangN</span>\n    </ion-row>\n  </ion-grid>\n</div>'/*ion-inline-end:"C:\Users\HoangN\Desktop\ionic\vietnamargo\src\components\app-footer\app-footer.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_0__providers_firebase_services_contactFirebaseController__["a" /* contactFirebaseController */]])
    ], AppFooterComponent);
    return AppFooterComponent;
}());

//# sourceMappingURL=app-footer.js.map

/***/ }),

/***/ 886:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeContactUsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_firebase_services_customerFirebaseController__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_globalhero_globalhero__ = __webpack_require__(32);
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
 * Generated class for the HomeContactUsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HomeContactUsPage = /** @class */ (function () {
    function HomeContactUsPage(global, customerFirebaseController, navCtrl, navParams) {
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
    HomeContactUsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomeContactUsPage');
    };
    HomeContactUsPage.prototype.ionViewWillEnter = function () {
        this.currentSiteCatergory = this.navParams.get('site');
    };
    HomeContactUsPage.prototype.ionViewDidEnter = function () {
        var input = document.querySelector("#phone");
        this.internationalPhonePrefix = window.intlTelInput(input, {
            // utilsScript is useful for providing validation and pretty formatting
            utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.3/js/utils.min.js",
            initialCountry: 'vn',
            preferredCountries: ['vn', 'us'],
            separateDialCode: true
        });
    };
    HomeContactUsPage.prototype.textAreaResize = function () {
        var element = this.contactUsContentInput['_elementRef'].nativeElement.getElementsByClassName("text-input")[0];
        var scrollHeight = element.scrollHeight;
        element.style.height = scrollHeight + 'px';
        this.contactUsContentInput['_elementRef'].nativeElement.style.height = (scrollHeight + 16) + 'px';
    };
    HomeContactUsPage.prototype.sendFeeback = function () {
        var _this = this;
        this.contactUsInput.lastUpdated = this.global.getCurrentDateandTime();
        this.contactUsInput.phone = this.internationalPhonePrefix.getNumber();
        this.customerFirebaseController.createComment(this.contactUsInput);
        this.global.presentLoading('Xin vui lòng đợi trong giây lát...');
        setTimeout(function () {
            _this.global.dismissLoading();
        }, 2000);
    };
    HomeContactUsPage.prototype.validateInput = function () {
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
    ], HomeContactUsPage.prototype, "contactUsContentInput", void 0);
    HomeContactUsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home-contact-us',template:/*ion-inline-start:"C:\Users\HoangN\Desktop\ionic\vietnamargo\src\pages\home-contact-us\home-contact-us.html"*/'<ion-content no-padding>\n  <app-header *ngIf="currentSiteCatergory!=null" [currentSite]="this.currentSiteCatergory"></app-header>\n  <div id="contactWrapper" style="width: 100%; margin:auto">\n    <ion-grid id="contactForm" no-padding>\n      <ion-row style="height: 100%;" justify-content-center align-items-center>\n        <ion-card style="border-radius: 15px; padding:5vh">\n          <ion-item style="margin-bottom: 10px;" no-lines>\n            <span item-start class="punchingLabel">\n              Liên Hệ Với Chúng Tôi\n            </span>\n            <img item-end loading="lazy" src="imgs/send.png" style="float:right; width:40px" />\n          </ion-item>\n         \n          <ion-item no-lines>\n            <ion-label fixed>Họ Tên <span class="requiredInput">(*)</span></ion-label>\n            <ion-textarea [(ngModel)]="contactUsInput.name" maxlength="40" placeholder="nhập họ tên..."></ion-textarea>\n          </ion-item>\n          <ion-item no-lines>\n            <ion-label fixed>Email <span class="requiredInput">(*)</span></ion-label>\n            <ion-textarea [(ngModel)]="contactUsInput.email" maxlength="40" placeholder="nhập email...">\n            </ion-textarea>\n          </ion-item>\n         \n          <input style="border: 1px solid lightblue;\n          border-radius: 15px;\n          padding-top: 5px;\n          padding-bottom: 5px;" type="tel" id="phone" name="phone">\n\n          <ion-item style="margin-top:10px" no-lines>\n            <ion-label fixed>Nội dung <span class="requiredInput">(*)</span></ion-label>\n            <ion-textarea [(ngModel)]="contactUsInput.content[0]" rows="5" #contactUsContentInput id="contactUsContentInput"\n              (keyup)="textAreaResize()" placeholder="nhập nội dung..."></ion-textarea>\n          </ion-item>\n\n          <div (click)="validateInput()" style="width:200px; height: 50px; display: table;\n          margin: 0 auto;background-color: transparent; text-align: center;">\n          <div style="display:table-cell; vertical-align: middle; width:75%; background-color: tomato;">\n          <span style="font-weight: bold; color: white;">Gửi Thông Tin</span>\n          </div>\n          <div style="display:table-cell; width:25%; background-color: #f3dd1d; vertical-align: middle;">\n            <ion-icon style="font-size: 2em; font-weight: bold; color: white;" name="ios-arrow-forward"></ion-icon>\n          </div>\n          </div>\n\n        </ion-card>\n       \n\n      </ion-row>\n    </ion-grid>\n\n  </div>\n  <app-footer *ngIf="currentSiteCatergory!=null" [currentSite]="this.currentSiteCatergory"></app-footer>\n</ion-content>'/*ion-inline-end:"C:\Users\HoangN\Desktop\ionic\vietnamargo\src\pages\home-contact-us\home-contact-us.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_globalhero_globalhero__["a" /* GlobalheroProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_firebase_services_customerFirebaseController__["a" /* customerFirebaseController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], HomeContactUsPage);
    return HomeContactUsPage;
}());

//# sourceMappingURL=home-contact-us.js.map

/***/ })

});
//# sourceMappingURL=4.js.map