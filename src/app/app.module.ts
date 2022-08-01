import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { firebaseConfig, FirebaseServicesProvider } from '../providers/firebase-services/firebase-services';
import { HttpClientModule } from '@angular/common/http';
import { GlobalheroProvider } from '../providers/globalhero/globalhero';
// import { AngularFireModule } from 'angularfire2';
// import { AngularFirestoreModule } from 'angularfire2/firestore';
// import { AngularFireAuth } from 'angularfire2/auth';
// import { AngularFireDatabaseModule } from '@angular/fire/database';
// import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth'
import { AngularFireStorage } from '@angular/fire/storage';
import { aboutusFirebaseController } from '../providers/firebase-services/aboutusFirebaseController';
import { productsFirebaseController } from '../providers/firebase-services/productsFirebaseController';
import { newsFirebaseController } from '../providers/firebase-services/newsFirebaseController';

import { DataTableModule } from "angular2-datatable";
import { processFirebaseController } from '../providers/firebase-services/processFirebaseController';
import { supplierFirebaseController } from '../providers/firebase-services/supplierFirebaseController';
import { customerFirebaseController } from '../providers/firebase-services/customerFirebaseController';
import { contactFirebaseController } from '../providers/firebase-services/contactFirebaseController';


@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    HttpClientModule,
    IonicStorageModule.forRoot(),
    DataTableModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    FirebaseServicesProvider,
    GlobalheroProvider,
    AngularFireAuth,
    AngularFireStorage,
    aboutusFirebaseController,
    productsFirebaseController,
    newsFirebaseController,
    processFirebaseController,
    supplierFirebaseController,
    customerFirebaseController,
    contactFirebaseController
  ]
})
export class AppModule { }
