
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RegisterPageComponent } from './Components/User/register-page/register-page.component';
import { FormsModule } from '@angular/forms';
// import { MaterialModule } from './material/material.module';
import { MaterialModule } from '../app/Shared/material/material.module'
import { UserloginComponent } from './Components/User/userlogin/userlogin.component';
import { AdminLoginComponent } from './Components/Admin/admin-login/admin-login.component';
import { LoggedinPageComponent } from './Components/User/loggedin-page/loggedin-page.component';
import { PagenotfoundComponent } from './Components/pagenotfound/pagenotfound.component';

import { ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './Shared/Navbar/navbar.component';
import { BooklistComponent } from './Components/User/booklist/booklist.component';
import { HttpClientModule } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import { RequestbookComponent } from './Components/User/requestbook/requestbook.component';
import { AdminLandingPageComponent } from './Components/Admin/admin-landing-page/admin-landing-page.component';
import { ViewRequestComponent } from './Components/Admin/view-request/view-request.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AddbookComponent } from './Components/Admin/addbook/addbook.component';
import { ToastrModule } from 'ngx-toastr';
import { AdminViewBooksComponent } from './Components/Admin/admin-view-books/admin-view-books.component';
import { ListofadminbooksComponent } from './Components/Admin/listofadminbooks/listofadminbooks.component';
import { UpdateBookComponent } from './Components/Admin/update-book/update-book.component';
import { RequestHistoryComponent } from './Components/Admin/request-history/request-history.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterPageComponent,
    UserloginComponent,
    AdminLoginComponent,  
    LoggedinPageComponent,
    PagenotfoundComponent,
    
    NavbarComponent,
    BooklistComponent,
    RequestbookComponent,
    AdminLandingPageComponent,
    ViewRequestComponent,
    AddbookComponent,
    AdminViewBooksComponent,
    ListofadminbooksComponent,
    UpdateBookComponent,
    RequestHistoryComponent,

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




