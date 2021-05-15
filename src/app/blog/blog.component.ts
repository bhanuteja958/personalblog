import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  blogPosts:any[] ; 
  constructor( public firebaseService:FirebaseService,
             ) 
             { }
  disabledNext:boolean = false;
  disabledPrevious:boolean = true;

  loadNext(){
      this.firebaseService.nextPosts(this.blogPosts[this.blogPosts.length-1]).then((documentSnapShots)=>{
        this.blogPosts=documentSnapShots.docs;
        this.getDoc('next');
        this.getDoc('previous');
      })
  }

  loadPrevious(){
    this.firebaseService.previousPosts(this.blogPosts[0]).then((documentSnapShots)=>{
      window.scrollTo(0,0);
      this.blogPosts=documentSnapShots.docs;
      this.getDoc('previous');
      this.getDoc('next');
    })
  }

  getDoc(direction:string){
    if(direction === 'previous'){
      this.firebaseService.getSingleBlogPost(this.blogPosts[0],'previous').then((documentSnapShot)=>{
        if(documentSnapShot.size===0){
          this.disabledPrevious = true;
        }
        else{
          this.disabledPrevious = false;
        }
      })
    }
    else{
      this.firebaseService.getSingleBlogPost(this.blogPosts[this.blogPosts.length-1],'next').then((documentSnapShot)=>{
        if(documentSnapShot.size===0){
          this.disabledNext = true;
        }
        else{
          this.disabledNext = false;
        }
      })
    }
  }

  ngOnInit() {
      this.firebaseService.getAllBlogPosts().then((documentSnapShots)=>{
        this.blogPosts =  documentSnapShots.docs;
      });
  }

}
