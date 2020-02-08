import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/analytics';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { AboutComponent } from './about/about.component';
import { MatCardModule } from '@angular/material/card';
import { FooterComponent } from './footer/footer.component';
import { EditorComponent } from './editor/editor.component';
import { FormsModule } from '@angular/forms';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input'; 
import { MatFormFieldModule } from '@angular/material/form-field';


var firebaseConfig = {
  apiKey: "AIzaSyAavXZ8Syp-i4DqPcpP0YIzDHE0iSFdxv0",
  authDomain: "personalblog-90c0b.firebaseapp.com",
  databaseURL: "https://personalblog-90c0b.firebaseio.com",
  projectId: "personalblog-90c0b",
  storageBucket: "personalblog-90c0b.appspot.com",
  messagingSenderId: "420496565841",
  appId: "1:420496565841:web:405e3141b1d03943ccfa70",
  measurementId: "G-X8MG2WXQX8"
};

firebase.initializeApp(firebaseConfig);


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AboutComponent,
    FooterComponent,
    EditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    FormsModule,
    CKEditorModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
