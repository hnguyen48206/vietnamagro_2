webpackJsonp([21],{

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirebaseServicesProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return firebaseConfig; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_fire_firestore__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_fire_auth__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_fire_storage__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase_app__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__globalhero_globalhero__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_operators__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_map__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










/*
  Generated class for the FirebaseServicesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var FirebaseServicesProvider = /** @class */ (function () {
    function FirebaseServicesProvider(storage, global, http, fsstorage, afs, auth) {
        this.storage = storage;
        this.global = global;
        this.http = http;
        this.fsstorage = fsstorage;
        this.afs = afs;
        this.auth = auth;
        console.log('Hello FirebaseServicesProvider Provider');
    }
    //Users Operations
    FirebaseServicesProvider.prototype.login = function () {
        var _this = this;
        this.auth.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_5_firebase_app__["auth"].GoogleAuthProvider())
            .then(function (res) {
            console.log(res);
            var result = res;
            _this.checkIfThisUserExist(result.additionalUserInfo.profile.email);
        })
            .catch(function (err) {
            console.log(err);
            _this.global.presentToast('Đã có lỗi khi kết nối với hệ thống. Vui lòng thử lại sau');
        });
    };
    FirebaseServicesProvider.prototype.checkIfThisUserExist = function (email) {
        var _this = this;
        console.log(email);
        var collect = this.afs.collection('users');
        var query = collect.ref.where("email", "==", email);
        var self = this;
        query.get().then(function (res) {
            console.log(res);
            if (!res.empty) {
                res.forEach(function (doc) {
                    console.log(doc.id, " => ", doc.data());
                    self.storage.set('currentUserProfile', JSON.stringify(doc.data()));
                });
                _this.global.isLogin = true;
                _this.global.presentToast('Đăng nhập thành công');
            }
            else
                _this.global.presentToast('Tài khoản của bạn không tồn tại trong hệ thống. Vui lòng liên hệ người quản trị.');
        });
    };
    FirebaseServicesProvider.prototype.logout = function () {
        var _this = this;
        this.auth.auth.signOut().then(function (res) {
            console.log(res);
            _this.global.isLogin = false;
            _this.global.presentToast('Đăng xuất thành công');
            _this.storage.set('currentUserProfile', null);
        })
            .catch(function (err) {
            console.log(err);
            _this.global.presentToast('Đã có lỗi khi kết nối với hệ thống. Vui lòng thử lại sau');
        });
    };
    //File Operations
    FirebaseServicesProvider.prototype.fbUploadFiles = function (file, startingPath) {
        var self = this;
        return new Promise(function (resolve, reject) {
            var downloadURL;
            var task;
            // The storage path
            var path = startingPath + "/" + Date.now() + "_" + file.name;
            // Reference to storage bucket
            var ref = self.fsstorage.ref(path);
            // The main task
            task = self.fsstorage.upload(path, file);
            task
                .snapshotChanges()
                .pipe(Object(__WEBPACK_IMPORTED_MODULE_8_rxjs_operators__["finalize"])(function () {
                downloadURL = ref.getDownloadURL();
                downloadURL.subscribe(function (url) {
                    if (url) {
                        //final url
                        resolve(url);
                    }
                }, function (err) {
                    reject(err);
                });
            }))
                .subscribe(function (url) {
                if (url) {
                    //progress
                    // console.log(url);
                }
            });
        });
    };
    FirebaseServicesProvider.prototype.addMediaFileURLToDocumentObject = function (url, collectionID, documentID) {
        var self = this;
        return new Promise(function (resolve, reject) {
            var docRef = self.afs.collection(collectionID).doc(documentID);
            self.afs.firestore.runTransaction(function (transaction) {
                // This code may get re-run multiple times if there are conflicts.
                return transaction.get(docRef.ref).then(function (doc) {
                    if (!doc.data().mediaList) {
                        transaction.update(docRef.ref, { mediaList: [url] });
                    }
                    else {
                        var dataToUpdate = doc.data().mediaList;
                        dataToUpdate.push(url);
                        transaction.update(docRef.ref, { mediaList: dataToUpdate });
                    }
                });
            }).then(function () {
                console.log("Transaction successfully committed!");
                resolve();
            }).catch(function (error) {
                console.log("Transaction failed: ", error);
                reject(error);
            });
        });
    };
    FirebaseServicesProvider.prototype.setMediaArrayToDocument = function (arr, collectionID, documentID) {
        var self = this;
        return new Promise(function (resolve, reject) {
            self.afs
                .collection(collectionID)
                .doc(documentID)
                .update({
                mediaList: arr
            })
                .then(function () {
                console.log('done');
                resolve();
            })
                .catch(function (error) {
                console.error('Error writing document: ', error);
                reject(error);
            });
        });
    };
    FirebaseServicesProvider.prototype.deleteFileFromfbStorage = function (url) {
        var self = this;
        return new Promise(function (resolve, reject) {
            self.fsstorage.storage.refFromURL(url).delete().then(function (res) {
                console.log('Delete Completed');
                resolve(res);
            }).catch(function (err) {
                console.log(err);
                reject(err);
            });
        });
    };
    FirebaseServicesProvider.prototype.getPathStorageFromFileUrl = function (url) {
        var baseUrl = "https://firebasestorage.googleapis.com/v0/b/vietnamargo.appspot.com/o/";
        var imagePath = url.replace(baseUrl, "");
        var indexOfEndPath = imagePath.indexOf("?");
        imagePath = imagePath.substring(0, indexOfEndPath);
        imagePath = imagePath.replace("%2F", "/");
        return imagePath;
    };
    FirebaseServicesProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_6__globalhero_globalhero__["a" /* GlobalheroProvider */], __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_4__angular_fire_storage__["a" /* AngularFireStorage */], __WEBPACK_IMPORTED_MODULE_2__angular_fire_firestore__["a" /* AngularFirestore */], __WEBPACK_IMPORTED_MODULE_3__angular_fire_auth__["a" /* AngularFireAuth */]])
    ], FirebaseServicesProvider);
    return FirebaseServicesProvider;
}());

var firebaseConfig = {
    apiKey: "AIzaSyCxgCyFY_Kaj49Or_Rzolhw4BkKvbkcukU",
    authDomain: "vietnamargo.firebaseapp.com",
    databaseURL: "https://vietnamargo.firebaseio.com",
    projectId: "vietnamargo",
    storageBucket: "vietnamargo.appspot.com",
    messagingSenderId: "610638155321",
    appId: "1:610638155321:web:018638e18338c25ea647e8"
};
//# sourceMappingURL=firebase-services.js.map

/***/ }),

/***/ 236:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 236;

/***/ }),

/***/ 280:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/admin-aboutus/admin-aboutus.module": [
		869,
		20
	],
	"../pages/admin-contact/admin-contact.module": [
		850,
		19
	],
	"../pages/admin-customer-comments/admin-customer-comments.module": [
		851,
		18
	],
	"../pages/admin-news-details/admin-news-details.module": [
		852,
		17
	],
	"../pages/admin-news/admin-news.module": [
		853,
		16
	],
	"../pages/admin-process-detail/admin-process-detail.module": [
		854,
		15
	],
	"../pages/admin-process/admin-process.module": [
		855,
		14
	],
	"../pages/admin-product-detail/admin-product-detail.module": [
		856,
		13
	],
	"../pages/admin-products/admin-products.module": [
		870,
		12
	],
	"../pages/admin-supplier-detail/admin-supplier-detail.module": [
		857,
		11
	],
	"../pages/admin-supplier/admin-supplier.module": [
		858,
		10
	],
	"../pages/admin/admin.module": [
		859,
		9
	],
	"../pages/contact-us-popover/contact-us-popover.module": [
		860,
		8
	],
	"../pages/home-about-us/home-about-us.module": [
		861,
		5
	],
	"../pages/home-contact-us/home-contact-us.module": [
		862,
		4
	],
	"../pages/home-product-detail/home-product-detail.module": [
		863,
		3
	],
	"../pages/home-product-home/home-product-home.module": [
		864,
		2
	],
	"../pages/home-product-news-list/home-product-news-list.module": [
		865,
		0
	],
	"../pages/home-product-process/home-product-process.module": [
		866,
		1
	],
	"../pages/home/home.module": [
		867,
		7
	],
	"../pages/news-detal-popover/news-detail-popover.module": [
		868,
		6
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 280;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalheroProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(38);
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



/*
  Generated class for the GlobalheroProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var GlobalheroProvider = /** @class */ (function () {
    function GlobalheroProvider(popCtrl, loadingCtrl, http, toastCtrl) {
        this.popCtrl = popCtrl;
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.userSiteSetting = {
            currentChosenSite: '',
            dataForHeader: { data: null, updatedTime: null }
        };
        this.lastChosenCatergory = null;
        this.isLogin = false;
        this.listOfSettings = [{
                name: 'Quy Trình',
                icon: 'imgs/process.png',
                id: 'process'
            },
            {
                name: 'Sản Phẩm',
                icon: 'imgs/product.png',
                id: 'products'
            },
            {
                name: 'Nhà Cung Cấp',
                icon: 'imgs/supplier.png',
                id: 'supplier'
            },
            {
                name: 'Tin Tức',
                icon: 'imgs/news.png',
                id: 'news'
            },
            {
                name: 'Contacts Khách Hàng',
                icon: 'imgs/customer.png',
                id: 'customer'
            },
            {
                name: 'About us',
                icon: 'imgs/aboutus.png',
                id: 'aboutus'
            },
            {
                name: 'Liên hệ',
                icon: 'imgs/contact.png',
                id: 'contact'
            }];
        console.log('Hello GlobalheroProvider Provider');
    }
    GlobalheroProvider.prototype.emailValidator = function (email) {
        var re = /^(?:[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
        return re.test(email);
    };
    GlobalheroProvider.prototype.openContactUsPopOver = function () {
        var popover = this.popCtrl.create('ContactUsPopoverPage', {}, { cssClass: 'contactUsPopover' });
        popover.present({
            ev: event, duration: 0
        });
    };
    GlobalheroProvider.prototype.presentToast = function (mess) {
        console.log(mess);
        var toast = this.toastCtrl.create({
            message: mess,
            duration: 3000,
            position: 'bottom'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    GlobalheroProvider.prototype.presentLoading = function (mess) {
        this.loading = this.loadingCtrl.create({
            content: mess
        });
        this.loading.present();
    };
    GlobalheroProvider.prototype.dismissLoading = function () {
        this.loading.dismiss();
    };
    GlobalheroProvider.prototype.findDuplicates = function (data) {
        return Array.from(new Set(data)).filter(function (value) { return data.indexOf(value) !== data.lastIndexOf(value); });
    };
    GlobalheroProvider.prototype.getCurrentDateandTime = function () {
        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        return {
            date: date, time: time
        };
    };
    GlobalheroProvider.prototype.isVideoCheck = function (url) {
        url = url.toLowerCase();
        if (url.includes('mp4') || url.includes('3gp') || url.includes('wmv') || url.includes('wav') || url.includes('mp3') || url.includes('avi') || url.includes('mpg'))
            return true;
        else
            return false;
    };
    GlobalheroProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* ToastController */]])
    ], GlobalheroProvider);
    return GlobalheroProvider;
}());

//# sourceMappingURL=globalhero.js.map

/***/ }),

/***/ 379:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return productsFirebaseController; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_fire_firestore__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__globalhero_globalhero__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__firebase_services__ = __webpack_require__(204);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var productsFirebaseController = /** @class */ (function () {
    function productsFirebaseController(storage, global, http, afs, fbservices) {
        this.storage = storage;
        this.global = global;
        this.http = http;
        this.afs = afs;
        this.fbservices = fbservices;
    }
    productsFirebaseController.prototype.createNews = function (detail, collectionID) {
        var self = this;
        detail.lastUpdated = self.global.getCurrentDateandTime();
        return new Promise(function (resolve, reject) {
            var _this = this;
            var collect = self.afs.collection('products').doc('productsParentDoc').collection(collectionID);
            collect.add(detail).then(function (res) {
                resolve(res.id);
            })
                .catch(function (err) {
                console.log(err);
                reject(err);
                _this.global.presentToast('Đã có lỗi khi kết nối với hệ thống. Vui lòng thử lại sau');
            });
        });
    };
    productsFirebaseController.prototype.updateNews = function (collectionID, newsID, data) {
        console.log(data);
        var self = this;
        return new Promise(function (resolve, reject) {
            self.afs.collection('products').doc('productsParentDoc').collection(collectionID)
                .doc(data.id)
                .update({
                groupName: data.groupName,
                title: data.title,
                detail: data.detail,
                shortDescription: data.shortDescription,
                status: data.status,
                lastUpdated: self.global.getCurrentDateandTime()
            })
                .then(function () {
                console.log('done');
                self.global.presentToast('Cập nhật thành công!');
                resolve();
            })
                .catch(function (error) {
                console.error('Error writing document: ', error);
                self.global.presentToast('Đã có lỗi khi kết nối với hệ thống. Vui lòng thử lại sau');
                reject(error);
            });
        });
    };
    productsFirebaseController.prototype.deleteNews = function (collectionID, newsID) {
        var self = this;
        return new Promise(function (resolve, reject) {
            self.afs.collection('products').doc('productsParentDoc').collection(collectionID)
                .doc(newsID)
                .delete()
                .then(function () {
                console.log('done');
                self.global.presentToast('Đã xóa thành công!');
                resolve();
            })
                .catch(function (error) {
                console.error('Error writing document: ', error);
                self.global.presentToast('Đã có lỗi khi kết nối với hệ thống. Vui lòng thử lại sau');
                reject(error);
            });
        });
    };
    productsFirebaseController.prototype.getAllNewsCatergoriesMetadata = function () {
        var self = this;
        return new Promise(function (resolve, reject) {
            var collect = self.afs.collection('products').doc('productsParentDoc').collection('metadata').doc('metadata');
            var query = collect.ref;
            query.get().then(function (res) {
                console.log(res);
                var result = null;
                if (res.exists) {
                    result = res.data();
                }
                resolve(result);
            })
                .catch(function (err) {
                console.log(err);
                reject(err);
                self.global.presentToast('Đã có lỗi khi kết nối với hệ thống. Vui lòng thử lại sau');
            });
        });
    };
    productsFirebaseController.prototype.getNewsOfCatergory = function (catergoryID, filter) {
        var self = this;
        return new Promise(function (resolve, reject) {
            var _this = this;
            var collect = self.afs.collection('products').doc('productsParentDoc').collection(catergoryID);
            var query;
            if (filter != null)
                query = collect.ref.where('groupName', '==', filter.groupName).where('status', '==', filter.status);
            else
                query = collect.ref;
            query.get().then(function (res) {
                console.log(res);
                var result = {
                    data: [],
                    hasContent: false
                };
                if (!res.empty) {
                    res.forEach(function (doc) {
                        console.log(doc.id, " => ", doc.data());
                        var news = null;
                        news = doc.data();
                        news['id'] = doc.id;
                        doc.data()['id'] = doc.id;
                        result.data.push(news);
                        result.hasContent = true;
                    });
                }
                resolve(result);
            })
                .catch(function (err) {
                console.log(err);
                reject(err);
                _this.global.presentToast('Đã có lỗi khi kết nối với hệ thống. Vui lòng thử lại sau');
            });
        });
    };
    productsFirebaseController.prototype.addNewsMediaFileURLToDocumentObject = function (url, catergoryID, newsID) {
        var self = this;
        return new Promise(function (resolve, reject) {
            var docRef = self.afs.collection('products').doc('productsParentDoc').collection(catergoryID).doc(newsID);
            self.afs.firestore.runTransaction(function (transaction) {
                // This code may get re-run multiple times if there are conflicts.
                return transaction.get(docRef.ref).then(function (doc) {
                    if (!doc.data().mediaList) {
                        transaction.update(docRef.ref, { mediaList: [url] });
                    }
                    else {
                        var dataToUpdate = doc.data().mediaList;
                        dataToUpdate.push(url);
                        transaction.update(docRef.ref, { mediaList: dataToUpdate });
                    }
                });
            }).then(function () {
                console.log("Transaction successfully committed!");
                resolve();
            }).catch(function (error) {
                console.log("Transaction failed: ", error);
                reject(error);
            });
        });
    };
    productsFirebaseController.prototype.setMediaArrayToDocument = function (arr, catergoryID, newsID) {
        var self = this;
        return new Promise(function (resolve, reject) {
            self.afs.collection('products').doc('productsParentDoc').collection(catergoryID).doc(newsID)
                .update({
                mediaList: arr
            })
                .then(function () {
                console.log('done');
                resolve();
            })
                .catch(function (error) {
                console.error('Error writing document: ', error);
                reject(error);
            });
        });
    };
    productsFirebaseController.prototype.createNewItemGroups = function (avatar, groupName, catergoryID) {
        var self = this;
        return new Promise(function (resolve, reject) {
            //Upload the group avatar first
            self.fbservices.fbUploadFiles(avatar, 'products').then(function (url) {
                //url return
                console.log(url);
                var docRef = self.afs.collection('products').doc('productsParentDoc').collection(catergoryID).doc('productGroups');
                self.afs.firestore.runTransaction(function (transaction) {
                    // This code may get re-run multiple times if there are conflicts.
                    var dataToUpdate;
                    return transaction.get(docRef.ref).then(function (doc) {
                        if (!doc.data().data) {
                            var stringtifiedObject = JSON.stringify({
                                groupName: groupName,
                                groupAvatar: url
                            });
                            dataToUpdate = [stringtifiedObject];
                            transaction.update(docRef.ref, { data: dataToUpdate });
                        }
                        else {
                            dataToUpdate = doc.data().data;
                            var stringtifiedObject = JSON.stringify({
                                groupName: groupName,
                                groupAvatar: url
                            });
                            dataToUpdate.push(stringtifiedObject);
                            transaction.update(docRef.ref, { data: dataToUpdate });
                        }
                    });
                }).then(function () {
                    console.log("Transaction successfully committed!");
                    resolve();
                }).catch(function (error) {
                    console.log("Transaction failed: ", error);
                    reject(error);
                });
            }).catch(function (err) {
                console.log(err);
            });
        });
    };
    productsFirebaseController.prototype.updateExistingItemGroup = function (newAvatar, newGroupName, oldGroup, catergoryID) {
        var self = this;
        return new Promise(function (resolve, reject) {
            if (newAvatar != '') {
                //There's a new media file, firstly it will need to be uploaded
                self.fbservices.fbUploadFiles(newAvatar, 'products').then(function (url) {
                    //url return
                    console.log(url);
                    var oldGroupData = JSON.parse(oldGroup);
                    var docRef = self.afs.collection('products').doc('productsParentDoc').collection(catergoryID).doc('productGroups');
                    self.afs.firestore.runTransaction(function (transaction) {
                        return transaction.get(docRef.ref).then(function (doc) {
                            var dataToUpdate = doc.data().data;
                            //add new group then remove old group from the list
                            if (newGroupName == null) {
                                dataToUpdate.push(JSON.stringify({
                                    groupName: oldGroupData.groupName,
                                    groupAvatar: url
                                }));
                            }
                            else {
                                dataToUpdate.push(JSON.stringify({
                                    groupName: newGroupName,
                                    groupAvatar: url
                                }));
                            }
                            if (dataToUpdate.indexOf(oldGroup) >= 0) {
                                dataToUpdate.splice(dataToUpdate.indexOf(oldGroup), 1);
                            }
                            transaction.update(docRef.ref, { data: dataToUpdate });
                        });
                    }).then(function () {
                        console.log("Transaction successfully committed!");
                        //after the list of group has been succesfully updated, delete old media file + update all existing product with the new group name
                        self.fbservices.deleteFileFromfbStorage(oldGroupData.groupAvatar);
                        if (newGroupName != null) {
                            self.updateExistingProductsWithNewGroupName(catergoryID, oldGroupData.groupName, newGroupName).then(function (res) {
                                resolve(res);
                            }).catch(function (err) { return reject(err); });
                        }
                        else {
                            resolve();
                        }
                    }).catch(function (error) {
                        console.log("Transaction failed: ", error);
                        reject(error);
                    });
                }).catch(function (err) {
                    //upload file fail
                    console.log(err);
                    reject(err);
                });
            }
            else {
                debugger;
                //no new media, just update groupname
                var oldGroupData_1 = JSON.parse(oldGroup);
                var docRef_1 = self.afs.collection('products').doc('productsParentDoc').collection(catergoryID).doc('productGroups');
                self.afs.firestore.runTransaction(function (transaction) {
                    return transaction.get(docRef_1.ref).then(function (doc) {
                        var dataToUpdate = doc.data().data;
                        //add new group then remove old group from the list
                        dataToUpdate.push(JSON.stringify({
                            groupName: newGroupName,
                            groupAvatar: oldGroupData_1.groupAvatar
                        }));
                        if (dataToUpdate.indexOf(oldGroup) >= 0) {
                            dataToUpdate.splice(dataToUpdate.indexOf(oldGroup), 1);
                        }
                        transaction.update(docRef_1.ref, { data: dataToUpdate });
                    });
                }).then(function () {
                    console.log("Transaction successfully committed!");
                    //after the list of group has been succesfully updated, delete old media file + update all existing product with the new group name
                    if (newGroupName != null) {
                        self.updateExistingProductsWithNewGroupName(catergoryID, oldGroupData_1.groupName, newGroupName).then(function (res) {
                            resolve(res);
                        }).catch(function (err) { return reject(err); });
                    }
                    else {
                        resolve();
                    }
                }).catch(function (error) {
                    console.log("Transaction failed: ", error);
                    reject(error);
                });
            }
        });
    };
    productsFirebaseController.prototype.deleteExistingItemGroup = function (catergoryID, groupName) {
        var self = this;
        return new Promise(function (resolve, reject) {
            var docRef = self.afs.collection('products').doc('productsParentDoc').collection(catergoryID).doc('productGroups');
            self.afs.firestore.runTransaction(function (transaction) {
                // This code may get re-run multiple times if there are conflicts.
                return transaction.get(docRef.ref).then(function (doc) {
                    var dataToUpdate = doc.data().data;
                    //remove old group from the list
                    if (dataToUpdate.indexOf(groupName) >= 0) {
                        dataToUpdate.splice(dataToUpdate.indexOf(groupName), 1);
                    }
                    transaction.update(docRef.ref, { data: dataToUpdate });
                });
            }).then(function () {
                console.log("Transaction successfully committed!");
                //after the list of group has been succesfully  updated, update all existing product with the new group name
                var oldGroupData = JSON.parse(groupName);
                self.fbservices.deleteFileFromfbStorage(oldGroupData.groupAvatar);
                self.updateExistingProductsWithNewGroupName(catergoryID, oldGroupData.groupName, '').then(function (res) {
                    resolve(res);
                }).catch(function (err) { return reject(err); });
            }).catch(function (error) {
                console.log("Transaction failed: ", error);
                reject(error);
            });
        });
    };
    productsFirebaseController.prototype.updateExistingProductsWithNewGroupName = function (catergoryID, oldGroupName, newGroupName) {
        var self = this;
        return new Promise(function (resolve, reject) {
            var _this = this;
            var collect = self.afs.collection('products').doc('productsParentDoc').collection(catergoryID);
            var query = collect.ref.where("groupName", "==", oldGroupName);
            query.get().then(function (res) {
                console.log(res);
                if (!res.empty) {
                    var batch_1 = self.afs.firestore.batch();
                    res.forEach(function (doc) {
                        console.log(doc.id, " => ", doc.data());
                        var ref = self.afs.collection('products').doc('productsParentDoc').collection(catergoryID).doc(doc.id).ref;
                        batch_1.update(ref, {
                            groupName: newGroupName
                        });
                    });
                    batch_1.commit().then(function (res) {
                        console.log(res);
                        resolve(true);
                    }).catch(function (err) {
                        reject(err);
                    });
                }
                else
                    resolve(null);
            })
                .catch(function (err) {
                console.log(err);
                reject(err);
                _this.global.presentToast('Đã có lỗi khi kết nối với hệ thống. Vui lòng thử lại sau');
            });
        });
    };
    productsFirebaseController = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__globalhero_globalhero__["a" /* GlobalheroProvider */], __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__angular_fire_firestore__["a" /* AngularFirestore */], __WEBPACK_IMPORTED_MODULE_6__firebase_services__["a" /* FirebaseServicesProvider */]])
    ], productsFirebaseController);
    return productsFirebaseController;
}());

//# sourceMappingURL=productsFirebaseController.js.map

/***/ }),

/***/ 380:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return contactFirebaseController; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_fire_firestore__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__globalhero_globalhero__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var contactFirebaseController = /** @class */ (function () {
    function contactFirebaseController(storage, global, http, afs) {
        this.storage = storage;
        this.global = global;
        this.http = http;
        this.afs = afs;
    }
    contactFirebaseController.prototype.getContact = function () {
        var self = this;
        return new Promise(function (resolve, reject) {
            var collect = self.afs.collection('contact');
            var query = collect.ref;
            query.get().then(function (res) {
                console.log(res);
                var result = {
                    data: null,
                    hasContent: false
                };
                if (!res.empty) {
                    res.forEach(function (doc) {
                        console.log(doc.id, " => ", doc.data());
                        var contact = null;
                        contact = doc.data();
                        contact['id'] = doc.id;
                        result.data = contact;
                        result.hasContent = true;
                    });
                }
                resolve(result);
            })
                .catch(function (err) {
                console.log(err);
                reject(err);
                self.global.presentToast('Đã có lỗi khi kết nối với hệ thống. Vui lòng thử lại sau');
            });
        });
    };
    contactFirebaseController.prototype.createContact = function (detail) {
        var self = this;
        return new Promise(function (resolve, reject) {
            var _this = this;
            var collect = self.afs.collection('contact');
            collect.add(detail).then(function (res) {
                resolve(res.id);
            })
                .catch(function (err) {
                console.log(err);
                reject(err);
                _this.global.presentToast('Đã có lỗi khi kết nối với hệ thống. Vui lòng thử lại sau');
            });
        });
    };
    contactFirebaseController.prototype.updateContact = function (data) {
        console.log(data);
        var id = data.id;
        delete data['id'];
        var self = this;
        return new Promise(function (resolve, reject) {
            self.afs
                .collection('contact')
                .doc(id)
                .set(data)
                .then(function () {
                console.log('done');
                self.global.presentToast('Cập nhật thành công!');
                resolve();
            })
                .catch(function (error) {
                console.error('Error writing document: ', error);
                self.global.presentToast('Đã có lỗi khi kết nối với hệ thống. Vui lòng thử lại sau');
                reject(error);
            });
        });
    };
    contactFirebaseController = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__globalhero_globalhero__["a" /* GlobalheroProvider */], __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__angular_fire_firestore__["a" /* AngularFirestore */]])
    ], contactFirebaseController);
    return contactFirebaseController;
}());

//# sourceMappingURL=contactFirebaseController.js.map

/***/ }),

/***/ 382:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return newsFirebaseController; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_fire_firestore__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__globalhero_globalhero__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var newsFirebaseController = /** @class */ (function () {
    function newsFirebaseController(storage, global, http, afs) {
        this.storage = storage;
        this.global = global;
        this.http = http;
        this.afs = afs;
    }
    newsFirebaseController.prototype.createNews = function (detail, collectionID) {
        var self = this;
        detail.lastUpdated = self.global.getCurrentDateandTime();
        return new Promise(function (resolve, reject) {
            var _this = this;
            var collect = self.afs.collection('news').doc('newsParentDoc').collection(collectionID);
            collect.add(detail).then(function (res) {
                resolve(res.id);
            })
                .catch(function (err) {
                console.log(err);
                reject(err);
                _this.global.presentToast('Đã có lỗi khi kết nối với hệ thống. Vui lòng thử lại sau');
            });
        });
    };
    newsFirebaseController.prototype.updateNews = function (collectionID, newsID, data) {
        console.log(data);
        var self = this;
        return new Promise(function (resolve, reject) {
            self.afs.collection('news').doc('newsParentDoc').collection(collectionID)
                .doc(data.id)
                .update({
                title: data.title,
                detail: data.detail,
                shortDescription: data.shortDescription,
                status: data.status,
                lastUpdated: self.global.getCurrentDateandTime()
            })
                .then(function () {
                console.log('done');
                self.global.presentToast('Cập nhật thành công!');
                resolve();
            })
                .catch(function (error) {
                console.error('Error writing document: ', error);
                self.global.presentToast('Đã có lỗi khi kết nối với hệ thống. Vui lòng thử lại sau');
                reject(error);
            });
        });
    };
    newsFirebaseController.prototype.deleteNews = function (collectionID, newsID) {
        var self = this;
        return new Promise(function (resolve, reject) {
            self.afs.collection('news').doc('newsParentDoc').collection(collectionID)
                .doc(newsID)
                .delete()
                .then(function () {
                console.log('done');
                self.global.presentToast('Đã xóa thành công!');
                resolve();
            })
                .catch(function (error) {
                console.error('Error writing document: ', error);
                self.global.presentToast('Đã có lỗi khi kết nối với hệ thống. Vui lòng thử lại sau');
                reject(error);
            });
        });
    };
    newsFirebaseController.prototype.getAllNewsCatergoriesMetadata = function () {
        var self = this;
        return new Promise(function (resolve, reject) {
            var collect = self.afs.collection('news').doc('newsParentDoc').collection('metadata').doc('metadata');
            var query = collect.ref;
            query.get().then(function (res) {
                console.log(res);
                var result = null;
                if (res.exists) {
                    result = res.data();
                }
                resolve(result);
            })
                .catch(function (err) {
                console.log(err);
                reject(err);
                self.global.presentToast('Đã có lỗi khi kết nối với hệ thống. Vui lòng thử lại sau');
            });
        });
    };
    newsFirebaseController.prototype.getNewsOfCatergory = function (catergoryID) {
        var self = this;
        return new Promise(function (resolve, reject) {
            var _this = this;
            var collect = self.afs.collection('news').doc('newsParentDoc').collection(catergoryID);
            var query = collect.ref;
            query.get().then(function (res) {
                console.log(res);
                var result = {
                    data: [],
                    hasContent: false
                };
                if (!res.empty) {
                    res.forEach(function (doc) {
                        console.log(doc.id, " => ", doc.data());
                        var news = null;
                        news = doc.data();
                        news['id'] = doc.id;
                        doc.data()['id'] = doc.id;
                        result.data.push(news);
                        result.hasContent = true;
                    });
                }
                resolve(result);
            })
                .catch(function (err) {
                console.log(err);
                reject(err);
                _this.global.presentToast('Đã có lỗi khi kết nối với hệ thống. Vui lòng thử lại sau');
            });
        });
    };
    newsFirebaseController.prototype.addNewsMediaFileURLToDocumentObject = function (url, catergoryID, newsID) {
        var self = this;
        return new Promise(function (resolve, reject) {
            var docRef = self.afs.collection('news').doc('newsParentDoc').collection(catergoryID).doc(newsID);
            self.afs.firestore.runTransaction(function (transaction) {
                // This code may get re-run multiple times if there are conflicts.
                return transaction.get(docRef.ref).then(function (doc) {
                    if (!doc.data().mediaList) {
                        transaction.update(docRef.ref, { mediaList: [url] });
                    }
                    else {
                        var dataToUpdate = doc.data().mediaList;
                        dataToUpdate.push(url);
                        transaction.update(docRef.ref, { mediaList: dataToUpdate });
                    }
                });
            }).then(function () {
                console.log("Transaction successfully committed!");
                resolve();
            }).catch(function (error) {
                console.log("Transaction failed: ", error);
                reject(error);
            });
        });
    };
    newsFirebaseController.prototype.setMediaArrayToDocument = function (arr, catergoryID, newsID) {
        var self = this;
        return new Promise(function (resolve, reject) {
            self.afs.collection('news').doc('newsParentDoc').collection(catergoryID).doc(newsID)
                .update({
                mediaList: arr
            })
                .then(function () {
                console.log('done');
                resolve();
            })
                .catch(function (error) {
                console.error('Error writing document: ', error);
                reject(error);
            });
        });
    };
    newsFirebaseController = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__globalhero_globalhero__["a" /* GlobalheroProvider */], __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__angular_fire_firestore__["a" /* AngularFirestore */]])
    ], newsFirebaseController);
    return newsFirebaseController;
}());

//# sourceMappingURL=newsFirebaseController.js.map

/***/ }),

/***/ 383:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return processFirebaseController; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_fire_firestore__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__globalhero_globalhero__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var processFirebaseController = /** @class */ (function () {
    function processFirebaseController(storage, global, http, afs) {
        this.storage = storage;
        this.global = global;
        this.http = http;
        this.afs = afs;
    }
    processFirebaseController.prototype.createNews = function (detail, collectionID) {
        var self = this;
        detail.lastUpdated = self.global.getCurrentDateandTime();
        return new Promise(function (resolve, reject) {
            var _this = this;
            var collect = self.afs.collection('process').doc('processParentDoc').collection(collectionID);
            collect.add(detail).then(function (res) {
                resolve(res.id);
            })
                .catch(function (err) {
                console.log(err);
                reject(err);
                _this.global.presentToast('Đã có lỗi khi kết nối với hệ thống. Vui lòng thử lại sau');
            });
        });
    };
    processFirebaseController.prototype.updateNews = function (collectionID, newsID, data) {
        console.log(data);
        var self = this;
        return new Promise(function (resolve, reject) {
            self.afs.collection('process').doc('processParentDoc').collection(collectionID)
                .doc(data.id)
                .update({
                title: data.title,
                detail: data.detail,
                shortDescription: data.shortDescription,
                status: data.status,
                lastUpdated: self.global.getCurrentDateandTime()
            })
                .then(function () {
                console.log('done');
                self.global.presentToast('Cập nhật thành công!');
                resolve();
            })
                .catch(function (error) {
                console.error('Error writing document: ', error);
                self.global.presentToast('Đã có lỗi khi kết nối với hệ thống. Vui lòng thử lại sau');
                reject(error);
            });
        });
    };
    processFirebaseController.prototype.deleteNews = function (collectionID, newsID) {
        var self = this;
        return new Promise(function (resolve, reject) {
            self.afs.collection('process').doc('processParentDoc').collection(collectionID)
                .doc(newsID)
                .delete()
                .then(function () {
                console.log('done');
                self.global.presentToast('Đã xóa thành công!');
                resolve();
            })
                .catch(function (error) {
                console.error('Error writing document: ', error);
                self.global.presentToast('Đã có lỗi khi kết nối với hệ thống. Vui lòng thử lại sau');
                reject(error);
            });
        });
    };
    processFirebaseController.prototype.getAllNewsCatergoriesMetadata = function () {
        var self = this;
        return new Promise(function (resolve, reject) {
            var collect = self.afs.collection('process').doc('processParentDoc').collection('metadata').doc('metadata');
            var query = collect.ref;
            query.get().then(function (res) {
                console.log(res);
                var result = null;
                if (res.exists) {
                    result = res.data();
                }
                resolve(result);
            })
                .catch(function (err) {
                console.log(err);
                reject(err);
                self.global.presentToast('Đã có lỗi khi kết nối với hệ thống. Vui lòng thử lại sau');
            });
        });
    };
    processFirebaseController.prototype.getNewsOfCatergory = function (catergoryID) {
        var self = this;
        return new Promise(function (resolve, reject) {
            var _this = this;
            var collect = self.afs.collection('process').doc('processParentDoc').collection(catergoryID);
            var query = collect.ref;
            query.get().then(function (res) {
                console.log(res);
                var result = {
                    data: [],
                    hasContent: false
                };
                if (!res.empty) {
                    res.forEach(function (doc) {
                        console.log(doc.id, " => ", doc.data());
                        var news = null;
                        news = doc.data();
                        news['id'] = doc.id;
                        doc.data()['id'] = doc.id;
                        result.data.push(news);
                        result.hasContent = true;
                    });
                }
                resolve(result);
            })
                .catch(function (err) {
                console.log(err);
                reject(err);
                _this.global.presentToast('Đã có lỗi khi kết nối với hệ thống. Vui lòng thử lại sau');
            });
        });
    };
    processFirebaseController.prototype.addNewsMediaFileURLToDocumentObject = function (url, catergoryID, newsID) {
        var self = this;
        return new Promise(function (resolve, reject) {
            var docRef = self.afs.collection('process').doc('processParentDoc').collection(catergoryID).doc(newsID);
            self.afs.firestore.runTransaction(function (transaction) {
                // This code may get re-run multiple times if there are conflicts.
                return transaction.get(docRef.ref).then(function (doc) {
                    if (!doc.data().mediaList) {
                        transaction.update(docRef.ref, { mediaList: [url] });
                    }
                    else {
                        var dataToUpdate = doc.data().mediaList;
                        dataToUpdate.push(url);
                        transaction.update(docRef.ref, { mediaList: dataToUpdate });
                    }
                });
            }).then(function () {
                console.log("Transaction successfully committed!");
                resolve();
            }).catch(function (error) {
                console.log("Transaction failed: ", error);
                reject(error);
            });
        });
    };
    processFirebaseController.prototype.setMediaArrayToDocument = function (arr, catergoryID, newsID) {
        var self = this;
        return new Promise(function (resolve, reject) {
            self.afs.collection('process').doc('processParentDoc').collection(catergoryID).doc(newsID)
                .update({
                mediaList: arr
            })
                .then(function () {
                console.log('done');
                resolve();
            })
                .catch(function (error) {
                console.error('Error writing document: ', error);
                reject(error);
            });
        });
    };
    processFirebaseController = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__globalhero_globalhero__["a" /* GlobalheroProvider */], __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__angular_fire_firestore__["a" /* AngularFirestore */]])
    ], processFirebaseController);
    return processFirebaseController;
}());

//# sourceMappingURL=processFirebaseController.js.map

/***/ }),

/***/ 384:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return customerFirebaseController; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_fire_firestore__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__globalhero_globalhero__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var customerFirebaseController = /** @class */ (function () {
    function customerFirebaseController(storage, global, http, afs) {
        this.storage = storage;
        this.global = global;
        this.http = http;
        this.afs = afs;
    }
    customerFirebaseController.prototype.getAllComments = function () {
        var self = this;
        return new Promise(function (resolve, reject) {
            var _this = this;
            var collect = self.afs.collection('customer');
            var query = collect.ref;
            query.get().then(function (res) {
                console.log(res);
                var result = {
                    data: [],
                    hasContent: false
                };
                if (!res.empty) {
                    res.forEach(function (doc) {
                        console.log(doc.id, " => ", doc.data());
                        var comment = null;
                        comment = doc.data();
                        comment['id'] = doc.id;
                        result.data.push(comment);
                        result.hasContent = true;
                    });
                }
                resolve(result);
            })
                .catch(function (err) {
                console.log(err);
                reject(err);
                _this.global.presentToast('Đã có lỗi khi kết nối với hệ thống. Vui lòng thử lại sau');
            });
        });
    };
    customerFirebaseController.prototype.createComment = function (detail) {
        var self = this;
        //check if this email has been used before
        return new Promise(function (resolve, reject) {
            var collect = self.afs.collection('customer');
            var query = collect.ref.where("email", "==", detail.email);
            query.get().then(function (res) {
                console.log(res);
                self.global.presentToast('Chúng tôi đã ghi nhận thông tin của bạn và sẽ sớm phản hồi trong thời gian sớm nhất. Xin chân thành cảm ơn.');
                if (!res.empty) {
                    //email này đã tồn tại, upate content vào email cũ
                    console.log('old customer');
                    res.forEach(function (doc) {
                        console.log(doc.id, " => ", doc.data());
                        self.updateCommentContent(doc.id, detail.content[0]);
                    });
                }
                else {
                    //email này chưa tồn tại, tạo 1 customer mới
                    console.log('new customer');
                    collect.add(detail).then(function (res) {
                        console.log(res.id);
                    })
                        .catch(function (err) {
                        console.log(err);
                    });
                }
                resolve();
            }).catch(function (err) { reject(); });
        });
    };
    customerFirebaseController.prototype.updateCommentStatus = function (commentID, status) {
        var self = this;
        return new Promise(function (resolve, reject) {
            self.afs
                .collection('customer')
                .doc(commentID)
                .update({
                status: status,
                lastUpdated: self.global.getCurrentDateandTime()
            })
                .then(function () {
                console.log('done');
                self.global.presentToast('Cập nhật thành công!');
                resolve();
            })
                .catch(function (error) {
                console.error('Error writing document: ', error);
                self.global.presentToast('Đã có lỗi khi kết nối với hệ thống. Vui lòng thử lại sau');
                reject(error);
            });
        });
    };
    customerFirebaseController.prototype.updateCommentContent = function (commentID, newContent) {
        var self = this;
        console.log('Nội dung mới: ' + newContent);
        return new Promise(function (resolve, reject) {
            var docRef = self.afs.collection('customer').doc(commentID);
            self.afs.firestore.runTransaction(function (transaction) {
                // This code may get re-run multiple times if there are conflicts.
                return transaction.get(docRef.ref).then(function (doc) {
                    if (!doc.data().content) {
                        transaction.update(docRef.ref, { mediaList: [newContent] });
                    }
                    else {
                        var dataToUpdate = doc.data().content;
                        dataToUpdate.push(newContent);
                        transaction.update(docRef.ref, { content: dataToUpdate });
                    }
                });
            }).then(function () {
                console.log("Transaction successfully committed!");
                resolve();
            }).catch(function (error) {
                console.log("Transaction failed: ", error);
                reject(error);
            });
        });
    };
    customerFirebaseController.prototype.deleteComment = function (commentID) {
        var self = this;
        return new Promise(function (resolve, reject) {
            self.afs
                .collection('customer')
                .doc(commentID)
                .delete()
                .then(function () {
                console.log('done');
                self.global.presentToast('Xóa thành công!');
                resolve();
            })
                .catch(function (error) {
                console.error('Error writing document: ', error);
                self.global.presentToast('Đã có lỗi khi kết nối với hệ thống. Vui lòng thử lại sau');
                reject(error);
            });
        });
    };
    customerFirebaseController = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__globalhero_globalhero__["a" /* GlobalheroProvider */], __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__angular_fire_firestore__["a" /* AngularFirestore */]])
    ], customerFirebaseController);
    return customerFirebaseController;
}());

//# sourceMappingURL=customerFirebaseController.js.map

/***/ }),

/***/ 385:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return supplierFirebaseController; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_fire_firestore__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__globalhero_globalhero__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var supplierFirebaseController = /** @class */ (function () {
    function supplierFirebaseController(storage, global, http, afs) {
        this.storage = storage;
        this.global = global;
        this.http = http;
        this.afs = afs;
    }
    supplierFirebaseController.prototype.createNews = function (detail, collectionID) {
        var self = this;
        detail.lastUpdated = self.global.getCurrentDateandTime();
        return new Promise(function (resolve, reject) {
            var _this = this;
            var collect = self.afs.collection('supplier').doc('supplierParentDoc').collection(collectionID);
            collect.add(detail).then(function (res) {
                resolve(res.id);
            })
                .catch(function (err) {
                console.log(err);
                reject(err);
                _this.global.presentToast('Đã có lỗi khi kết nối với hệ thống. Vui lòng thử lại sau');
            });
        });
    };
    supplierFirebaseController.prototype.updateNews = function (collectionID, newsID, data) {
        console.log(data);
        var self = this;
        return new Promise(function (resolve, reject) {
            self.afs.collection('supplier').doc('supplierParentDoc').collection(collectionID)
                .doc(data.id)
                .update({
                title: data.title,
                detail: data.detail,
                shortDescription: data.shortDescription,
                status: data.status,
                lastUpdated: self.global.getCurrentDateandTime()
            })
                .then(function () {
                console.log('done');
                self.global.presentToast('Cập nhật thành công!');
                resolve();
            })
                .catch(function (error) {
                console.error('Error writing document: ', error);
                self.global.presentToast('Đã có lỗi khi kết nối với hệ thống. Vui lòng thử lại sau');
                reject(error);
            });
        });
    };
    supplierFirebaseController.prototype.deleteNews = function (collectionID, newsID) {
        var self = this;
        return new Promise(function (resolve, reject) {
            self.afs.collection('supplier').doc('supplierParentDoc').collection(collectionID)
                .doc(newsID)
                .delete()
                .then(function () {
                console.log('done');
                self.global.presentToast('Đã xóa thành công!');
                resolve();
            })
                .catch(function (error) {
                console.error('Error writing document: ', error);
                self.global.presentToast('Đã có lỗi khi kết nối với hệ thống. Vui lòng thử lại sau');
                reject(error);
            });
        });
    };
    supplierFirebaseController.prototype.getAllNewsCatergoriesMetadata = function () {
        var self = this;
        return new Promise(function (resolve, reject) {
            var collect = self.afs.collection('supplier').doc('supplierParentDoc').collection('metadata').doc('metadata');
            var query = collect.ref;
            query.get().then(function (res) {
                console.log(res);
                var result = null;
                if (res.exists) {
                    result = res.data();
                }
                resolve(result);
            })
                .catch(function (err) {
                console.log(err);
                reject(err);
                self.global.presentToast('Đã có lỗi khi kết nối với hệ thống. Vui lòng thử lại sau');
            });
        });
    };
    supplierFirebaseController.prototype.getNewsOfCatergory = function (catergoryID) {
        var self = this;
        return new Promise(function (resolve, reject) {
            var _this = this;
            var collect = self.afs.collection('supplier').doc('supplierParentDoc').collection(catergoryID);
            var query = collect.ref;
            query.get().then(function (res) {
                console.log(res);
                var result = {
                    data: [],
                    hasContent: false
                };
                if (!res.empty) {
                    res.forEach(function (doc) {
                        console.log(doc.id, " => ", doc.data());
                        var news = null;
                        news = doc.data();
                        news['id'] = doc.id;
                        doc.data()['id'] = doc.id;
                        result.data.push(news);
                        result.hasContent = true;
                    });
                }
                resolve(result);
            })
                .catch(function (err) {
                console.log(err);
                reject(err);
                _this.global.presentToast('Đã có lỗi khi kết nối với hệ thống. Vui lòng thử lại sau');
            });
        });
    };
    supplierFirebaseController.prototype.addNewsMediaFileURLToDocumentObject = function (url, catergoryID, newsID) {
        var self = this;
        return new Promise(function (resolve, reject) {
            var docRef = self.afs.collection('supplier').doc('supplierParentDoc').collection(catergoryID).doc(newsID);
            self.afs.firestore.runTransaction(function (transaction) {
                // This code may get re-run multiple times if there are conflicts.
                return transaction.get(docRef.ref).then(function (doc) {
                    if (!doc.data().mediaList) {
                        transaction.update(docRef.ref, { mediaList: [url] });
                    }
                    else {
                        var dataToUpdate = doc.data().mediaList;
                        dataToUpdate.push(url);
                        transaction.update(docRef.ref, { mediaList: dataToUpdate });
                    }
                });
            }).then(function () {
                console.log("Transaction successfully committed!");
                resolve();
            }).catch(function (error) {
                console.log("Transaction failed: ", error);
                reject(error);
            });
        });
    };
    supplierFirebaseController.prototype.setMediaArrayToDocument = function (arr, catergoryID, newsID) {
        var self = this;
        return new Promise(function (resolve, reject) {
            self.afs.collection('supplier').doc('supplierParentDoc').collection(catergoryID).doc(newsID)
                .update({
                mediaList: arr
            })
                .then(function () {
                console.log('done');
                resolve();
            })
                .catch(function (error) {
                console.error('Error writing document: ', error);
                reject(error);
            });
        });
    };
    supplierFirebaseController = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__globalhero_globalhero__["a" /* GlobalheroProvider */], __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__angular_fire_firestore__["a" /* AngularFirestore */]])
    ], supplierFirebaseController);
    return supplierFirebaseController;
}());

//# sourceMappingURL=supplierFirebaseController.js.map

/***/ }),

/***/ 386:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return aboutusFirebaseController; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_fire_firestore__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__globalhero_globalhero__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var aboutusFirebaseController = /** @class */ (function () {
    function aboutusFirebaseController(storage, global, http, afs) {
        this.storage = storage;
        this.global = global;
        this.http = http;
        this.afs = afs;
    }
    aboutusFirebaseController.prototype.getAboutUS = function () {
        var self = this;
        return new Promise(function (resolve, reject) {
            var _this = this;
            var collect = self.afs.collection('aboutus');
            var query = collect.ref;
            query.get().then(function (res) {
                console.log(res);
                var result = {
                    data: null,
                    hasContent: false
                };
                if (!res.empty) {
                    res.forEach(function (doc) {
                        console.log(doc.id, " => ", doc.data());
                        result.data = doc.data();
                        result.hasContent = true;
                        result.data['id'] = doc.id;
                    });
                }
                resolve(result);
            })
                .catch(function (err) {
                console.log(err);
                reject(err);
                _this.global.presentToast('Đã có lỗi khi kết nối với hệ thống. Vui lòng thử lại sau');
            });
        });
    };
    aboutusFirebaseController.prototype.createAboutUs = function (aboutus) {
        var self = this;
        return new Promise(function (resolve, reject) {
            var _this = this;
            var collect = self.afs.collection('aboutus');
            collect.add(aboutus).then(function (res) {
                resolve(res.id);
            })
                .catch(function (err) {
                console.log(err);
                reject(err);
                _this.global.presentToast('Đã có lỗi khi kết nối với hệ thống. Vui lòng thử lại sau');
            });
        });
    };
    aboutusFirebaseController.prototype.updateAboutUS = function (type, data) {
        console.log(data);
        var self = this;
        return new Promise(function (resolve, reject) {
            self.afs
                .collection('aboutus')
                .doc(data.id)
                .update({
                title: data.title,
                detail: data.detail,
                shortDescription: data.shortDescription,
                status: data.status,
                lastUpdated: self.global.getCurrentDateandTime()
            })
                .then(function () {
                console.log('done');
                self.global.presentToast('Cập nhật thành công!');
                resolve();
            })
                .catch(function (error) {
                console.error('Error writing document: ', error);
                self.global.presentToast('Đã có lỗi khi kết nối với hệ thống. Vui lòng thử lại sau');
                reject(error);
            });
        });
    };
    aboutusFirebaseController = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__globalhero_globalhero__["a" /* GlobalheroProvider */], __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__angular_fire_firestore__["a" /* AngularFirestore */]])
    ], aboutusFirebaseController);
    return aboutusFirebaseController;
}());

//# sourceMappingURL=aboutusFirebaseController.js.map

/***/ }),

/***/ 387:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(498);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 498:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(806);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_firebase_services_firebase_services__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common_http__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_globalhero_globalhero__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_fire__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_fire_firestore__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_fire_database__ = __webpack_require__(807);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_fire_auth__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_fire_storage__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_firebase_services_aboutusFirebaseController__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_firebase_services_productsFirebaseController__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_firebase_services_newsFirebaseController__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angular2_datatable__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angular2_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_angular2_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_firebase_services_processFirebaseController__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_firebase_services_supplierFirebaseController__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_firebase_services_customerFirebaseController__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_firebase_services_contactFirebaseController__ = __webpack_require__(380);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










// import { AngularFireModule } from 'angularfire2';
// import { AngularFirestoreModule } from 'angularfire2/firestore';
// import { AngularFireAuth } from 'angularfire2/auth';
// import { AngularFireDatabaseModule } from '@angular/fire/database';
// import { AngularFireStorage } from '@angular/fire/storage';













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/admin-contact/admin-contact.module#AdminContactPageModule', name: 'AdminContactPage', segment: 'admin/contact', priority: 'low', defaultHistory: ['AdminPage'] },
                        { loadChildren: '../pages/admin-customer-comments/admin-customer-comments.module#AdminCustomerCommentsPageModule', name: 'AdminCustomerCommentsPage', segment: 'admin/customers', priority: 'low', defaultHistory: ['AdminPage'] },
                        { loadChildren: '../pages/admin-news-details/admin-news-details.module#AdminNewsDetailsPageModule', name: 'AdminNewsDetailsPage', segment: 'admin/news/newsedit', priority: 'low', defaultHistory: ['AdminPage'] },
                        { loadChildren: '../pages/admin-news/admin-news.module#AdminNewsPageModule', name: 'AdminNewsPage', segment: 'admin/news', priority: 'low', defaultHistory: ['AdminPage'] },
                        { loadChildren: '../pages/admin-process-detail/admin-process-detail.module#AdminProcessDetailPageModule', name: 'AdminProcessDetailPage', segment: 'admin/process/processedit', priority: 'low', defaultHistory: ['AdminPage'] },
                        { loadChildren: '../pages/admin-process/admin-process.module#AdminProcessPageModule', name: 'AdminProcessPage', segment: 'admin/process', priority: 'low', defaultHistory: ['AdminPage'] },
                        { loadChildren: '../pages/admin-product-detail/admin-product-detail.module#AdminProductDetailPageModule', name: 'AdminProductDetailPage', segment: 'admin/products/productedit', priority: 'low', defaultHistory: ['AdminPage'] },
                        { loadChildren: '../pages/admin-supplier-detail/admin-supplier-detail.module#AdminSupplierDetailPageModule', name: 'AdminSupplierDetailPage', segment: 'admin/supplier/supplieredit', priority: 'low', defaultHistory: ['AdminPage'] },
                        { loadChildren: '../pages/admin-supplier/admin-supplier.module#AdminSupplierPageModule', name: 'AdminSupplierPage', segment: 'admin/supplier', priority: 'low', defaultHistory: ['AdminPage'] },
                        { loadChildren: '../pages/admin/admin.module#AdminPageModule', name: 'AdminPage', segment: 'admin', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contact-us-popover/contact-us-popover.module#ContactUsPopoverPageModule', name: 'ContactUsPopoverPage', segment: 'contact-us-popover', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home-about-us/home-about-us.module#HomeAboutUsPageModule', name: 'HomeAboutUsPage', segment: 'home/:site/aboutus', priority: 'low', defaultHistory: ['HomePage'] },
                        { loadChildren: '../pages/home-contact-us/home-contact-us.module#HomeContactUsPageModule', name: 'HomeContactUsPage', segment: 'home/:site/contact', priority: 'low', defaultHistory: ['HomePage'] },
                        { loadChildren: '../pages/home-product-detail/home-product-detail.module#HomeProductDetailPageModule', name: 'HomeProductDetailPage', segment: 'home/:site/:groupName', priority: 'low', defaultHistory: ['HomePage'] },
                        { loadChildren: '../pages/home-product-home/home-product-home.module#HomeProductHomePageModule', name: 'HomeProductHomePage', segment: 'home/:site', priority: 'low', defaultHistory: ['HomePage'] },
                        { loadChildren: '../pages/home-product-news-list/home-product-news-list.module#HomeProductNewsListPageModule', name: 'HomeProductNewsListPage', segment: 'home/:site/news', priority: 'low', defaultHistory: ['HomePage'] },
                        { loadChildren: '../pages/home-product-process/home-product-process.module#HomeProductProcessPageModule', name: 'HomeProductProcessPage', segment: 'home/:site/process', priority: 'low', defaultHistory: ['HomePage'] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/news-detal-popover/news-detail-popover.module#NewsDetailPopoverPageModule', name: 'NewsDetailPopoverPage', segment: 'news-detail-popover', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/admin-aboutus/admin-aboutus.module#AdminAboutusPageModule', name: 'AdminAboutusPage', segment: 'admin/aboutus', priority: 'low', defaultHistory: ['AdminPage'] },
                        { loadChildren: '../pages/admin-products/admin-products.module#AdminProductsPageModule', name: 'AdminProductsPage', segment: 'admin/products', priority: 'low', defaultHistory: ['AdminPage'] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_10__angular_fire__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_7__providers_firebase_services_firebase_services__["b" /* firebaseConfig */]),
                __WEBPACK_IMPORTED_MODULE_11__angular_fire_firestore__["b" /* AngularFirestoreModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_fire_database__["a" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_18_angular2_datatable__["DataTableModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_7__providers_firebase_services_firebase_services__["a" /* FirebaseServicesProvider */],
                __WEBPACK_IMPORTED_MODULE_9__providers_globalhero_globalhero__["a" /* GlobalheroProvider */],
                __WEBPACK_IMPORTED_MODULE_13__angular_fire_auth__["a" /* AngularFireAuth */],
                __WEBPACK_IMPORTED_MODULE_14__angular_fire_storage__["a" /* AngularFireStorage */],
                __WEBPACK_IMPORTED_MODULE_15__providers_firebase_services_aboutusFirebaseController__["a" /* aboutusFirebaseController */],
                __WEBPACK_IMPORTED_MODULE_16__providers_firebase_services_productsFirebaseController__["a" /* productsFirebaseController */],
                __WEBPACK_IMPORTED_MODULE_17__providers_firebase_services_newsFirebaseController__["a" /* newsFirebaseController */],
                __WEBPACK_IMPORTED_MODULE_19__providers_firebase_services_processFirebaseController__["a" /* processFirebaseController */],
                __WEBPACK_IMPORTED_MODULE_20__providers_firebase_services_supplierFirebaseController__["a" /* supplierFirebaseController */],
                __WEBPACK_IMPORTED_MODULE_21__providers_firebase_services_customerFirebaseController__["a" /* customerFirebaseController */],
                __WEBPACK_IMPORTED_MODULE_22__providers_firebase_services_contactFirebaseController__["a" /* contactFirebaseController */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 806:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_globalhero_globalhero__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = /** @class */ (function () {
    function MyApp(menuCtrl, storage, global, platform, statusBar, splashScreen) {
        var _this = this;
        this.menuCtrl = menuCtrl;
        this.storage = storage;
        this.global = global;
        this.rootPage = 'HomePage';
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            _this.initializeApp();
        });
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        //onOffLog
        console.log = function () { };
        this.storage.get('currentUserProfile').then(function (val) {
            if (val != null) {
                _this.global.isLogin = true;
                console.log(val);
            }
        });
    };
    MyApp.prototype.openPage = function (id) {
        console.log(id);
        switch (id) {
            case 'home':
                console.log(this.isPageActive('AdminPage'));
                if (!this.isPageActive('AdminPage')) {
                    this.nav.setRoot('AdminPage');
                }
                this.menuCtrl.close();
                break;
            case 'aboutus':
                console.log(this.isPageActive('AdminAboutusPage'));
                if (!this.isPageActive('AdminAboutusPage')) {
                    this.nav.push('AdminAboutusPage');
                }
                this.menuCtrl.close();
                break;
            case 'products':
                console.log(this.isPageActive('AdminProductsPage'));
                if (!this.isPageActive('AdminProductsPage')) {
                    this.nav.push('AdminProductsPage');
                }
                this.menuCtrl.close();
                break;
            case 'news':
                console.log(this.isPageActive('AdminNewsPage'));
                if (!this.isPageActive('AdminNewsPage')) {
                    this.nav.push('AdminNewsPage');
                }
                this.menuCtrl.close();
                break;
            case 'process':
                console.log(this.isPageActive('AdminProcessPage'));
                if (!this.isPageActive('AdminProcessPage')) {
                    this.nav.push('AdminProcessPage');
                }
                this.menuCtrl.close();
                break;
            case 'supplier':
                console.log(this.isPageActive('AdminSupplierPage'));
                if (!this.isPageActive('AdminSupplierPage')) {
                    this.nav.push('AdminSupplierPage');
                }
                this.menuCtrl.close();
                break;
            case 'customer':
                console.log(this.isPageActive('AdminCustomerCommentsPage'));
                if (!this.isPageActive('AdminCustomerCommentsPage')) {
                    this.nav.push('AdminCustomerCommentsPage');
                }
                this.menuCtrl.close();
                break;
            case 'contact':
                console.log(this.isPageActive('AdminContactPage'));
                if (!this.isPageActive('AdminContactPage')) {
                    this.nav.push('AdminContactPage');
                }
                this.menuCtrl.close();
                break;
        }
    };
    MyApp.prototype.isPageActive = function (pageName) {
        return this.nav.getActive().id === pageName || this.nav.getActive().name === pageName;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\HoangN\Desktop\ionic\vietnamargo\src\app\app.html"*/'<ion-menu [content]="mycontent" *ngIf="global.isLogin">\n    <ion-content>\n      <ion-list class="listOfMenuItems">\n        <ion-item no-lines (click)="openPage(\'home\')">\n            <img loading="lazy" item-start src="imgs/home.png"/>\n            Trang chủ\n        </ion-item>\n        <ion-item *ngFor="let item of global.listOfSettings" no-lines (click)="openPage(item.id)">\n            <img loading="lazy" item-start [src]="item.icon"/>\n            <h6>{{item.name}}</h6>\n        </ion-item>         \n    </ion-list>\n    </ion-content>\n  </ion-menu>\n  \n  <ion-nav #mycontent [root]="rootPage"></ion-nav>'/*ion-inline-end:"C:\Users\HoangN\Desktop\ionic\vietnamargo\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_4__providers_globalhero_globalhero__["a" /* GlobalheroProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[387]);
//# sourceMappingURL=main.js.map