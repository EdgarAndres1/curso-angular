import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from './layout/layout.module';
import { RoutesModule } from './routes/routes.module';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';




const firebaseConfig = {
    apiKey: "AIzaSyCLNQwqcOvRzDxn5zrWdZ4QZtd-8gtJYbY",
    authDomain: "pelisup-bad13.firebaseapp.com",
    projectId: "pelisup-bad13",
    storageBucket: "pelisup-bad13.appspot.com",
    messagingSenderId: "962261302370",
    appId: "1:962261302370:web:1aef6d82d0c9cc4ecfa53b",
    measurementId: "G-H8LX7VER6N"
}
;


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    RoutesModule,
    SharedModule,
    HttpClientModule,
    AngularFireAuthModule,
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),

    
  
  ],
  providers: [{ provide: FIREBASE_OPTIONS, useValue: firebaseConfig }],
  bootstrap: [AppComponent]
})
export class AppModule { }
