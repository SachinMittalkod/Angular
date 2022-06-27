import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './Pages/admin-login/admin-login.component';
import { LoggedinPageComponent } from './Pages/loggedin-page/loggedin-page.component';
import { MenuComponent } from './Pages/menu/menu.component';
import { PagenotfoundComponent } from './Pages/pagenotfound/pagenotfound.component';
import { UserloginComponent } from './Pages/userlogin/userlogin.component';


const routes: Routes = [
  {path: '', redirectTo:'home' ,pathMatch:'full'},
  {path:'home',component:MenuComponent},
  {path:'userlogin',component:UserloginComponent},  
  {path:'afterlogin', component:LoggedinPageComponent},
  {path:'adminlogin',component:AdminLoginComponent},
  {path:'**',component:PagenotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
