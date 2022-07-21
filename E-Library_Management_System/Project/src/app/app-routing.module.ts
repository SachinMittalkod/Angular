import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooklistComponent } from './Components/booklist/booklist.component';
import { AddbookComponent } from './Components/addbook/addbook.component';
import { AdminLandingPageComponent } from './Components/admin-landing-page/admin-landing-page.component';
import { AdminLoginComponent } from './Components/admin-login/admin-login.component';
import { LoggedinPageComponent } from './Components/loggedin-page/loggedin-page.component';
import { PagenotfoundComponent } from './Components/pagenotfound/pagenotfound.component';
import { RegisterPageComponent } from './Components/register-page/register-page.component';
import { UserloginComponent } from './Components/userlogin/userlogin.component';
import { ViewRequestComponent } from './Components/view-request/view-request.component';
import { NavbarComponent } from './Shared/Navbar/navbar.component';
import { AdminViewBooksComponent } from './Components/admin-view-books/admin-view-books.component';
import { ListofadminbooksComponent } from './Components/listofadminbooks/listofadminbooks.component';
import { UpdateBookComponent } from './Components/update-book/update-book.component';
import { GaurdGuard } from './Shared/gaurd.guard';





const routes: Routes = [
  {path: '', redirectTo:'home' ,pathMatch:'full'},
  {path:'home',component:NavbarComponent, }, 
  {path:'adminlogin',component:AdminLoginComponent},
  {path:'userlogin',component:UserloginComponent},  
  {path:'afterlogin', component:LoggedinPageComponent,canActivate:[GaurdGuard],},
  {path:'booklist', component:BooklistComponent},
  {path:'addbook', component:AddbookComponent},
  {path:'register',component:RegisterPageComponent},
  {path:'updat e', component:UpdateBookComponent},
  {path:'adminlanding', component:AdminLandingPageComponent,canActivate:[GaurdGuard], children:[
    {path:'adminlistbooks' , component:ListofadminbooksComponent},
    {path:'viewrequest', component:ViewRequestComponent}]},
  // {path:'viewrequest', component:ViewRequestComponent},
  {path:'adminviewbook', component:AdminViewBooksComponent,canActivate:[GaurdGuard]},
  // {path:'adminlistbooks' , component:ListofadminbooksComponent},
  {path:'**',component:PagenotfoundComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }





