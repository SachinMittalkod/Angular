
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RegisterPageComponent } from './Components/register-page/register-page.component';
import { FormsModule } from '@angular/forms';
// import { MaterialModule } from './material/material.module';
import { MaterialModule } from '../app/Shared/material/material.module'
import { UserloginComponent } from './Components/userlogin/userlogin.component';
import { AdminLoginComponent } from './Components/admin-login/admin-login.component';
import { LoggedinPageComponent } from './Components/loggedin-page/loggedin-page.component';
import { PagenotfoundComponent } from './Components/pagenotfound/pagenotfound.component';
import { HomeComponent } from './Components/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './Shared/Navbar/navbar.component';
import { BooklistComponent } from './Components/booklist/booklist.component';
import { HttpClientModule } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import { RequestbookComponent } from './Components/requestbook/requestbook.component';
import { AdminLandingPageComponent } from './Components/admin-landing-page/admin-landing-page.component';
import { ViewRequestComponent } from './Components/view-request/view-request.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AddbookComponent } from './Components/addbook/addbook.component';
import { ToastrModule } from 'ngx-toastr';
import { AdminViewBooksComponent } from './Components/admin-view-books/admin-view-books.component';
import { ListofadminbooksComponent } from './Components/listofadminbooks/listofadminbooks.component';
import { UpdateBookComponent } from './Components/update-book/update-book.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterPageComponent,
    UserloginComponent,
    AdminLoginComponent,  
    LoggedinPageComponent,
    PagenotfoundComponent,
    HomeComponent,
    NavbarComponent,
    BooklistComponent,
    RequestbookComponent,
    AdminLandingPageComponent,
    ViewRequestComponent,
    AddbookComponent,
    AdminViewBooksComponent,
    ListofadminbooksComponent,
    UpdateBookComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule,
    MatCardModule,
    Ng2SearchPipeModule,
    ToastrModule.forRoot()
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }




