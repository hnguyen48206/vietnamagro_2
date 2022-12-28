import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { GlobalheroProvider } from '../globalhero/globalhero';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { database } from 'firebase';

@Injectable()
export class customerFirebaseController {
  constructor(public storage: Storage, public global: GlobalheroProvider, public http: HttpClient,
    public afs: AngularFirestore) {
  }
  getAllComments() {
    let self = this;
    return new Promise(function (resolve, reject) {
      let collect = self.afs.collection('customer');
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
              let comment = null
              comment = doc.data();
              comment['id'] = doc.id
              result.data.push(
                comment
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

  createComment(detail) {
    let self = this;
    //check if this email has been used before
    return new Promise(function (resolve, reject) {
      let collect = self.afs.collection('customer');
      let query = collect.ref.where("email", "==", detail.email)
      query.get().then(
        res => {
          console.log(res)
          self.global.presentToast('Chúng tôi đã ghi nhận thông tin của bạn và sẽ sớm phản hồi trong thời gian sớm nhất. Xin chân thành cảm ơn.')
          if (!res.empty) {
            //email này đã tồn tại, upate content vào email cũ
            console.log('old customer')
            
            res.forEach(function (doc) {
              console.log(doc.id, " => ", doc.data());
              self.updateCommentContent(doc.id, detail.content[0])
            });
          }
          else {
            //email này chưa tồn tại, tạo 1 customer mới
            console.log('new customer')
            collect.add(detail).then(
              res => {
                console.log(res.id)
              }
            )
              .catch(err => {
                console.log(err)
              })
          }
          resolve(true)
        }
      ).catch(
        err=>{ reject()}
      )
    });
  }

  updateCommentStatus(commentID, status) {
    let self = this;
    return new Promise(function (resolve, reject) {
      self.afs
        .collection('customer')
        .doc(commentID)
        .update({
          status: status,
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

  updateCommentContent(commentID, newContent) {
    let self = this;
    console.log('Nội dung mới: ' + newContent)
    return new Promise(function (resolve, reject) {
      const docRef = self.afs.collection('customer').doc(commentID)
      self.afs.firestore.runTransaction(transaction => {
        // This code may get re-run multiple times if there are conflicts.
        return transaction.get(docRef.ref).then(doc => {
          if (!doc.data().content) {
            transaction.update(docRef.ref, { mediaList: [newContent] });
          } else {
            let dataToUpdate = doc.data().content
            dataToUpdate.push(newContent);
            transaction.update(docRef.ref, { content: dataToUpdate });
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

  deleteComment(commentID) {
    let self = this;
    return new Promise(function (resolve, reject) {
      self.afs
        .collection('customer')
        .doc(commentID)
        .delete()
        .then(() => {
          console.log('done');
          self.global.presentToast('Xóa thành công!')
          resolve(true);
        })
        .catch(function (error) {
          console.error('Error writing document: ', error);
          self.global.presentToast('Đã có lỗi khi kết nối với hệ thống. Vui lòng thử lại sau')
          reject(error)
        });
    });
  }
}

