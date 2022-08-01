import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth'
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import * as firebase from 'firebase/app';
import { GlobalheroProvider } from '../globalhero/globalhero';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';
import 'rxjs/add/operator/map';


/*
  Generated class for the FirebaseServicesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()

export class FirebaseServicesProvider {
  constructor(public storage: Storage, public global: GlobalheroProvider, public http: HttpClient,
    public fsstorage: AngularFireStorage, public afs: AngularFirestore, public auth: AngularFireAuth) {
    console.log('Hello FirebaseServicesProvider Provider');
  }

  //Users Operations
  login() {
    this.auth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(res => {
        console.log(res)
        let result = <any>res
        this.checkIfThisUserExist(result.additionalUserInfo.profile.email)
      })
      .catch(err => {
        console.log(err)
        this.global.presentToast('Đã có lỗi khi kết nối với hệ thống. Vui lòng thử lại sau')
      })
  }
  checkIfThisUserExist(email) {
    console.log(email)
    let collect = this.afs.collection('users');
    let query = collect.ref.where("email", "==", email)
    let self = this;
    query.get().then(
      res => {
        console.log(res)
        if (!res.empty) {
          res.forEach(function (doc) {
            console.log(doc.id, " => ", doc.data());
            self.storage.set('currentUserProfile', JSON.stringify(doc.data()))
          });
          this.global.isLogin = true;
          this.global.presentToast('Đăng nhập thành công')
        }
        else
          this.global.presentToast('Tài khoản của bạn không tồn tại trong hệ thống. Vui lòng liên hệ người quản trị.')
      }
    )
  }
  logout() {
    this.auth.auth.signOut().then(res => {
      console.log(res)
      this.global.isLogin = false
      this.global.presentToast('Đăng xuất thành công')
      this.storage.set('currentUserProfile', null)
    })
      .catch(err => {
        console.log(err)
        this.global.presentToast('Đã có lỗi khi kết nối với hệ thống. Vui lòng thử lại sau')
      });
  }

  //File Operations
  fbUploadFiles(file: File, startingPath) {
    let self = this
    return new Promise(function (resolve, reject) {
      let downloadURL
      let task: AngularFireUploadTask;
      // The storage path
      const path = `${startingPath}/${Date.now()}_${file.name}`;
      // Reference to storage bucket
      const ref = self.fsstorage.ref(path);
      // The main task
      task = self.fsstorage.upload(path, file);
      task
        .snapshotChanges()
        .pipe(
          finalize(() => {
            downloadURL = ref.getDownloadURL();
            downloadURL.subscribe(url => {
              if (url) {
                //final url
                resolve(url)
              }
            },
              err => {
                reject(err)
              });
          })
        )
        .subscribe(url => {
          if (url) {
            //progress
            // console.log(url);
          }
        });
    });
  }
  addMediaFileURLToDocumentObject(url, collectionID, documentID) {
    let self = this;
    return new Promise(function (resolve, reject) {
      const docRef = self.afs.collection(collectionID).doc(documentID);

      self.afs.firestore.runTransaction(transaction => {
        // This code may get re-run multiple times if there are conflicts.
        return transaction.get(docRef.ref).then(doc => {
          if (!doc.data().mediaList) {
            transaction.update(docRef.ref, { mediaList: [url] });
          } else {
            let dataToUpdate = doc.data().mediaList
            dataToUpdate.push(url);
            transaction.update(docRef.ref, { mediaList: dataToUpdate });
          }
        });
      }).then(function () {
        console.log("Transaction successfully committed!");
        resolve()
      }).catch(function (error) {
        console.log("Transaction failed: ", error);
        reject(error)
      });
    });
  }
  setMediaArrayToDocument(arr, collectionID, documentID) {
    let self = this;
    return new Promise(function (resolve, reject) {
      self.afs
        .collection(collectionID)
        .doc(documentID)
        .update({
          mediaList: arr})
            .then(() => {
              console.log('done');
              resolve();
            })
            .catch(function (error) {
              console.error('Error writing document: ', error);
              reject(error)
            })
        });
     }
  deleteFileFromfbStorage(url) {
    let self = this
    return new Promise(function (resolve, reject) {
      self.fsstorage.storage.refFromURL(url).delete().then(res => {
        console.log('Delete Completed')
        resolve(res)
      }).catch(err => {
        console.log(err)
        reject(err)
      })
    });
  }
  getPathStorageFromFileUrl(url: String) {
    const baseUrl = "https://firebasestorage.googleapis.com/v0/b/vietnamargo.appspot.com/o/";
    let imagePath: string = url.replace(baseUrl, "");
    const indexOfEndPath = imagePath.indexOf("?");
    imagePath = imagePath.substring(0, indexOfEndPath);
    imagePath = imagePath.replace("%2F", "/");
    return imagePath;
  }
}
export var firebaseConfig = {
  apiKey: "AIzaSyCxgCyFY_Kaj49Or_Rzolhw4BkKvbkcukU",
  authDomain: "vietnamargo.firebaseapp.com",
  databaseURL: "https://vietnamargo.firebaseio.com",
  projectId: "vietnamargo",
  storageBucket: "vietnamargo.appspot.com",
  messagingSenderId: "610638155321",
  appId: "1:610638155321:web:018638e18338c25ea647e8"
}
