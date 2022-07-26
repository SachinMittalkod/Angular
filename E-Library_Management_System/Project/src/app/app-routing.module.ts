import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooklistComponent } from './Components/User/booklist/booklist.component';
import { AddbookComponent } from './Components/Admin/addbook/addbook.component';
import { AdminLandingPageComponent } from './Components/Admin/admin-landing-page/admin-landing-page.component';
import { AdminLoginComponent } from './Components/Admin/admin-login/admin-login.component';
import { LoggedinPageComponent } from './Components/User/loggedin-page/loggedin-page.component';
import { PagenotfoundComponent } from './Components/pagenotfound/pagenotfound.component';
import { RegisterPageComponent } from './Components/User/register-page/register-page.component';
import { UserloginComponent } from './Components/User/userlogin/userlogin.component';
import { ViewRequestComponent } from './Components/Admin/view-request/view-request.component';
import { NavbarComponent } from './Shared/Navbar/navbar.component';
import { AdminViewBooksComponent } from './Components/Admin/admin-view-books/admin-view-books.component';
import { ListofadminbooksComponent } from './Components/Admin/listofadminbooks/listofadminbooks.component';
import { UpdateBookComponent } from './Components/Admin/update-book/update-book.component';
import { GaurdGuard } from './Shared/gaurd.guard';
import { RequestHistoryComponent } from './Components/Admin/request-history/request-history.component';





const routes: Routes = [
  {path: '', redirectTo:'home' ,pathMatch:'full'},
  {path:'home',component:NavbarComponent, }, 
  {path:'adminlogin',component:AdminLoginComponent},
  {path:'login',component:UserloginComponent},  
  {path:'afterlogin', component:LoggedinPageComponent, },
  {path:'booklist', component:BooklistComponent},
  {path:'addbook', component:AddbookComponent},
  {path:'register',component:RegisterPageComponent},
  {path:'updat e', component:UpdateBookComponent},

  // {path:'adminlanding', component:AdminLandingPageComponent,canActivate:[GaurdGuard],children:[
    {path:'adminlanding', component:AdminLandingPageComponent,children:[
    {path:'adminlistbooks' , component:ListofadminbooksComponent},
    {path:'viewrequest', component:ViewRequestComponent},
  {path:'requesthistory', component:RequestHistoryComponent}]},
  // {path:'viewrequest', component:ViewRequestComponent},
  {path:'adminviewbook', component:AdminViewBooksComponent},
  // {path:'adminlistbooks' , component:ListofadminbooksComponent},
  {path:'**',component:PagenotfoundComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }





