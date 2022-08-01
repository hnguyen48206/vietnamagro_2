webpackJsonp([9],{

/***/ 860:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminPageModule", function() { return AdminPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__admin__ = __webpack_require__(884);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AdminPageModule = /** @class */ (function () {
    function AdminPageModule() {
    }
    AdminPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__admin__["a" /* AdminPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__admin__["a" /* AdminPage */]),
            ],
        })
    ], AdminPageModule);
    return AdminPageModule;
}());

//# sourceMappingURL=admin.module.js.map

/***/ }),

/***/ 884:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_firebase_services_firebase_services__ = __webpack_require__(204);
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
 * Generated class for the AdminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AdminPage = /** @class */ (function () {
    function AdminPage(menuCtrl, global, fbProvider, navCtrl, navParams) {
        this.menuCtrl = menuCtrl;
        this.global = global;
        this.fbProvider = fbProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AdminPage.prototype.sideMenuTrigger = function () {
        this.menuCtrl.open();
    };
    AdminPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AdminPage');
    };
    AdminPage.prototype.ionViewWillEnter = function () {
    };
    AdminPage.prototype.isPageActive = function (pageName) {
        return this.navCtrl.getActive().id === pageName || this.navCtrl.getActive().name === pageName;
    };
    AdminPage.prototype.openPage = function (id) {
        console.log(id);
        switch (id) {
            case 'home':
                console.log(this.isPageActive('AdminPage'));
                if (!this.isPageActive('AdminPage')) {
                    this.navCtrl.setRoot('AdminPage');
                }
                this.menuCtrl.close();
                break;
            case 'aboutus':
                console.log(this.isPageActive('AdminAboutusPage'));
                if (!this.isPageActive('AdminAboutusPage')) {
                    this.navCtrl.push('AdminAboutusPage');
                }
                this.menuCtrl.close();
                break;
            case 'products':
                console.log(this.isPageActive('AdminProductsPage'));
                if (!this.isPageActive('AdminProductsPage')) {
                    this.navCtrl.push('AdminProductsPage');
                }
                this.menuCtrl.close();
                break;
            case 'news':
                console.log(this.isPageActive('AdminNewsPage'));
                if (!this.isPageActive('AdminNewsPage')) {
                    this.navCtrl.push('AdminNewsPage');
                }
                this.menuCtrl.close();
                break;
            case 'process':
                console.log(this.isPageActive('AdminProcessPage'));
                if (!this.isPageActive('AdminProcessPage')) {
                    this.navCtrl.push('AdminProcessPage');
                }
                this.menuCtrl.close();
                break;
            case 'supplier':
                console.log(this.isPageActive('AdminSupplierPage'));
                if (!this.isPageActive('AdminSupplierPage')) {
                    this.navCtrl.push('AdminSupplierPage');
                }
                this.menuCtrl.close();
                break;
            case 'customer':
                console.log(this.isPageActive('AdminCustomerCommentsPage'));
                if (!this.isPageActive('AdminCustomerCommentsPage')) {
                    this.navCtrl.push('AdminCustomerCommentsPage');
                }
                this.menuCtrl.close();
                break;
            case 'contact':
                console.log(this.isPageActive('AdminContactPage'));
                if (!this.isPageActive('AdminContactPage')) {
                    this.navCtrl.push('AdminContactPage');
                }
                this.menuCtrl.close();
                break;
        }
    };
    AdminPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-admin',template:/*ion-inline-start:"C:\Users\HoangN\Downloads\vietnamargo_final\vietnamargo\src\pages\admin\admin.html"*/'<ion-header no-border>\n  <ion-item no-lines>\n    <img loading="lazy" class="sidemenuIcon" item-start src="imgs/sidemenu.png" *ngIf="global.isLogin" (click)="sideMenuTrigger()" />\n    TRANG QUẢN TRỊ <button item-end ion-button *ngIf="global.isLogin" color="danger"\n      (click)="fbProvider.logout()">Logout</button>\n  </ion-item>\n</ion-header>\n\n<ion-content padding class="adminBG">\n  <div *ngIf="global.isLogin" class="settingsHome">\n    <ion-grid>\n      <ion-row>\n        <ion-col (click)="openPage(item.id)" text-center *ngFor="let item of global.listOfSettings">\n          <img loading="lazy" [src]="item.icon" />\n          <h4>{{item.name}}</h4>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n  <div *ngIf="!global.isLogin" class="loginForm">\n    <ion-item (click)="fbProvider.login()" no-lines text-center text-wrap>\n      <img loading="lazy" style=\'vertical-align:middle; width:30px; margin-right: 15px\' src=\'imgs/google.png\'>\n      <div style=\'vertical-align:middle; display:inline;\'>\n        Đăng nhập với Google</div>\n    </ion-item>\n  </div>\n</ion-content>'/*ion-inline-end:"C:\Users\HoangN\Downloads\vietnamargo_final\vietnamargo\src\pages\admin\admin.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */], __WEBPACK_IMPORTED_MODULE_3__providers_globalhero_globalhero__["a" /* GlobalheroProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_firebase_services_firebase_services__["a" /* FirebaseServicesProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], AdminPage);
    return AdminPage;
}());

//# sourceMappingURL=admin.js.map

/***/ })

});
//# sourceMappingURL=9.js.map