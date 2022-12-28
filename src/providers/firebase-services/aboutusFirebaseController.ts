import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { GlobalheroProvider } from '../globalhero/globalhero';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class aboutusFirebaseController {
    constructor(public storage: Storage, public global: GlobalheroProvider, public http: HttpClient,
      public afs: AngularFirestore) {
    }
    getAboutUS() {
        let self = this;
        return new Promise(function (resolve, reject) {
          let collect = self.afs.collection('aboutus');
          let query = collect.ref
          query.get().then(
            res => {
              console.log(res)
              let result = {
                data: null,
                hasContent: false
              }
              if (!res.empty) {
                res.forEach(function (doc) {
                  console.log(doc.id, " => ", doc.data());
                  result.data = doc.data()
                  result.hasContent = true
                  result.data['id'] = doc.id
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
    
      createAboutUs(aboutus) {
        let self = this;
        return new Promise(function (resolve, reject) {
          let collect = self.afs.collection('aboutus');
          collect.add(aboutus).then(
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
    
      updateAboutUS(type, data) {
        console.log(data)
        let self = this;
        return new Promise(function (resolve, reject) {
          self.afs
            .collection('aboutus')
            .doc(data.id)
            .update({
              title: data.title,
              detail: data.detail,
              shortDescription: data.shortDescription,
              status:data.status,
              lastUpdated:self.global.getCurrentDateandTime()
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
}

