import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  recentUploads:any[];

  constructor(private firebaseservice:FirebaseService) { }

  ngOnInit() {
    this.firebaseservice.getRecentUploads().then((documentSnapShots)=>{
      this.recentUploads = documentSnapShots.docs;
    })
  }

}
