import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactNavComponent } from './components/contact-nav/contact-nav.component';
import { ContentFeedComponent} from "./components/content-feed/content-feed.component";
import {AboutComponent} from "./components/about/about.component";
import {PageNotFoundComponent} from "./components/page-not-found/page-not-found.component";
import {SharedPostsComponent} from "./components/shared-posts/shared-posts.component";
import {LoginComponent} from "./components/login/login.component";


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: ContentFeedComponent },
  { path: 'contact', component: ContactNavComponent },
  { path: 'about', component: AboutComponent },
  { path: 'shared-post', component: SharedPostsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

