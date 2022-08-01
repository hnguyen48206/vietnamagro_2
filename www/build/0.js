webpackJsonp([0],{

/***/ 864:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeProductNewsListPageModule", function() { return HomeProductNewsListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_product_news_list__ = __webpack_require__(888);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(871);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_pagination__ = __webpack_require__(889);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var HomeProductNewsListPageModule = /** @class */ (function () {
    function HomeProductNewsListPageModule() {
    }
    HomeProductNewsListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__home_product_news_list__["a" /* HomeProductNewsListPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home_product_news_list__["a" /* HomeProductNewsListPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_4_ngx_pagination__["a" /* NgxPaginationModule */]
            ],
        })
    ], HomeProductNewsListPageModule);
    return HomeProductNewsListPageModule;
}());

//# sourceMappingURL=home-product-news-list.module.js.map

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
            selector: 'app-header',template:/*ion-inline-start:"C:\Users\HoangN\Downloads\vietnamargo_final\vietnamargo\src\components\app-header\app-header.html"*/'<div class="headerBar">\n  <div style="height: 10%;"></div>\n  <div (click)="goHome()" id="siteLogo"></div>\n  <div (click)="goHome()" id="siteName"></div>\n  <nav id="navigationBar" aria-label="Main Navigation">\n    <ul>\n      <li><a href="#" (click)="menuClick(\'home\')">Trang Chủ</a></li>\n      <li *ngIf="listOfProductGroups!=null && listOfProductGroups.isRequired" class="dropdown">\n        <button type="button" class="dropdown__title" aria-expanded="false" aria-controls="sweets-dropdown">\n          Sản Phẩm\n        </button>\n        <ul class="dropdown__menu" id="sweets-dropdown">\n          <li *ngFor="let productGroup of listOfProductGroupsToDisplay">\n            <a (click)="menuClick(\'productGroup\'+ productGroup.groupName)" href="#">{{productGroup.groupName}}</a>\n          </li>\n        </ul>\n      </li>\n      <li *ngIf="listOfProductGroups!=null && !listOfProductGroups.isRequired"><a href="#"\n          (click)="menuClick(\'products\')">Sản Phẩm</a></li>\n      <li><a href="#" (click)="menuClick(\'news\')">Tin Tức</a></li>\n      <li><a href="#" (click)="menuClick(\'process\')">Quy Trình</a></li>\n      <li><a href="#" (click)="menuClick(\'aboutus\')">Giới Thiệu</a></li>\n      <li><a href="#" (click)="menuClick(\'contact\')">Liên Hệ</a></li>\n    </ul>\n  </nav>\n</div>\n'/*ion-inline-end:"C:\Users\HoangN\Downloads\vietnamargo_final\vietnamargo\src\components\app-header\app-header.html"*/
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
            selector: 'app-footer',template:/*ion-inline-start:"C:\Users\HoangN\Downloads\vietnamargo_final\vietnamargo\src\components\app-footer\app-footer.html"*/'<div *ngIf="contactDetail!=null" class="footerBar">\n  <ion-grid>\n    <ion-row style="height:10px"></ion-row>\n    <ion-row justify-content-center align-items-center>\n      <ion-col text-center>\n        <img (click)="goHome()" loading="lazy" src="https://i.ibb.co/pJZQzqV/sitelogo.png" />\n      </ion-col>\n      <ion-col id="contactContent" *ngIf="contactDetail!=null">\n        <p>\n          <ion-icon name="contact"></ion-icon>\n          Tên Công Ty: {{contactDetail.companyName}}\n          <br>\n          <ion-icon name="md-home"></ion-icon>\n          Địa Chỉ: {{contactDetail.address}}\n          <br>\n          <ion-icon name="md-call"></ion-icon>\n          Số Điện Thoại: {{contactDetail.phone}}\n          <br>\n          <ion-icon name="md-mail"></ion-icon>\n          Email: {{contactDetail.email}}\n          <br>\n          <ion-icon name="md-globe"></ion-icon>\n          Website: {{contactDetail.website}}\n        </p>\n      </ion-col>\n      <ion-col id="footerSubmenu" text-center>\n        <li><a href="#" (click)="menuClick(\'news\')">Tin Tức</a></li>\n        <li><a href="#" (click)="menuClick(\'process\')">Quy Trình</a></li>\n        <li><a href="#" (click)="menuClick(\'aboutus\')">Giới Thiệu</a></li>\n        <li><a href="#" (click)="menuClick(\'contact\')">Liên Hệ</a></li>\n      </ion-col>\n    </ion-row>\n    <ion-row justify-content-center align-items-center>\n      <span style="font-size: 1.2rem;">Copyright © 2020 Vietnamagro. All rights reserved. Design by HoangN</span>\n    </ion-row>\n  </ion-grid>\n</div>'/*ion-inline-end:"C:\Users\HoangN\Downloads\vietnamargo_final\vietnamargo\src\components\app-footer\app-footer.html"*/
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeProductNewsListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_firebase_services_newsFirebaseController__ = __webpack_require__(382);
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
 * Generated class for the HomeProductNewsListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HomeProductNewsListPage = /** @class */ (function () {
    function HomeProductNewsListPage(popCtrl, global, newsFirebaseController, navCtrl, navParams) {
        this.popCtrl = popCtrl;
        this.global = global;
        this.newsFirebaseController = newsFirebaseController;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.listOfNews = [];
        this.currentPage = 1;
    }
    HomeProductNewsListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomeProductNewsListPage');
    };
    HomeProductNewsListPage.prototype.ionViewWillEnter = function () {
        console.log(this.navParams.get('site'));
        this.currentSiteCatergory = this.navParams.get('site');
        this.getNewsOfCatergory();
    };
    HomeProductNewsListPage.prototype.getNewsOfCatergory = function () {
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
            console.log('danh sách tin');
            console.log(_this.listOfNews);
        });
    };
    HomeProductNewsListPage.prototype.readNewsDetail = function (news) {
        var popover = this.popCtrl.create('NewsDetailPopoverPage', { news: news }, { cssClass: 'newsDetailPopover' });
        popover.present();
    };
    HomeProductNewsListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home-product-news-list',template:/*ion-inline-start:"C:\Users\HoangN\Downloads\vietnamargo_final\vietnamargo\src\pages\home-product-news-list\home-product-news-list.html"*/'<ion-content class="home_productHome" no-padding>\n  <app-header *ngIf="currentSiteCatergory!=null" [currentSite]="this.currentSiteCatergory"></app-header>\n  <div style="margin:5vw">\n    <div class="custom_row">\n      <div data-target="simpleModal_2" data-toggle="modal" (click)="readNewsDetail(news)" class="custom_column"\n        *ngFor="let news of listOfNews | paginate: { itemsPerPage: 10, currentPage: currentPage }">\n        <div class="custom_card">\n          <figure>\n            <img loading="lazy" [src]="news.mediaList[0]" />\n            <figcaption>\n              <h3>{{news.title}}</h3>\n            </figcaption>\n          </figure>\n          <div class="custom_card_content">\n            <div class="newsSubTitleWarpper"><span>{{news.shortDescription}}</span></div>\n            <p class="newsContentWarpper">{{news.detail}}</p>\n          </div>\n        </div>\n      </div>\n    </div>\n    <pagination-controls style="float: right; margin-top: 20px;" previousLabel="Trang trước" nextLabel="Trang sau"\n      (pageChange)="currentPage = $event" responsive="true"></pagination-controls>\n  </div>\n\n  <ion-fab (click)="global.openContactUsPopOver()" bottom right>\n    <div style="width:80px; height: 80px; border-radius: 50px; border: solid 1px lightblue;">\n      <img style="width:100%; height: 100%; object-fit: cover; border-radius: 50px" src="imgs/contactGif.gif"/>\n    </div>\n  </ion-fab>\n  <app-footer *ngIf="currentSiteCatergory!=null" [currentSite]="this.currentSiteCatergory"></app-footer>\n</ion-content>'/*ion-inline-end:"C:\Users\HoangN\Downloads\vietnamargo_final\vietnamargo\src\pages\home-product-news-list\home-product-news-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_3__providers_globalhero_globalhero__["a" /* GlobalheroProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_firebase_services_newsFirebaseController__["a" /* newsFirebaseController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], HomeProductNewsListPage);
    return HomeProductNewsListPage;
}());

//# sourceMappingURL=home-product-news-list.js.map

/***/ }),

/***/ 889:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ɵb */
/* unused harmony export ɵa */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgxPaginationModule; });
/* unused harmony export PaginationService */
/* unused harmony export PaginationControlsComponent */
/* unused harmony export PaginationControlsDirective */
/* unused harmony export PaginatePipe */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(45);



var PaginationService = /** @class */ (function () {
    function PaginationService() {
        this.change = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.instances = {};
        this.DEFAULT_ID = 'DEFAULT_PAGINATION_ID';
    }
    PaginationService.prototype.defaultId = function () { return this.DEFAULT_ID; };
    /**
     * Register a PaginationInstance with this service. Returns a
     * boolean value signifying whether the instance is new or
     * updated (true = new or updated, false = unchanged).
     */
    PaginationService.prototype.register = function (instance) {
        if (instance.id == null) {
            instance.id = this.DEFAULT_ID;
        }
        if (!this.instances[instance.id]) {
            this.instances[instance.id] = instance;
            return true;
        }
        else {
            return this.updateInstance(instance);
        }
    };
    /**
     * Check each property of the instance and update any that have changed. Return
     * true if any changes were made, else return false.
     */
    PaginationService.prototype.updateInstance = function (instance) {
        var changed = false;
        for (var prop in this.instances[instance.id]) {
            if (instance[prop] !== this.instances[instance.id][prop]) {
                this.instances[instance.id][prop] = instance[prop];
                changed = true;
            }
        }
        return changed;
    };
    /**
     * Returns the current page number.
     */
    PaginationService.prototype.getCurrentPage = function (id) {
        if (this.instances[id]) {
            return this.instances[id].currentPage;
        }
    };
    /**
     * Sets the current page number.
     */
    PaginationService.prototype.setCurrentPage = function (id, page) {
        if (this.instances[id]) {
            var instance = this.instances[id];
            var maxPage = Math.ceil(instance.totalItems / instance.itemsPerPage);
            if (page <= maxPage && 1 <= page) {
                this.instances[id].currentPage = page;
                this.change.emit(id);
            }
        }
    };
    /**
     * Sets the value of instance.totalItems
     */
    PaginationService.prototype.setTotalItems = function (id, totalItems) {
        if (this.instances[id] && 0 <= totalItems) {
            this.instances[id].totalItems = totalItems;
            this.change.emit(id);
        }
    };
    /**
     * Sets the value of instance.itemsPerPage.
     */
    PaginationService.prototype.setItemsPerPage = function (id, itemsPerPage) {
        if (this.instances[id]) {
            this.instances[id].itemsPerPage = itemsPerPage;
            this.change.emit(id);
        }
    };
    /**
     * Returns a clone of the pagination instance object matching the id. If no
     * id specified, returns the instance corresponding to the default id.
     */
    PaginationService.prototype.getInstance = function (id) {
        if (id === void 0) { id = this.DEFAULT_ID; }
        if (this.instances[id]) {
            return this.clone(this.instances[id]);
        }
        return {};
    };
    /**
     * Perform a shallow clone of an object.
     */
    PaginationService.prototype.clone = function (obj) {
        var target = {};
        for (var i in obj) {
            if (obj.hasOwnProperty(i)) {
                target[i] = obj[i];
            }
        }
        return target;
    };
    return PaginationService;
}());

var __decorate$1 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var LARGE_NUMBER = Number.MAX_SAFE_INTEGER;
var PaginatePipe = /** @class */ (function () {
    function PaginatePipe(service) {
        this.service = service;
        // store the values from the last time the pipe was invoked
        this.state = {};
    }
    PaginatePipe.prototype.transform = function (collection, args) {
        // When an observable is passed through the AsyncPipe, it will output
        // `null` until the subscription resolves. In this case, we want to
        // use the cached data from the `state` object to prevent the NgFor
        // from flashing empty until the real values arrive.
        if (!(collection instanceof Array)) {
            var _id = args.id || this.service.defaultId();
            if (this.state[_id]) {
                return this.state[_id].slice;
            }
            else {
                return collection;
            }
        }
        var serverSideMode = args.totalItems && args.totalItems !== collection.length;
        var instance = this.createInstance(collection, args);
        var id = instance.id;
        var start, end;
        var perPage = instance.itemsPerPage;
        var emitChange = this.service.register(instance);
        if (!serverSideMode && collection instanceof Array) {
            perPage = +perPage || LARGE_NUMBER;
            start = (instance.currentPage - 1) * perPage;
            end = start + perPage;
            var isIdentical = this.stateIsIdentical(id, collection, start, end);
            if (isIdentical) {
                return this.state[id].slice;
            }
            else {
                var slice = collection.slice(start, end);
                this.saveState(id, collection, slice, start, end);
                this.service.change.emit(id);
                return slice;
            }
        }
        else {
            if (emitChange) {
                this.service.change.emit(id);
            }
            // save the state for server-side collection to avoid null
            // flash as new data loads.
            this.saveState(id, collection, collection, start, end);
            return collection;
        }
    };
    /**
     * Create an PaginationInstance object, using defaults for any optional properties not supplied.
     */
    PaginatePipe.prototype.createInstance = function (collection, config) {
        this.checkConfig(config);
        return {
            id: config.id != null ? config.id : this.service.defaultId(),
            itemsPerPage: +config.itemsPerPage || 0,
            currentPage: +config.currentPage || 1,
            totalItems: +config.totalItems || collection.length
        };
    };
    /**
     * Ensure the argument passed to the filter contains the required properties.
     */
    PaginatePipe.prototype.checkConfig = function (config) {
        var required = ['itemsPerPage', 'currentPage'];
        var missing = required.filter(function (prop) { return !(prop in config); });
        if (0 < missing.length) {
            throw new Error("PaginatePipe: Argument is missing the following required properties: " + missing.join(', '));
        }
    };
    /**
     * To avoid returning a brand new array each time the pipe is run, we store the state of the sliced
     * array for a given id. This means that the next time the pipe is run on this collection & id, we just
     * need to check that the collection, start and end points are all identical, and if so, return the
     * last sliced array.
     */
    PaginatePipe.prototype.saveState = function (id, collection, slice, start, end) {
        this.state[id] = {
            collection: collection,
            size: collection.length,
            slice: slice,
            start: start,
            end: end
        };
    };
    /**
     * For a given id, returns true if the collection, size, start and end values are identical.
     */
    PaginatePipe.prototype.stateIsIdentical = function (id, collection, start, end) {
        var state = this.state[id];
        if (!state) {
            return false;
        }
        var isMetaDataIdentical = state.size === collection.length &&
            state.start === start &&
            state.end === end;
        if (!isMetaDataIdentical) {
            return false;
        }
        return state.slice.every(function (element, index) { return element === collection[start + index]; });
    };
    PaginatePipe = __decorate$1([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'paginate',
            pure: false
        }),
        __metadata("design:paramtypes", [PaginationService])
    ], PaginatePipe);
    return PaginatePipe;
}());

/**
 * The default template and styles for the pagination links are borrowed directly
 * from Zurb Foundation 6: http://foundation.zurb.com/sites/docs/pagination.html
 */
var DEFAULT_TEMPLATE = "\n    <pagination-template  #p=\"paginationApi\"\n                         [id]=\"id\"\n                         [maxSize]=\"maxSize\"\n                         (pageChange)=\"pageChange.emit($event)\"\n                         (pageBoundsCorrection)=\"pageBoundsCorrection.emit($event)\">\n    <ul class=\"ngx-pagination\" \n        role=\"navigation\" \n        [attr.aria-label]=\"screenReaderPaginationLabel\" \n        [class.responsive]=\"responsive\"\n        *ngIf=\"!(autoHide && p.pages.length <= 1)\">\n\n        <li class=\"pagination-previous\" [class.disabled]=\"p.isFirstPage()\" *ngIf=\"directionLinks\"> \n            <a tabindex=\"0\" *ngIf=\"1 < p.getCurrent()\" (keyup.enter)=\"p.previous()\" (click)=\"p.previous()\" [attr.aria-label]=\"previousLabel + ' ' + screenReaderPageLabel\">\n                {{ previousLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </a>\n            <span *ngIf=\"p.isFirstPage()\">\n                {{ previousLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </span>\n        </li> \n\n        <li class=\"small-screen\">\n            {{ p.getCurrent() }} / {{ p.getLastPage() }}\n        </li>\n\n        <li [class.current]=\"p.getCurrent() === page.value\" \n            [class.ellipsis]=\"page.label === '...'\"\n            *ngFor=\"let page of p.pages\">\n            <a tabindex=\"0\" (keyup.enter)=\"p.setCurrent(page.value)\" (click)=\"p.setCurrent(page.value)\" *ngIf=\"p.getCurrent() !== page.value\">\n                <span class=\"show-for-sr\">{{ screenReaderPageLabel }} </span>\n                <span>{{ (page.label === '...') ? page.label : (page.label | number:'') }}</span>\n            </a>\n            <ng-container *ngIf=\"p.getCurrent() === page.value\">\n                <span class=\"show-for-sr\">{{ screenReaderCurrentLabel }} </span>\n                <span>{{ (page.label === '...') ? page.label : (page.label | number:'') }}</span> \n            </ng-container>\n        </li>\n\n        <li class=\"pagination-next\" [class.disabled]=\"p.isLastPage()\" *ngIf=\"directionLinks\">\n            <a tabindex=\"0\" *ngIf=\"!p.isLastPage()\" (keyup.enter)=\"p.next()\" (click)=\"p.next()\" [attr.aria-label]=\"nextLabel + ' ' + screenReaderPageLabel\">\n                 {{ nextLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </a>\n            <span *ngIf=\"p.isLastPage()\">\n                 {{ nextLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </span>\n        </li>\n\n    </ul>\n    </pagination-template>\n    ";
var DEFAULT_STYLES = "\n.ngx-pagination {\n  margin-left: 0;\n  margin-bottom: 1rem; }\n  .ngx-pagination::before, .ngx-pagination::after {\n    content: ' ';\n    display: table; }\n  .ngx-pagination::after {\n    clear: both; }\n  .ngx-pagination li {\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    -ms-user-select: none;\n    margin-right: 0.0625rem;\n    border-radius: 0; }\n  .ngx-pagination li {\n    display: inline-block; }\n  .ngx-pagination a,\n  .ngx-pagination button {\n    color: #0a0a0a; \n    display: block;\n    padding: 0.1875rem 0.625rem;\n    border-radius: 0; }\n    .ngx-pagination a:hover,\n    .ngx-pagination button:hover {\n      background: #e6e6e6; }\n  .ngx-pagination .current {\n    padding: 0.1875rem 0.625rem;\n    background: #2199e8;\n    color: #fefefe;\n    cursor: default; }\n  .ngx-pagination .disabled {\n    padding: 0.1875rem 0.625rem;\n    color: #cacaca;\n    cursor: default; } \n    .ngx-pagination .disabled:hover {\n      background: transparent; }\n  .ngx-pagination a, .ngx-pagination button {\n    cursor: pointer; }\n\n.ngx-pagination .pagination-previous a::before,\n.ngx-pagination .pagination-previous.disabled::before { \n  content: '\u00AB';\n  display: inline-block;\n  margin-right: 0.5rem; }\n\n.ngx-pagination .pagination-next a::after,\n.ngx-pagination .pagination-next.disabled::after {\n  content: '\u00BB';\n  display: inline-block;\n  margin-left: 0.5rem; }\n\n.ngx-pagination .show-for-sr {\n  position: absolute !important;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0); }\n.ngx-pagination .small-screen {\n  display: none; }\n@media screen and (max-width: 601px) {\n  .ngx-pagination.responsive .small-screen {\n    display: inline-block; } \n  .ngx-pagination.responsive li:not(.small-screen):not(.pagination-previous):not(.pagination-next) {\n    display: none; }\n}\n  ";

var __decorate$2 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$1 = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function coerceToBoolean(input) {
    return !!input && input !== 'false';
}
/**
 * The default pagination controls component. Actually just a default implementation of a custom template.
 */
var PaginationControlsComponent = /** @class */ (function () {
    function PaginationControlsComponent() {
        this.maxSize = 7;
        this.previousLabel = 'Previous';
        this.nextLabel = 'Next';
        this.screenReaderPaginationLabel = 'Pagination';
        this.screenReaderPageLabel = 'page';
        this.screenReaderCurrentLabel = "You're on page";
        this.pageChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.pageBoundsCorrection = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this._directionLinks = true;
        this._autoHide = false;
        this._responsive = false;
    }
    Object.defineProperty(PaginationControlsComponent.prototype, "directionLinks", {
        get: function () {
            return this._directionLinks;
        },
        set: function (value) {
            this._directionLinks = coerceToBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginationControlsComponent.prototype, "autoHide", {
        get: function () {
            return this._autoHide;
        },
        set: function (value) {
            this._autoHide = coerceToBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginationControlsComponent.prototype, "responsive", {
        get: function () {
            return this._responsive;
        },
        set: function (value) {
            this._responsive = coerceToBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    __decorate$2([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata$1("design:type", String)
    ], PaginationControlsComponent.prototype, "id", void 0);
    __decorate$2([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata$1("design:type", Number)
    ], PaginationControlsComponent.prototype, "maxSize", void 0);
    __decorate$2([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata$1("design:type", Boolean),
        __metadata$1("design:paramtypes", [Boolean])
    ], PaginationControlsComponent.prototype, "directionLinks", null);
    __decorate$2([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata$1("design:type", Boolean),
        __metadata$1("design:paramtypes", [Boolean])
    ], PaginationControlsComponent.prototype, "autoHide", null);
    __decorate$2([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata$1("design:type", Boolean),
        __metadata$1("design:paramtypes", [Boolean])
    ], PaginationControlsComponent.prototype, "responsive", null);
    __decorate$2([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata$1("design:type", String)
    ], PaginationControlsComponent.prototype, "previousLabel", void 0);
    __decorate$2([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata$1("design:type", String)
    ], PaginationControlsComponent.prototype, "nextLabel", void 0);
    __decorate$2([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata$1("design:type", String)
    ], PaginationControlsComponent.prototype, "screenReaderPaginationLabel", void 0);
    __decorate$2([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata$1("design:type", String)
    ], PaginationControlsComponent.prototype, "screenReaderPageLabel", void 0);
    __decorate$2([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata$1("design:type", String)
    ], PaginationControlsComponent.prototype, "screenReaderCurrentLabel", void 0);
    __decorate$2([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata$1("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], PaginationControlsComponent.prototype, "pageChange", void 0);
    __decorate$2([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata$1("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], PaginationControlsComponent.prototype, "pageBoundsCorrection", void 0);
    PaginationControlsComponent = __decorate$2([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pagination-controls',
            template: DEFAULT_TEMPLATE,
            styles: [DEFAULT_STYLES],
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        })
    ], PaginationControlsComponent);
    return PaginationControlsComponent;
}());

var __decorate$3 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$2 = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * This directive is what powers all pagination controls components, including the default one.
 * It exposes an API which is hooked up to the PaginationService to keep the PaginatePipe in sync
 * with the pagination controls.
 */
var PaginationControlsDirective = /** @class */ (function () {
    function PaginationControlsDirective(service, changeDetectorRef) {
        var _this = this;
        this.service = service;
        this.changeDetectorRef = changeDetectorRef;
        this.maxSize = 7;
        this.pageChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.pageBoundsCorrection = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.pages = [];
        this.changeSub = this.service.change
            .subscribe(function (id) {
            if (_this.id === id) {
                _this.updatePageLinks();
                _this.changeDetectorRef.markForCheck();
                _this.changeDetectorRef.detectChanges();
            }
        });
    }
    PaginationControlsDirective.prototype.ngOnInit = function () {
        if (this.id === undefined) {
            this.id = this.service.defaultId();
        }
        this.updatePageLinks();
    };
    PaginationControlsDirective.prototype.ngOnChanges = function (changes) {
        this.updatePageLinks();
    };
    PaginationControlsDirective.prototype.ngOnDestroy = function () {
        this.changeSub.unsubscribe();
    };
    /**
     * Go to the previous page
     */
    PaginationControlsDirective.prototype.previous = function () {
        this.checkValidId();
        this.setCurrent(this.getCurrent() - 1);
    };
    /**
     * Go to the next page
     */
    PaginationControlsDirective.prototype.next = function () {
        this.checkValidId();
        this.setCurrent(this.getCurrent() + 1);
    };
    /**
     * Returns true if current page is first page
     */
    PaginationControlsDirective.prototype.isFirstPage = function () {
        return this.getCurrent() === 1;
    };
    /**
     * Returns true if current page is last page
     */
    PaginationControlsDirective.prototype.isLastPage = function () {
        return this.getLastPage() === this.getCurrent();
    };
    /**
     * Set the current page number.
     */
    PaginationControlsDirective.prototype.setCurrent = function (page) {
        this.pageChange.emit(page);
    };
    /**
     * Get the current page number.
     */
    PaginationControlsDirective.prototype.getCurrent = function () {
        return this.service.getCurrentPage(this.id);
    };
    /**
     * Returns the last page number
     */
    PaginationControlsDirective.prototype.getLastPage = function () {
        var inst = this.service.getInstance(this.id);
        if (inst.totalItems < 1) {
            // when there are 0 or fewer (an error case) items, there are no "pages" as such,
            // but it makes sense to consider a single, empty page as the last page.
            return 1;
        }
        return Math.ceil(inst.totalItems / inst.itemsPerPage);
    };
    PaginationControlsDirective.prototype.getTotalItems = function () {
        return this.service.getInstance(this.id).totalItems;
    };
    PaginationControlsDirective.prototype.checkValidId = function () {
        if (this.service.getInstance(this.id).id == null) {
            console.warn("PaginationControlsDirective: the specified id \"" + this.id + "\" does not match any registered PaginationInstance");
        }
    };
    /**
     * Updates the page links and checks that the current page is valid. Should run whenever the
     * PaginationService.change stream emits a value matching the current ID, or when any of the
     * input values changes.
     */
    PaginationControlsDirective.prototype.updatePageLinks = function () {
        var _this = this;
        var inst = this.service.getInstance(this.id);
        var correctedCurrentPage = this.outOfBoundCorrection(inst);
        if (correctedCurrentPage !== inst.currentPage) {
            setTimeout(function () {
                _this.pageBoundsCorrection.emit(correctedCurrentPage);
                _this.pages = _this.createPageArray(inst.currentPage, inst.itemsPerPage, inst.totalItems, _this.maxSize);
            });
        }
        else {
            this.pages = this.createPageArray(inst.currentPage, inst.itemsPerPage, inst.totalItems, this.maxSize);
        }
    };
    /**
     * Checks that the instance.currentPage property is within bounds for the current page range.
     * If not, return a correct value for currentPage, or the current value if OK.
     */
    PaginationControlsDirective.prototype.outOfBoundCorrection = function (instance) {
        var totalPages = Math.ceil(instance.totalItems / instance.itemsPerPage);
        if (totalPages < instance.currentPage && 0 < totalPages) {
            return totalPages;
        }
        else if (instance.currentPage < 1) {
            return 1;
        }
        return instance.currentPage;
    };
    /**
     * Returns an array of Page objects to use in the pagination controls.
     */
    PaginationControlsDirective.prototype.createPageArray = function (currentPage, itemsPerPage, totalItems, paginationRange) {
        // paginationRange could be a string if passed from attribute, so cast to number.
        paginationRange = +paginationRange;
        var pages = [];
        var totalPages = Math.ceil(totalItems / itemsPerPage);
        var halfWay = Math.ceil(paginationRange / 2);
        var isStart = currentPage <= halfWay;
        var isEnd = totalPages - halfWay < currentPage;
        var isMiddle = !isStart && !isEnd;
        var ellipsesNeeded = paginationRange < totalPages;
        var i = 1;
        while (i <= totalPages && i <= paginationRange) {
            var label = void 0;
            var pageNumber = this.calculatePageNumber(i, currentPage, paginationRange, totalPages);
            var openingEllipsesNeeded = (i === 2 && (isMiddle || isEnd));
            var closingEllipsesNeeded = (i === paginationRange - 1 && (isMiddle || isStart));
            if (ellipsesNeeded && (openingEllipsesNeeded || closingEllipsesNeeded)) {
                label = '...';
            }
            else {
                label = pageNumber;
            }
            pages.push({
                label: label,
                value: pageNumber
            });
            i++;
        }
        return pages;
    };
    /**
     * Given the position in the sequence of pagination links [i],
     * figure out what page number corresponds to that position.
     */
    PaginationControlsDirective.prototype.calculatePageNumber = function (i, currentPage, paginationRange, totalPages) {
        var halfWay = Math.ceil(paginationRange / 2);
        if (i === paginationRange) {
            return totalPages;
        }
        else if (i === 1) {
            return i;
        }
        else if (paginationRange < totalPages) {
            if (totalPages - halfWay < currentPage) {
                return totalPages - paginationRange + i;
            }
            else if (halfWay < currentPage) {
                return currentPage - halfWay + i;
            }
            else {
                return i;
            }
        }
        else {
            return i;
        }
    };
    __decorate$3([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata$2("design:type", String)
    ], PaginationControlsDirective.prototype, "id", void 0);
    __decorate$3([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata$2("design:type", Number)
    ], PaginationControlsDirective.prototype, "maxSize", void 0);
    __decorate$3([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata$2("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], PaginationControlsDirective.prototype, "pageChange", void 0);
    __decorate$3([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata$2("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], PaginationControlsDirective.prototype, "pageBoundsCorrection", void 0);
    PaginationControlsDirective = __decorate$3([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: 'pagination-template,[pagination-template]',
            exportAs: 'paginationApi'
        }),
        __metadata$2("design:paramtypes", [PaginationService,
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]])
    ], PaginationControlsDirective);
    return PaginationControlsDirective;
}());

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var NgxPaginationModule = /** @class */ (function () {
    function NgxPaginationModule() {
    }
    NgxPaginationModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]],
            declarations: [
                PaginatePipe,
                PaginationControlsComponent,
                PaginationControlsDirective
            ],
            providers: [PaginationService],
            exports: [PaginatePipe, PaginationControlsComponent, PaginationControlsDirective]
        })
    ], NgxPaginationModule);
    return NgxPaginationModule;
}());

/**
 * Generated bundle index. Do not edit.
 */




/***/ })

});
//# sourceMappingURL=0.js.map