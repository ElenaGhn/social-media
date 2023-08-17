import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ContentFeedComponent } from './components/content-feed/content-feed.component';
import { PostComponent } from './components/post/post.component';
import { FooterComponent } from './components/footer/footer.component';
import { MatIconModule} from '@angular/material/icon';
import { AddNewPostComponent } from './components/add-new-post/add-new-post.component'
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ContactNavComponent } from './components/contact-nav/contact-nav.component';
import { NewsComponent } from './components/news/news.component';
import { AboutComponent } from './components/about/about.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SharedPostsComponent } from './components/shared-posts/shared-posts.component';
import { ElementsAboutComponent } from './components/elements-about/elements-about.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AngularFireModule } from '@angular/fire/compat';



@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ContentFeedComponent,
    PostComponent,
    FooterComponent,
    AddNewPostComponent,
    ContactNavComponent,
    NewsComponent,
    AboutComponent,
    PageNotFoundComponent,
    SharedPostsComponent,
    ElementsAboutComponent,
    LoginComponent,
    RegisterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
