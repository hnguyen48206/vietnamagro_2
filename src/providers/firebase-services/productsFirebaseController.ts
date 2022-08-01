import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { GlobalheroProvider } from '../globalhero/globalhero';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { FirebaseServicesProvider } from './firebase-services';

@Injectable()
export class productsFirebaseController {
  constructor(public storage: Storage, public global: GlobalheroProvider, public http: HttpClient,
    public afs: AngularFirestore, public fbservices: FirebaseServicesProvider) {
  }


  createNews(detail, collectionID) {
    let self = this;
    detail.lastUpdated = self.global.getCurrentDateandTime()
    return new Promise(function (resolve, reject) {
      let collect = self.afs.collection('products').doc('productsParentDoc').collection(collectionID)
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
        .then(() => {
          console.log('done');
          self.global.presentToast('Cập nhật thành công!')
          resolve();
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
      self.afs.collection('products').doc('productsParentDoc').collection(collectionID)
        .doc(newsID)
        .delete()
        .then(() => {
          console.log('done');
          self.global.presentToast('Đã xóa thành công!')
          resolve();
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
      let collect = self.afs.collection('products').doc('productsParentDoc').collection('metadata').doc('metadata');
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

  getNewsOfCatergory(catergoryID, filter) {
    let self = this;
    return new Promise(function (resolve, reject) {
      let collect = self.afs.collection('products').doc('productsParentDoc').collection(catergoryID)
      let query
      if(filter!=null)
      query = collect.ref.where('groupName','==',filter.groupName).where('status','==',filter.status)
      else
      query = collect.ref
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
              let news = null
              news = doc.data();
              news['id'] = doc.id
              doc.data()['id'] = doc.id
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
      const docRef = self.afs.collection('products').doc('productsParentDoc').collection(catergoryID).doc(newsID)

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

  setMediaArrayToDocument(arr, catergoryID, newsID) {
    let self = this;
    return new Promise(function (resolve, reject) {
      self.afs.collection('products').doc('productsParentDoc').collection(catergoryID).doc(newsID)
        .update({
          mediaList: arr
        })
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

  createNewItemGroups(avatar, groupName, catergoryID) {
    let self = this;
    return new Promise(function (resolve, reject) {
      //Upload the group avatar first
      self.fbservices.fbUploadFiles(avatar, 'products').then(
        url => {
          //url return
          console.log(url)
          const docRef = self.afs.collection('products').doc('productsParentDoc').collection(catergoryID).doc('productGroups');
          self.afs.firestore.runTransaction(transaction => {
            // This code may get re-run multiple times if there are conflicts.
            let dataToUpdate
            return transaction.get(docRef.ref).then(doc => {
              if (!doc.data().data) {
                let stringtifiedObject = JSON.stringify({
                  groupName: groupName,
                  groupAvatar: url
                })
                dataToUpdate = [stringtifiedObject]
                transaction.update(docRef.ref, { data: dataToUpdate });
              } else {
                dataToUpdate = doc.data().data
                let stringtifiedObject = JSON.stringify({
                  groupName: groupName,
                  groupAvatar: url
                })
                dataToUpdate.push(stringtifiedObject);
                transaction.update(docRef.ref, { data: dataToUpdate });
              }
            });
          }).then(function () {
            console.log("Transaction successfully committed!");
            resolve()
          }).catch(function (error) {
            console.log("Transaction failed: ", error);
            reject(error)
          });
        }
      ).catch(err => {
        console.log(err)
      })
    });
  }
  updateExistingItemGroup(newAvatar, newGroupName, oldGroup, catergoryID) {
    let self = this;
    return new Promise(function (resolve, reject) {
      if (newAvatar != '') {
        //There's a new media file, firstly it will need to be uploaded
        self.fbservices.fbUploadFiles(newAvatar, 'products').then(
          url => {
            //url return
            console.log(url)
            let oldGroupData = JSON.parse(oldGroup)
            const docRef = self.afs.collection('products').doc('productsParentDoc').collection(catergoryID).doc('productGroups');
            self.afs.firestore.runTransaction(transaction => {
              return transaction.get(docRef.ref).then(doc => {
                let dataToUpdate = doc.data().data
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
              self.fbservices.deleteFileFromfbStorage(oldGroupData.groupAvatar)
              if (newGroupName != null) {
                self.updateExistingProductsWithNewGroupName(catergoryID, oldGroupData.groupName, newGroupName).then(res => {
                  resolve(res)
                }).catch(err => reject(err))
              }
              else {
                resolve()
              }
            }).catch(function (error) {
              console.log("Transaction failed: ", error);
              reject(error)
            });
          }
        ).catch(err => {
          //upload file fail
          console.log(err)
          reject(err)
        })
      }
      else {
        debugger
        //no new media, just update groupname
        let oldGroupData = JSON.parse(oldGroup)
        const docRef = self.afs.collection('products').doc('productsParentDoc').collection(catergoryID).doc('productGroups');
        self.afs.firestore.runTransaction(transaction => {
          return transaction.get(docRef.ref).then(doc => {
            let dataToUpdate = doc.data().data
            //add new group then remove old group from the list
            dataToUpdate.push(JSON.stringify({
              groupName: newGroupName,
              groupAvatar: oldGroupData.groupAvatar
            }));

            if (dataToUpdate.indexOf(oldGroup) >= 0) {
              dataToUpdate.splice(dataToUpdate.indexOf(oldGroup), 1);
            }
            transaction.update(docRef.ref, { data: dataToUpdate });
          });
        }).then(function () {
          console.log("Transaction successfully committed!");
          //after the list of group has been succesfully updated, delete old media file + update all existing product with the new group name
          if (newGroupName != null) {
            self.updateExistingProductsWithNewGroupName(catergoryID, oldGroupData.groupName, newGroupName).then(res => {
              resolve(res)
            }).catch(err => reject(err))
          }
          else {
            resolve()
          }
        }).catch(function (error) {
          console.log("Transaction failed: ", error);
          reject(error)
        });
      }
    });
  }
  deleteExistingItemGroup(catergoryID, groupName) {
    let self = this;
    return new Promise(function (resolve, reject) {
      const docRef = self.afs.collection('products').doc('productsParentDoc').collection(catergoryID).doc('productGroups');

      self.afs.firestore.runTransaction(transaction => {
        // This code may get re-run multiple times if there are conflicts.
        return transaction.get(docRef.ref).then(doc => {
          let dataToUpdate = doc.data().data
          //remove old group from the list
          if (dataToUpdate.indexOf(groupName) >= 0) {
            dataToUpdate.splice(dataToUpdate.indexOf(groupName), 1);
          }
          transaction.update(docRef.ref, { data: dataToUpdate });
        });
      }).then(function () {
        console.log("Transaction successfully committed!");
        //after the list of group has been succesfully  updated, update all existing product with the new group name
        let oldGroupData = JSON.parse(groupName)
        self.fbservices.deleteFileFromfbStorage(oldGroupData.groupAvatar)
        self.updateExistingProductsWithNewGroupName(catergoryID, oldGroupData.groupName, '').then(res => {
          resolve(res)
        }).catch(err => reject(err))
      }).catch(function (error) {
        console.log("Transaction failed: ", error);
        reject(error)
      });
    });
  }
  updateExistingProductsWithNewGroupName(catergoryID, oldGroupName, newGroupName) {
    let self = this;
    return new Promise(function (resolve, reject) {
      let collect = self.afs.collection('products').doc('productsParentDoc').collection(catergoryID)
      let query = collect.ref.where("groupName", "==", oldGroupName)
      query.get().then(
        res => {
          console.log(res)
          if (!res.empty) {
            let batch = self.afs.firestore.batch();
            res.forEach(function (doc) {
              console.log(doc.id, " => ", doc.data());
              let ref = self.afs.collection('products').doc('productsParentDoc').collection(catergoryID).doc(doc.id).ref;
              batch.update(ref, {
                groupName: newGroupName
              });
            });
            batch.commit().then(res => {
              console.log(res)
              resolve(true)
            }).catch(err => {
              reject(err)
            })
          }
          else
            resolve(null)
        }
      )
        .catch(err => {
          console.log(err)
          reject(err)
          this.global.presentToast('Đã có lỗi khi kết nối với hệ thống. Vui lòng thử lại sau')
        })
    });
  }
}

