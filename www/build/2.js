webpackJsonp([2],{

/***/ 864:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeProductHomePageModule", function() { return HomeProductHomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_components_module__ = __webpack_require__(871);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_product_home__ = __webpack_require__(888);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var HomeProductHomePageModule = /** @class */ (function () {
    function HomeProductHomePageModule() {
    }
    HomeProductHomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__home_product_home__["a" /* HomeProductHomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__home_product_home__["a" /* HomeProductHomePage */]),
                __WEBPACK_IMPORTED_MODULE_2__components_components_module__["a" /* ComponentsModule */]
            ],
        })
    ], HomeProductHomePageModule);
    return HomeProductHomePageModule;
}());

//# sourceMappingURL=home-product-home.module.js.map

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

/***/ 888:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeProductHomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_globalhero_globalhero__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_firebase_services_processFirebaseController__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_firebase_services_productsFirebaseController__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_firebase_services_newsFirebaseController__ = __webpack_require__(382);
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
 * Generated class for the HomeProductHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HomeProductHomePage = /** @class */ (function () {
    function HomeProductHomePage(popCtrl, newsFirebaseController, processFirebaseController, productsFirebaseController, global, navCtrl, navParams) {
        this.popCtrl = popCtrl;
        this.newsFirebaseController = newsFirebaseController;
        this.processFirebaseController = processFirebaseController;
        this.productsFirebaseController = productsFirebaseController;
        this.global = global;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.listOfProducts = [];
        this.listOfProductGroups = null;
        this.listOfProductGroupsToDisplay = [];
        this.listOfProcess = [];
        this.listOfNews = [];
    }
    HomeProductHomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomeProductHomePage');
    };
    HomeProductHomePage.prototype.ionViewWillEnter = function () {
        this.currentSiteCatergory = this.navParams.get('site');
        console.log(this.navParams.get('site'));
        this.getProductsOfCatergory();
        this.getProcessOfCatergory();
        this.getNewsOfCatergory();
    };
    HomeProductHomePage.prototype.ionViewDidEnter = function () {
    };
    HomeProductHomePage.prototype.nextSlide = function (slideToMove) {
        if (slideToMove == 'processSlide')
            this.processSlide.slideNext();
    };
    HomeProductHomePage.prototype.prevSlide = function (slideToMove) {
        if (slideToMove == 'processSlide')
            this.processSlide.slidePrev();
    };
    HomeProductHomePage.prototype.menuClick = function (page) {
        console.log(page);
        if (page == 'home') {
            this.navCtrl.push('HomeProductHomePage', { site: this.currentSiteCatergory });
        }
        else if (page.startsWith('productGroup')) {
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
        return false;
    };
    HomeProductHomePage.prototype.getNewsOfCatergory = function () {
        var _this = this;
        this.newsFirebaseController.getNewsOfCatergory(this.currentSiteCatergory).then(function (res) {
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
    HomeProductHomePage.prototype.getProductsOfCatergory = function () {
        var _this = this;
        this.productsFirebaseController.getNewsOfCatergory(this.currentSiteCatergory, null).then(function (res) {
            console.log(res);
            var result = res;
            if (result.hasContent) {
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
    HomeProductHomePage.prototype.getProcessOfCatergory = function () {
        var _this = this;
        this.processFirebaseController.getNewsOfCatergory(this.currentSiteCatergory).then(function (res) {
            console.log(res);
            var result = res;
            if (result.hasContent) {
                for (var i = result.data.length - 1; i >= 0; i--) {
                    if (result.data[i].title == null) {
                        result.data.splice(i, 1);
                    }
                }
            }
            _this.listOfProcess = result.data;
            console.log('Danh sách process');
            console.log(_this.listOfProcess);
        });
    };
    HomeProductHomePage.prototype.readNewsDetail = function (news) {
        if (news == null) {
            this.navCtrl.push('HomeProductNewsListPage', { site: this.currentSiteCatergory });
        }
        else {
            var popover = this.popCtrl.create('NewsDetailPopoverPage', { news: news }, { cssClass: 'newsDetailPopover' });
            popover.present();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('processSlide'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Slides */])
    ], HomeProductHomePage.prototype, "processSlide", void 0);
    HomeProductHomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home-product-home',template:/*ion-inline-start:"C:\Users\HoangN\Desktop\ionic\vietnamargo\src\pages\home-product-home\home-product-home.html"*/'<ion-content class="home_productHome" no-padding>\n\n  <app-header *ngIf="currentSiteCatergory!=null" [currentSite]="this.currentSiteCatergory"></app-header>\n  \n  <div class="contentSection">\n    <div class="processSlide" *ngIf="listOfProcess.length!=0">\n      <ion-slides id="processSlide" #processSlide autoplay="2000" loop="true" pager="true" paginationType="bullets"\n        style="width: 100%; height:100%;" *ngIf="listOfProcess[0].status">\n        <ion-slide *ngFor="let processImg of listOfProcess[0].mediaList">\n          <img loading="lazy" *ngIf="!global.isVideoCheck(processImg)" [src]="processImg"\n            style="width: 100%; height:100%; object-fit: cover;" />\n          <div *ngIf="global.isVideoCheck(processImg)" class="video-container">\n            <video autoplay oncanplay="this.muted=true" loop>\n              <source [src]="processImg" type="video/mp4" />\n            </video>\n          </div>\n        </ion-slide>\n      </ion-slides>\n      <button (click)="prevSlide(\'processSlide\')" float-left ion-button icon-only clear color="primary" class="slideBtn"\n        (click)="prev()">\n        <ion-icon name="ios-arrow-back"></ion-icon>\n      </button>\n      <button (click)="nextSlide(\'processSlide\')" float-right ion-button icon-only clear color="primary"\n        class="slideBtn" (click)="next()">\n        <ion-icon name="ios-arrow-forward"></ion-icon>\n      </button>\n    </div>\n    <div *ngIf="listOfProductGroups!=null && listOfProductGroups.isRequired" class="productsWrapper">\n      <ion-item style="width: 100%;" no-lines text-center no-padding text-wrap><span class="punchingLabel">SẢN\n          PHẨM</span></ion-item>\n      <div style="display:inline;\n      text-align:center;">\n        <div (click)="menuClick(\'productGroup\'+ productGroup.groupName)" *ngFor="let productGroup of listOfProductGroupsToDisplay"\n          [ngStyle]="{ \'background-image\': \'url(\' + productGroup.groupAvatar + \')\'}" style="\n          background-size: cover;\n          background-position: center;\n          background-repeat: no-repeat;\n          height: 45vh; width: 30%; float: left; margin:1.5%;\n          border: 1px solid #ffe9e9; border-radius:15px">                   \n          <ion-item no-lines text-center no-padding text-wrap\n            style="border-radius: 0 0 15px 15px; width: 100%; height: 15%; position:relative; bottom: -85%; background: rgba(76, 175, 80, 0.3)">\n            <span class="punchingSubLabel">{{productGroup.groupName}}</span>\n          </ion-item>\n        </div>\n      </div>\n    </div>\n    <div class="newsWrapper">\n      <ion-item style="width: 100%;" no-lines text-center no-padding text-wrap><span class="punchingLabel">TIN\n          TỨC</span></ion-item>\n     \n      <div class="custom_row">\n        <ng-container  *ngFor="let news of listOfNews; let i=index">\n        <div (click)="readNewsDetail(news)" class="custom_column"  *ngIf="i < 7">\n          <div class="custom_card">\n            <figure>\n              <img loading="lazy" [src]="news.mediaList[0]" />\n              <figcaption>\n                <h3>{{news.title}}</h3>\n              </figcaption>\n            </figure>\n            <div class="custom_card_content">\n              <div class="newsSubTitleWarpper"><span>{{news.shortDescription}}</span></div>\n              <p class="newsContentWarpper">{{news.detail}}</p>\n            </div>\n          </div>\n        </div>\n        <div (click)="readNewsDetail(null)" class="custom_column" style="padding-top:180px" *ngIf="(i==7) || ((i < 7) && (i == (listOfNews.length - 1)))">\n            <button style="\n                background-color: yellowgreen;\n                margin: 0 auto;\n                top: 40%;" (click)="nextSlide(\'processSlide\')" ion-fab>\n                  <ion-icon name="ios-more-outline" style="font-size: 4rem;"></ion-icon>\n                </button>\n        </div>\n      </ng-container>\n      </div>\n    </div>\n  \n  </div>\n\n  <app-footer *ngIf="currentSiteCatergory!=null" [currentSite]="this.currentSiteCatergory"></app-footer>\n\n  <ion-fab (click)="global.openContactUsPopOver()" bottom right>\n    <div style="width:80px; height: 80px; border-radius: 50px; border: solid 1px lightblue;">\n      <img style="width:100%; height: 100%; object-fit: cover; border-radius: 50px" src="imgs/contactGif.gif"/>\n    </div>\n  </ion-fab>\n</ion-content>'/*ion-inline-end:"C:\Users\HoangN\Desktop\ionic\vietnamargo\src\pages\home-product-home\home-product-home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_5__providers_firebase_services_newsFirebaseController__["a" /* newsFirebaseController */], __WEBPACK_IMPORTED_MODULE_3__providers_firebase_services_processFirebaseController__["a" /* processFirebaseController */], __WEBPACK_IMPORTED_MODULE_4__providers_firebase_services_productsFirebaseController__["a" /* productsFirebaseController */], __WEBPACK_IMPORTED_MODULE_2__providers_globalhero_globalhero__["a" /* GlobalheroProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], HomeProductHomePage);
    return HomeProductHomePage;
}());

//# sourceMappingURL=home-product-home.js.map

/***/ })

});
//# sourceMappingURL=2.js.map