import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import { BlogPost } from '../interfaces/blogpost.modal';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor() { }

  db = firebase.firestore();

  //adding BlogPost to firebase Cloud firestore
  addBlogPost(blogPost:BlogPost){
    this.db.collection('blogPosts').add({
      title:blogPost.title,
      content:blogPost.content,
      timestamp:firebase.firestore.Timestamp.now(),
      author: "Pateel Bhanu Teja",
      category:blogPost.category,
      likes : 0
    }).then((docRef)=>{
      alert("Document added succesfully")
    }).catch((error)=>{
      console.log(error);
    });
  }

  //getting BlogPosts from firebase cloud firestore
  getAllBlogPosts(){
    return this.db.collection('blogPosts').orderBy("timestamp").limit(5).get();
  }
  //get next set of BlogPosts
  nextPosts(last){
    return this.db.collection('blogPosts').orderBy("timestamp").startAfter(last).limit(5).get();
  }
  //get previous set of BlogPosts
  previousPosts(first){
    return this.db.collection('blogPosts').orderBy("timestamp").endBefore(first).limitToLast(5).get();
  }

  //get a single BlogPost
  getSingleBlogPost(doc,direction){
    if(direction === 'previous'){
      return this.db.collection('blogPosts').orderBy("timestamp").endBefore(doc).limitToLast(1).get();
    }
    else{
      return this.db.collection('blogPosts').orderBy("timestamp").startAfter(doc).limit(1).get();
    }
  }
}
