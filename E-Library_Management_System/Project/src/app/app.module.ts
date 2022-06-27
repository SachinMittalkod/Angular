;
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RegisterPageComponent } from './Pages/register-page/register-page.component';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from './material/material.module';
import { UserloginComponent } from './Pages/userlogin/userlogin.component';
import { AdminLoginComponent } from './Pages/admin-login/admin-login.component';

import { LoggedinPageComponent } from './Pages/loggedin-page/loggedin-page.component';
import { PagenotfoundComponent } from './Pages/pagenotfound/pagenotfound.component';
import { MenuComponent } from './Pages/menu/menu.component';
import { HomeComponent } from './Pages/home/home.component';





@NgModule({
  declarations: [
    AppComponent,
 
    RegisterPageComponent,
    UserloginComponent,
    AdminLoginComponent,
   
    LoggedinPageComponent,
    PagenotfoundComponent,
    MenuComponent,
    HomeComponent,
   
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
 
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
