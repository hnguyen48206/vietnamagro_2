webpackJsonp([5],{

/***/ 861:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeAboutUsPageModule", function() { return HomeAboutUsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_components_module__ = __webpack_require__(871);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_about_us__ = __webpack_require__(885);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var HomeAboutUsPageModule = /** @class */ (function () {
    function HomeAboutUsPageModule() {
    }
    HomeAboutUsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__home_about_us__["a" /* HomeAboutUsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__home_about_us__["a" /* HomeAboutUsPage */]),
                __WEBPACK_IMPORTED_MODULE_2__components_components_module__["a" /* ComponentsModule */]
            ],
        })
    ], HomeAboutUsPageModule);
    return HomeAboutUsPageModule;
}());

//# sourceMappingURL=home-about-us.module.js.map

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

/***/ 885:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeAboutUsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_firebase_services_aboutusFirebaseController__ = __webpack_require__(386);
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
 * Generated class for the HomeAboutUsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HomeAboutUsPage = /** @class */ (function () {
    function HomeAboutUsPage(global, aboutusFirebaseController, navCtrl, navParams) {
        this.global = global;
        this.aboutusFirebaseController = aboutusFirebaseController;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.aboutUs = null;
    }
    HomeAboutUsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomeAboutUsPage');
    };
    HomeAboutUsPage.prototype.ionViewWillEnter = function () {
        this.currentSiteCatergory = this.navParams.get('site');
        this.getCurrentAboutUS();
    };
    HomeAboutUsPage.prototype.nextSlide = function (slideToMove) {
        if (slideToMove == 'aboutUsSlide')
            this.aboutUsSlide.slideNext();
    };
    HomeAboutUsPage.prototype.prevSlide = function (slideToMove) {
        if (slideToMove == 'aboutUsSlide')
            this.aboutUsSlide.slidePrev();
    };
    HomeAboutUsPage.prototype.getCurrentAboutUS = function () {
        var _this = this;
        this.aboutusFirebaseController.getAboutUS().then(function (res) {
            var result = res;
            if (result.hasContent) {
                _this.aboutUs = result.data;
            }
            console.log(_this.aboutUs);
        }).catch(function (err) {
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('aboutUsSlide'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Slides */])
    ], HomeAboutUsPage.prototype, "aboutUsSlide", void 0);
    HomeAboutUsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home-about-us',template:/*ion-inline-start:"C:\Users\HoangN\Desktop\ionic\vietnamargo\src\pages\home-about-us\home-about-us.html"*/'<ion-content no-padding>\n  <app-header *ngIf="currentSiteCatergory!=null" [currentSite]="this.currentSiteCatergory"></app-header>\n  <div style="width: 100%;" *ngIf="aboutUs!=null && aboutUs.status">\n    <div class="processSlide" >\n      <ion-slides id="aboutUsSlide" #aboutUsSlide autoplay="2000" loop="true" pager="true" paginationType="bullets"\n        style="width: 100%; height:100%;">\n        <ion-slide *ngFor="let processImg of aboutUs.mediaList">\n          <img loading="lazy" *ngIf="!global.isVideoCheck(processImg)" [src]="processImg"\n            style="width: 100%; height:100%; object-fit: cover;" />\n          <div *ngIf="global.isVideoCheck(processImg)" class="video-container">\n            <video autoplay oncanplay="this.muted=true" loop>\n              <source [src]="processImg" type="video/mp4" />\n            </video>\n          </div>\n        </ion-slide>\n      </ion-slides>\n      <button (click)="prevSlide(\'aboutUsSlide\')" float-left ion-button icon-only clear color="primary" class="slideBtn"\n        (click)="prev()">\n        <ion-icon name="ios-arrow-back"></ion-icon>\n      </button>\n      <button (click)="nextSlide(\'aboutUsSlide\')" float-right ion-button icon-only clear color="primary"\n        class="slideBtn" (click)="next()">\n        <ion-icon name="ios-arrow-forward"></ion-icon>\n      </button>\n    </div>\n  \n    <div style="margin:5vw">\n      <ion-item text-wrap style="margin-bottom: 20px;" text-center no-padding no-lines><span class="punchingLabel">{{aboutUs.title}}</span>\n      <p style="margin-top:5px"><span class="punchingSubLabel">{{aboutUs.shortDescription}}</span></p>\n      </ion-item>\n      <ion-item text-wrap text-justify no-padding no-lines><span class="processContent">{{aboutUs.detail}}</span>\n      </ion-item>\n      </div>\n  </div>\n \n  <ion-fab (click)="global.openContactUsPopOver()" bottom right>\n    <div style="width:80px; height: 80px; border-radius: 50px; border: solid 1px lightblue;">\n      <img style="width:100%; height: 100%; object-fit: cover; border-radius: 50px" src="imgs/contactGif.gif"/>\n    </div>\n  </ion-fab>\n  <app-footer *ngIf="currentSiteCatergory!=null" [currentSite]="this.currentSiteCatergory"></app-footer>\n</ion-content>\n'/*ion-inline-end:"C:\Users\HoangN\Desktop\ionic\vietnamargo\src\pages\home-about-us\home-about-us.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_globalhero_globalhero__["a" /* GlobalheroProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_firebase_services_aboutusFirebaseController__["a" /* aboutusFirebaseController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], HomeAboutUsPage);
    return HomeAboutUsPage;
}());

//# sourceMappingURL=home-about-us.js.map

/***/ })

});
//# sourceMappingURL=5.js.map