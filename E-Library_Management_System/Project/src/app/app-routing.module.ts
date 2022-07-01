import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooklistComponent } from './booklist/booklist.component';
import { AdminLoginComponent } from './Components/admin-login/admin-login.component';
import { LoggedinPageComponent } from './Components/loggedin-page/loggedin-page.component';

import { PagenotfoundComponent } from './Components/pagenotfound/pagenotfound.component';
import { RegisterPageComponent } from './Components/register-page/register-page.component';
import { UserloginComponent } from './Components/userlogin/userlogin.component';
import { NavbarComponent } from './Shared/Navbar/navbar.component';


const routes: Routes = [
  {path: '', redirectTo:'home' ,pathMatch:'full'},
  {path:'home',component:NavbarComponent}, 
  {path:'adminlogin',component:AdminLoginComponent},
  {path:'userlogin',component:UserloginComponent},  
  {path:'afterlogin', component:LoggedinPageComponent},
  {path:'booklist', component:BooklistComponent},
  {path:'register',component:RegisterPageComponent},
  {path:'**',component:PagenotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
