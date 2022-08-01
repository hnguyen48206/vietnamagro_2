webpackJsonp([18],{

/***/ 851:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminCustomerCommentsPageModule", function() { return AdminCustomerCommentsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__admin_customer_comments__ = __webpack_require__(875);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_datatable__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_datatable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AdminCustomerCommentsPageModule = /** @class */ (function () {
    function AdminCustomerCommentsPageModule() {
    }
    AdminCustomerCommentsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__admin_customer_comments__["a" /* AdminCustomerCommentsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__admin_customer_comments__["a" /* AdminCustomerCommentsPage */]),
                __WEBPACK_IMPORTED_MODULE_3_angular2_datatable__["DataTableModule"]
            ],
        })
    ], AdminCustomerCommentsPageModule);
    return AdminCustomerCommentsPageModule;
}());

//# sourceMappingURL=admin-customer-comments.module.js.map

/***/ }),

/***/ 875:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminCustomerCommentsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_globalhero_globalhero__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_firebase_services_firebase_services__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_firebase_services_customerFirebaseController__ = __webpack_require__(384);
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
 * Generated class for the AdminCustomerCommentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AdminCustomerCommentsPage = /** @class */ (function () {
    function AdminCustomerCommentsPage(customerFirebaseController, sanitizer, alertCtrl, fbservices, global, menuCrtl, navCtrl, navParams) {
        this.customerFirebaseController = customerFirebaseController;
        this.sanitizer = sanitizer;
        this.alertCtrl = alertCtrl;
        this.fbservices = fbservices;
        this.global = global;
        this.menuCrtl = menuCrtl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.currentItemToGetDetail = null;
        this.listOfComments = [];
        this.showDetail = false;
    }
    AdminCustomerCommentsPage.prototype.sideMenuTrigger = function () {
        this.menuCrtl.open();
    };
    AdminCustomerCommentsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AdminCustomerCommentsPage');
    };
    AdminCustomerCommentsPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.customerFirebaseController.getAllComments().then(function (res) {
            console.log(res);
            var result = res;
            if (result.hasContent) {
                _this.listOfComments = result.data;
            }
        });
    };
    AdminCustomerCommentsPage.prototype.openShowDetail = function () {
        this.showDetail = true;
    };
    AdminCustomerCommentsPage.prototype.closeShowDetail = function () {
        var _this = this;
        this.showDetail = false;
        if (!this.currentItemToGetDetail.status) {
            this.customerFirebaseController.updateCommentStatus(this.currentItemToGetDetail.id, true).then(function (res) {
                _this.ionViewWillEnter();
            }).catch(function (err) {
            });
        }
    };
    AdminCustomerCommentsPage.prototype.viewItem = function (item) {
        this.currentItemToGetDetail = item;
        this.openShowDetail();
    };
    AdminCustomerCommentsPage.prototype.deleteItem = function (item) {
        var _this = this;
        this.global.presentLoading('');
        this.customerFirebaseController.deleteComment(item.id).then(function (res) {
            _this.global.dismissLoading();
            _this.ionViewWillEnter();
        }).catch(function (err) {
            _this.global.dismissLoading();
        });
    };
    AdminCustomerCommentsPage.prototype.createComment = function () {
        var mail = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        this.customerFirebaseController.createComment({
            status: false,
            lastUpdated: this.global.getCurrentDateandTime(),
            email: 'p8sm9lq9tagdsint0lteza',
            name: 'abc',
            phone: '090000900',
            content: ['kghkghhjkhkjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj']
        });
    };
    AdminCustomerCommentsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-admin-customer-comments',template:/*ion-inline-start:"C:\Users\HoangN\Downloads\vietnamargo_final\vietnamargo\src\pages\admin-customer-comments\admin-customer-comments.html"*/'  <ion-header *ngIf="global.isLogin" no-border>\n    <ion-item no-lines>\n      <img loading="lazy" class="sidemenuIcon" item-start src="imgs/sidemenu.png" (click)="sideMenuTrigger()" />\n      Contacts Khách Hàng\n    </ion-item>\n  </ion-header>\n\n<ion-content padding class="adminBG">\n\n  <div *ngIf="!global.isLogin" class="noLoginMessage">\n    <ion-item (click)="goHome()" no-lines text-center text-wrap>\n      <img loading="lazy" style=\'vertical-align:middle; width:30px; margin-right: 15px\' src=\'imgs/home.png\'>\n      <div style=\'vertical-align:middle; display:inline;\'>\n        Bạn chưa đăng nhập hệ thống. Vui lòng đăng nhập trước khi sử dụng tính năng này.</div>\n    </ion-item>\n  </div>\n\n\n  <div *ngIf="global.isLogin && !showDetail" class="dataGrid">\n    <div class="row margintop20px paddingtopbottom15px whitebackground">\n      <div class="col-12">\n        <div class="table-responsive">\n          <table class="table table-striped table-hover table-bordered " [mfData]="listOfComments" #mf="mfDataTable"\n            [mfRowsOnPage]="10">\n            <thead>\n              <tr>\n                <th style="width:40px;max-width:40px;">#</th>\n                <th>\n                  <mfDefaultSorter by="status">Trạng thái</mfDefaultSorter>\n                </th>\n                <th>\n                  <mfDefaultSorter by="email">Email</mfDefaultSorter>\n                </th>\n                <th>\n                  <mfDefaultSorter by="name">Họ tên</mfDefaultSorter>\n                </th>\n                <th>\n                  <mfDefaultSorter by="phone">Số điện thoại</mfDefaultSorter>\n                </th>\n                <th>\n                  <mfDefaultSorter by="content">Nội dung</mfDefaultSorter>\n                </th>\n                <th>\n                  <mfDefaultSorter by="lastUpdated.date">Ngày cập nhật</mfDefaultSorter>\n                </th>\n                <th>\n                </th>\n              </tr>\n            </thead>\n            <tbody>\n              <ng-container *ngFor="let item of mf.data; let i = index;">\n                <tr>\n                  <td style="vertical-align: middle;" scope="row">{{i+1}}</td>\n                  <td *ngIf="item.status" style="vertical-align: middle;">đã đọc</td>\n                  <td *ngIf="!item.status" style="vertical-align: middle;">chưa đọc</td>\n                  <td style="vertical-align: middle;">{{item.email}}</td>\n                  <td style="vertical-align: middle;">{{item.name}}</td>\n                  <td style="vertical-align: middle;">{{item.phone}}</td>\n                  <td style="vertical-align: middle; max-width: 200px;">\n                  <p style=" -webkit-box-orient: vertical;\n                  display: -webkit-box;\n                  -webkit-line-clamp: 2;\n                  overflow: hidden;\n                  text-overflow: ellipsis;\n                  white-space: normal;">\n                   {{item.content[0]}}</p></td>\n                  <td style="vertical-align: middle;">{{item.lastUpdated.date}}</td>\n                  <td>\n                    <ion-item style="background:transparent" no-padding no-lines text-center>\n                      <img loading="lazy" (click)="viewItem(item)" src="imgs/view.png" style="width:20px; margin-right:10%" />\n                      <img loading="lazy" (click)="deleteItem(item)" src="imgs/delete.png" style="width:20px" />\n                    </ion-item>\n                  </td>\n                </tr>\n              </ng-container>\n            </tbody>\n            <tfoot>\n              <tr>\n                <td colspan="4">\n                  <mfBootstrapPaginator></mfBootstrapPaginator>\n                </td>\n              </tr>\n            </tfoot>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div *ngIf="global.isLogin && showDetail" class="addItemWrapper">\n    <div style="width: 100%; margin-bottom: 3%;">\n      <img loading="lazy" (click)="closeShowDetail()" src="imgs/close.png" style="width: 30px; float:left" />\n    </div>\n\n    <ion-item text-wrap no-lines text-center><h4><b>Thông tin người gửi</b></h4></ion-item>\n    <ion-item text-wrap no-lines><b>Email:</b> {{currentItemToGetDetail.email}}</ion-item>\n    <ion-item text-wrap no-lines><b>Họ và tên:</b> {{currentItemToGetDetail.name}}</ion-item>\n    <ion-item text-wrap no-lines><b>Số điện thoại:</b> {{currentItemToGetDetail.phone}}</ion-item>\n    <ion-item text-wrap no-lines><b>Lần cập nhật cuối:</b> {{currentItemToGetDetail.lastUpdated.date}}</ion-item>\n    <ion-item text-wrap no-lines><b>Nội dung:</b> \n      <div style="margin-top:10px;padding:10px; border-radius:15px; border:solid lightblue 1px" *ngFor="let message of currentItemToGetDetail.content">{{message}}</div>\n    </ion-item>\n\n  </div>\n<!-- <button ion-button block (click)="createComment()"></button> -->\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\HoangN\Downloads\vietnamargo_final\vietnamargo\src\pages\admin-customer-comments\admin-customer-comments.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__providers_firebase_services_customerFirebaseController__["a" /* customerFirebaseController */],
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__providers_firebase_services_firebase_services__["a" /* FirebaseServicesProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_globalhero_globalhero__["a" /* GlobalheroProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], AdminCustomerCommentsPage);
    return AdminCustomerCommentsPage;
}());

//# sourceMappingURL=admin-customer-comments.js.map

/***/ })

});
//# sourceMappingURL=18.js.map