import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooklistComponent } from './booklist/booklist.component';
import { AddbookComponent } from './Components/addbook/addbook.component';
import { AdminLandingPageComponent } from './Components/admin-landing-page/admin-landing-page.component';
import { AdminLoginComponent } from './Components/admin-login/admin-login.component';
import { LoggedinPageComponent } from './Components/loggedin-page/loggedin-page.component';

import { PagenotfoundComponent } from './Components/pagenotfound/pagenotfound.component';
import { RegisterPageComponent } from './Components/register-page/register-page.component';
import { UserloginComponent } from './Components/userlogin/userlogin.component';
import { ViewRequestComponent } from './Components/view-request/view-request.component';
import { NavbarComponent } from './Shared/Navbar/navbar.component';


const routes: Routes = [
  {path: '', redirectTo:'home' ,pathMatch:'full'},
  {path:'home',component:NavbarComponent}, 
  {path:'adminlogin',component:AdminLoginComponent},
  {path:'userlogin',component:UserloginComponent},  
  {path:'afterlogin', component:LoggedinPageComponent},
  {path:'booklist', component:BooklistComponent},
  {path:'addbook', component:AddbookComponent},
  {path:'register',component:RegisterPageComponent},
  {path:'adminlanding', component:AdminLandingPageComponent},
  {path:'viewrequest', component:ViewRequestComponent},
  {path:'**',component:PagenotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
