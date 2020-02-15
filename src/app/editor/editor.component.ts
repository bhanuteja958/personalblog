import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CloudinaryImageUploadAdapter } from 'ckeditor-cloudinary-uploader-adapter';
import { BlogPost } from '../interfaces/blogpost.modal';
import { FirebaseService } from '../services/firebase.service';


@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  editor = ClassicEditor;
  blogPost:BlogPost = {
    title:'',
    content:'',
    category:'',
  };
  obj:any;

  private editorConfig = {
      placeholder:"Enter text here ....",
      extraPlugins: [ this.imagePluginFactory ],
      removePlugins:['ImageCaption']
  }

  constructor(private firebaseService:FirebaseService) { }


  imagePluginFactory(editor) {
    editor.plugins.get( 'FileRepository' ).createUploadAdapter = ( loader ) => {
    return new CloudinaryImageUploadAdapter( loader,   "personalblogimageupload", 'personalblogupload',[ 160, 500, 1000, 1052 ] );
    };
  }

  onSubmit(blogPostTitle,blogPostContent,blogPostCategory){
      this.blogPost.title = blogPostTitle.control.value;
      this.blogPost.content = blogPostContent.control.value;
      this.blogPost.category = blogPostCategory.control.value;
      this.firebaseService.addBlogPost(this.blogPost)
  }

  ngOnInit() {
  }

}
