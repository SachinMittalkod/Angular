import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NavbarComponent } from './Shared/navbar/navbar.component';
import { LoginComponent } from './Component/login/login.component';
import { AdminPanelComponent } from './Component/admin-panel/admin-panel.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './Material/material/material.module';
import { UserLandingpageComponent } from './Component/user-landingpage/user-landingpage.component';
import { AddbookComponent } from './Component/addbook/addbook.component';
import { ListofBooksComponent } from './Component/listof-books/listof-books.component';
import { RequestbookComponent } from './Component/requestbook/requestbook.component';
import { ListofadminbooksComponent } from './Component/listofadminbooks/listofadminbooks.component';
import { AvailabilitybooksComponent } from './Component/availabilitybooks/availabilitybooks.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { UpdatebookComponent } from './Component/updatebook/updatebook.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    AdminPanelComponent,
    UserLandingpageComponent,
    AddbookComponent,
    ListofBooksComponent,
    RequestbookComponent,
    ListofadminbooksComponent,
    AvailabilitybooksComponent,
    UpdatebookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
