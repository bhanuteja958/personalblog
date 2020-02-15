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
import { FirebaseService } from './services/firebase.service';
import { BlogComponent } from './blog/blog.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDividerModule } from '@angular/material/divider';

var firebaseConfig = {
  apiKey: "AIzaSyAFPRXAiZkC92ok6d7_yRwVIGU0WH-OBcY",
  authDomain: "personalblog-4dd65.firebaseapp.com",
  databaseURL: "https://personalblog-4dd65.firebaseio.com",
  projectId: "personalblog-4dd65",
  storageBucket: "personalblog-4dd65.appspot.com",
  messagingSenderId: "987671766762",
  appId: "1:987671766762:web:8f97bdea405a1eafe31993"
};

firebase.initializeApp(firebaseConfig);


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AboutComponent,
    FooterComponent,
    EditorComponent,
    BlogComponent
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
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatDividerModule
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
