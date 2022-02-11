import { NotesComponent } from './notes/notes.component';
import { ReLoginComponent } from './re-login/re-login.component';
import { ReRegisterComponent } from './re-register/re-register.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NotDiscountedComponent } from './products/not-discounted/not-discounted.component';
import { DiscountedComponent } from './products/discounted/discounted.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { PostsComponent } from './posts/posts.component';
import { UsersComponent } from './users/users.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'Notes', component: NotesComponent },
  { path: 'Re-Register', component: ReRegisterComponent },
  { path: 'Re-Login', component: ReLoginComponent },
  { path: 'Register', component: RegisterComponent },
  { path: 'Login', component: LoginComponent },
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: 'Users', component: UsersComponent },
  { path: 'Posts', component: PostsComponent },
  {
    path: 'Products',
    component: ProductsComponent,
    children: [
      { path: 'discounted', component: DiscountedComponent },
      { path: 'notDiscounted', component: NotDiscountedComponent },
    ],
  },
  { path: 'Home', component: HomeComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
