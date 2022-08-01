webpackJsonp([7],{

/***/ 867:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(892);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]),
            ],
        })
    ], HomePageModule);
    return HomePageModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 892:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_globalhero_globalhero__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, global) {
        this.navCtrl = navCtrl;
        this.global = global;
    }
    HomePage.prototype.goToAdmin = function () {
        this.navCtrl.setRoot('AdminPage');
    };
    HomePage.prototype.goToSite = function (site) {
        this.global.userSiteSetting.currentChosenSite = site;
        this.navCtrl.push('HomeProductHomePage', { site: site });
    };
    HomePage.prototype.ionViewWillEnter = function () {
        this.global.userSiteSetting.currentChosenSite = '';
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\HoangN\Desktop\ionic\vietnamargo\src\pages\home\home.html"*/'<ion-content no-padding class="homeBG">\n  <div class="logoHeader">\n    <img loading="lazy" src="imgs/sitelogo.png" />\n    <!-- GTranslate: https://gtranslate.io/ -->\n    <div style="float: right; margin-right:2%">\n      <a href="#" onclick="doGTranslate(\'vi|zh-CN\');return false;" title="Chinese (Simplified)" class="gflag nturl" style="background-position:-300px -0px;"><img src="//gtranslate.net/flags/blank.png" height="32" width="32" alt="Chinese (Simplified)" /></a><a href="#" onclick="doGTranslate(\'vi|en\');return false;" title="English" class="gflag nturl" style="background-position:-0px -0px;"><img src="//gtranslate.net/flags/blank.png" height="32" width="32" alt="English" /></a><a href="#" onclick="doGTranslate(\'vi|es\');return false;" title="Spanish" class="gflag nturl" style="background-position:-600px -200px;"><img src="//gtranslate.net/flags/blank.png" height="32" width="32" alt="Spanish" /></a><a href="#" onclick="doGTranslate(\'vi|vi\');return false;" title="Vietnamese" class="gflag nturl" style="background-position:-200px -400px;"><img src="//gtranslate.net/flags/blank.png" height="32" width="32" alt="Vietnamese" /></a>\n      </div>\n    <div id="google_translate_element2"></div>\n    </div>\n  <div class="catergoriesCards">\n    <ion-grid no-padding>\n      <ion-row>\n        <ion-col (click)="goToSite(\'rice\')" class="cardItem" align-self-center>\n          <div class="card__background"\n            style="background-image: url(https://wallpaperboat.com/wp-content/uploads/2019/11/rice-03.jpg)"></div>\n          <div class="card__content">\n            <h3 class="card__heading">Gạo</h3>\n          </div>\n        </ion-col>\n        <ion-col (click)="goToSite(\'coconut\')" class="cardItem" align-self-center>\n          <div class="card__background"\n            style="background-image: url(https://fsb.zobj.net/crop.php?r=aU3ZycspSgrwKk0NIQpaWd2A1bRdm-V3LRPAIJinkerLwDcXnqqDcSOmJF0YZSm-5Dvz7O8ade_DOTMIFHiRlPTBZJyUYgbAj_3M6MDMEp0L3ADSqhIgbVfZDdsDwJQxMGyJI-Y0lbK6iPNI)">\n          </div>\n          <div class="card__content">\n            <h3 class="card__heading">Dừa Update build</h3>\n          </div>\n        </ion-col>\n        <ion-col (click)="goToSite(\'services\')" class="cardItem" align-self-center>\n          <div class="card__background"\n            style="background-image: url(https://exponentialfreight.co.za/images/slider/slide-3.jpg)"></div>\n          <div class="card__content">\n            <h3 class="card__heading">Dịch Vụ</h3>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n  <ion-item no-lines text-center text-wrap class="creditline">\n    Chào mừng đến với VietNam Agro\n    <br>\n    Copyright © 2020 Vietnamagro. All rights reserved. Design by HoangN\n  </ion-item>\n</ion-content>\n\n\n<!-- <ion-footer>\n  <button ion-button (click)=goToAdmin()>Admin</button>\n</ion-footer> -->'/*ion-inline-end:"C:\Users\HoangN\Desktop\ionic\vietnamargo\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_globalhero_globalhero__["a" /* GlobalheroProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=7.js.map