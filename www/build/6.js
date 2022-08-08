webpackJsonp([6],{

/***/ 868:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsDetailPopoverPageModule", function() { return NewsDetailPopoverPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__news_detail_popover__ = __webpack_require__(893);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NewsDetailPopoverPageModule = /** @class */ (function () {
    function NewsDetailPopoverPageModule() {
    }
    NewsDetailPopoverPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__news_detail_popover__["a" /* NewsDetailPopoverPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__news_detail_popover__["a" /* NewsDetailPopoverPage */]),
            ],
        })
    ], NewsDetailPopoverPageModule);
    return NewsDetailPopoverPageModule;
}());

//# sourceMappingURL=news-detail-popover.module.js.map

/***/ }),

/***/ 893:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsDetailPopoverPage; });
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



/**
 * Generated class for the NewsDetalPopoverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NewsDetailPopoverPage = /** @class */ (function () {
    function NewsDetailPopoverPage(global, viewCtrl, navCtrl, navParams) {
        this.global = global;
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    NewsDetailPopoverPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NewsDetalPopoverPage');
    };
    NewsDetailPopoverPage.prototype.ionViewWillEnter = function () {
        this.currentNewsPiece = this.navParams.get('news');
    };
    NewsDetailPopoverPage.prototype.closeNewsDetailDialog = function () {
        this.viewCtrl.dismiss();
    };
    NewsDetailPopoverPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-news-detail-popover',template:/*ion-inline-start:"C:\Users\HoangN\Desktop\ionic\vietnamargo\src\pages\news-detal-popover\news-detail-popover.html"*/'\n<ion-content no-padding>\n  <div style="margin:auto">\n    <!-- <div (click)="closeNewsDetailDialog()" id="closeBtn">X</div> -->\n    <button ion-button round style="padding:20px; float:right; margin:10px;" (click)="closeNewsDetailDialog()">X</button>\n  </div>\n    <div *ngIf="currentNewsPiece!=null">\n      <ion-grid class="desktopGrid">\n        <ion-row>\n          <ion-col style="width:60%">\n            <ion-slides autoplay="3000" loop="true" pager="true" paginationType="bullets"\n              style="width: 100%; height:70vh">\n              <ion-slide *ngFor="let media of currentNewsPiece.mediaList">\n                <img loading="lazy" *ngIf="!global.isVideoCheck(media)" [src]="media"\n                  style="width: 100%; height:100%; object-fit: cover;" />\n                <div *ngIf="global.isVideoCheck(media)" class="video-container">\n                  <video oncanplay="this.muted=true" autoplay loop>\n                    <source [src]="media" type="video/mp4" />\n                  </video>\n                </div>\n              </ion-slide>\n            </ion-slides>\n          </ion-col>\n          <ion-col style="width:40%">\n            <h2 style="font-weight: bold;">{{currentNewsPiece.title}}</h2>\n            <h4 style="font-style: italic;">{{currentNewsPiece.shortDescription}}</h4>\n            <p style="color: tomato;"><small>Ngày đăng: {{currentNewsPiece.lastUpdated.date}}</small></p>\n            <p style="margin-top: 20px;">{{currentNewsPiece.detail}}</p>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n\n      <ion-grid class="mobileGrid">\n          <ion-col style="width:60%">\n            <ion-row>\n              <ion-slides autoplay="3000" loop="true" pager="true" paginationType="bullets"\n              style="width: 100%; height:70vh">\n              <ion-slide *ngFor="let media of currentNewsPiece.mediaList">\n                <img loading="lazy" *ngIf="!global.isVideoCheck(media)" [src]="media"\n                  style="width: 100%; height:100%; object-fit: cover;" />\n                <div *ngIf="global.isVideoCheck(media)" class="video-container">\n                  <video oncanplay="this.muted=true" autoplay loop>\n                    <source [src]="media" type="video/mp4" />\n                  </video>\n                </div>\n              </ion-slide>\n            </ion-slides>\n            </ion-row>\n            <ion-row>\n              <ion-col style="width:40%">\n                <h2 id="newsTitle" style="font-weight: bold;">{{currentNewsPiece.title}}</h2>\n                <h4 id="newsDescription" style="font-style: italic;">{{currentNewsPiece.shortDescription}}</h4>\n                <p id="newsDate" style="color: tomato;"><small>Ngày đăng: {{currentNewsPiece.lastUpdated.date}}</small></p>\n                <p id="newsDetail" style="margin-top: 20px;">{{currentNewsPiece.detail}}</p>\n              </ion-col>\n            </ion-row>         \n          </ion-col>\n    \n      </ion-grid>\n    </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\HoangN\Desktop\ionic\vietnamargo\src\pages\news-detal-popover\news-detail-popover.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_globalhero_globalhero__["a" /* GlobalheroProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], NewsDetailPopoverPage);
    return NewsDetailPopoverPage;
}());

//# sourceMappingURL=news-detail-popover.js.map

/***/ })

});
//# sourceMappingURL=6.js.map