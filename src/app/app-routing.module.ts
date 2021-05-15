import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { HomeComponent } from './home/home.component';
import { ViewpostComponent } from './viewpost/viewpost.component';
import { EditorComponent } from './editor/editor.component';


const routes: Routes = [
  {path:" ",component:HomeComponent},
  {path:"about",component:AboutComponent},
  {path:"blog",component:BlogComponent},
  {path:"view/:postid",component:ViewpostComponent},
  {path:"editor",component:EditorComponent},
  {path:"**",component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
