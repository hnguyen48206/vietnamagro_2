import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { GlobalheroProvider } from '../globalhero/globalhero';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class contactFirebaseController {
    constructor(public storage: Storage, public global: GlobalheroProvider, public http: HttpClient,
      public afs: AngularFirestore) {
    }
    getContact() {
        let self = this;
        return new Promise(function (resolve, reject) {
          let collect = self.afs.collection('contact');
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
                  let contact=null
                  contact=doc.data();
                  contact['id']=doc.id
                  result.data=contact
                  result.hasContent = true
                });
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
    
      createContact(detail) {
        let self = this;
        return new Promise(function (resolve, reject) {
          let collect = self.afs.collection('contact');
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
    
      updateContact(data) {
        console.log(data)
        let id=data.id;
        delete data['id']
        let self = this;
        return new Promise(function (resolve, reject) {
          self.afs
            .collection('contact')
            .doc(id)
            .set(data)
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

