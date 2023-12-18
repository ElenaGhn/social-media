import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactNavComponent } from './components/contact-nav/contact-nav.component';
import { ContentFeedComponent} from "./components/content-feed/content-feed.component";
import { AboutComponent} from "./components/about/about.component";
import { PageNotFoundComponent} from "./components/page-not-found/page-not-found.component";
import { SharedPostsComponent} from "./components/shared-posts/shared-posts.component";
import { LoginComponent} from "./components/login/login.component";
import { RegisterComponent } from './components/register/register.component';
import { AuthGuard } from './guards/auth-guard.service';



const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: ContentFeedComponent, canActivate: [AuthGuard]},
  { path: 'contact', component: ContactNavComponent },
  { path: 'about', component: AboutComponent },
  { path: 'shared-post', component: SharedPostsComponent },
  { path: '**', component: PageNotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }

