import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { GlobalheroProvider } from '../globalhero/globalhero';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class newsFirebaseController {
  constructor(public storage: Storage, public global: GlobalheroProvider, public http: HttpClient,
    public afs: AngularFirestore) {
  }


  createNews(detail, collectionID) {
    let self = this;
    detail.lastUpdated=self.global.getCurrentDateandTime()
    return new Promise(function (resolve, reject) {
      let collect = self.afs.collection('news').doc('newsParentDoc').collection(collectionID)
      collect.add(detail).then(
        res => {
          resolve(res.id)
        }
      )
        .catch(err => {
          console.log(err)
          reject(err)
          this.global.presentToast('Đã có lỗi khi kết nối với hệ thống. Vui lòng thử lại sau')
        })
    });
  }

  updateNews(collectionID, newsID, data) {
    console.log(data)
    let self = this;
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
        .then(() => {
          console.log('done');
          self.global.presentToast('Cập nhật thành công!')
          resolve(true);
        })
        .catch(function (error) {
          console.error('Error writing document: ', error);
          self.global.presentToast('Đã có lỗi khi kết nối với hệ thống. Vui lòng thử lại sau')
          reject(error)
        });
    });
  }

  deleteNews(collectionID, newsID) {
    let self = this;
    return new Promise(function (resolve, reject) {
      self.afs.collection('news').doc('newsParentDoc').collection(collectionID)
        .doc(newsID)
        .delete()
        .then(() => {
          console.log('done');
          self.global.presentToast('Đã xóa thành công!')
          resolve(true);
        })
        .catch(function (error) {
          console.error('Error writing document: ', error);
          self.global.presentToast('Đã có lỗi khi kết nối với hệ thống. Vui lòng thử lại sau')
          reject(error)
        });
    });
  }

  getAllNewsCatergoriesMetadata() {
    let self = this;
    return new Promise(function (resolve, reject) {
      let collect = self.afs.collection('news').doc('newsParentDoc').collection('metadata').doc('metadata');
      let query = collect.ref
      query.get().then(
        res => {
          console.log(res)
          let result = null
          if (res.exists) {
            result = res.data();
          }
          resolve(result)
        }
      )
        .catch(err => {
          console.log(err)
          reject(err)
          self.global.presentToast('Đã có lỗi khi kết nối với hệ thống. Vui lòng thử lại sau')
        })
    });
  }

  getNewsOfCatergory(catergoryID) {
    let self = this;
    return new Promise(function (resolve, reject) {
      let collect = self.afs.collection('news').doc('newsParentDoc').collection(catergoryID)
      let query = collect.ref
      query.get().then(
        res => {
          console.log(res)
          let result = {
            data: [],
            hasContent: false
          }
          if (!res.empty) {
            res.forEach(function (doc) {
              console.log(doc.id, " => ", doc.data());
              let news=null
              news=doc.data();
              news['id']=doc.id
              doc.data()['id']=doc.id
              result.data.push(
                news
              )
              result.hasContent = true
            });
          }
          resolve(result)
        }
      )
        .catch(err => {
          console.log(err)
          reject(err)
          this.global.presentToast('Đã có lỗi khi kết nối với hệ thống. Vui lòng thử lại sau')
        })
    });
  }

  addNewsMediaFileURLToDocumentObject(url, catergoryID, newsID) {
    let self = this;
    return new Promise(function (resolve, reject) {
      const docRef =  self.afs.collection('news').doc('newsParentDoc').collection(catergoryID).doc(newsID)

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
        resolve(true)
      }).catch(function (error) {
        console.log("Transaction failed: ", error);
        reject(error)
      });
    });
  }

  setMediaArrayToDocument(arr, catergoryID, newsID) {
    let self = this;
    return new Promise(function (resolve, reject) {
      self.afs.collection('news').doc('newsParentDoc').collection(catergoryID).doc(newsID)
        .update({
          mediaList: arr})
            .then(() => {
              console.log('done');
              resolve(true);
            })
            .catch(function (error) {
              console.error('Error writing document: ', error);
              reject(error)
            })
        });
     }
}

