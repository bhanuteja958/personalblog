import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';
import { Comment } from '../interfaces/comment.modal';

@Component({
  selector: 'app-viewpost',
  templateUrl: './viewpost.component.html',
  styleUrls: ['./viewpost.component.css']
})
export class ViewpostComponent implements OnInit {

  blogPost:any;
  docId:string;
  comment:Comment={
    name:'',
    comment:''
  };
  viewComments:boolean = false;
  comments:any[];
  viewSpinner:boolean=true;

  constructor(private router:ActivatedRoute,private firebaseservice:FirebaseService) { }

  onSubmit(firstName,comm,myForm){
    this.comment.name=firstName.control.value;
    this.comment.comment=comm.control.value;
    myForm.resetForm();
    this.firebaseservice.addComment(this.comment,this.docId).then((docRef)=>{
      alert("comment added succesfully");
    }).catch((error)=>{
      console.log(error);
    })
  }

  onClick(){
    this.viewComments = true;
    this.getComments();
  }

  getComments(){
    this.firebaseservice.getComments(this.docId).then((documentSnapShots)=>{
      this.comments = documentSnapShots.docs;   
      this.viewSpinner = false;
    })
  }

  onCommentAdded(){
    this.viewSpinner=true;
    this.getComments();
  }
  ngOnInit() {
    this.docId=this.router.snapshot.paramMap.get('postid');
    this.firebaseservice.getDoc(this.docId).then((documentSnapShot)=>{
      this.blogPost = documentSnapShot.data();
    })
    
  }

}
