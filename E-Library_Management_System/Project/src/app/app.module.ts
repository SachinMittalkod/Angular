
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RegisterPageComponent } from './Components/register-page/register-page.component';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from './material/material.module';
import { UserloginComponent } from './Components/userlogin/userlogin.component';
import { AdminLoginComponent } from './Components/admin-login/admin-login.component';

import { LoggedinPageComponent } from './Components/loggedin-page/loggedin-page.component';
import { PagenotfoundComponent } from './Components/pagenotfound/pagenotfound.component';

import { HomeComponent } from './Components/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './Shared/Navbar/navbar.component';
import { BooklistComponent } from './booklist/booklist.component';
import { HttpClientModule } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import { RequestbookComponent } from './Components/requestbook/requestbook.component';

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

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule,
    MatCardModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
