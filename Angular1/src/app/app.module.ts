import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { CartComponent } from './Components/cart/cart.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { PagenotfoundComponent } from './Components/pagenotfound/pagenotfound.component';
import { FormsModule } from '@angular/forms';
import { AddTocartComponent } from './Components/add-tocart/add-tocart.component';
import { ServiceComponent } from './Components/service/service.component';
import { SwitchComponent } from './Components/switch/switch.component';








@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CartComponent,
    AboutUsComponent,
    PagenotfoundComponent,
    AddTocartComponent,
    ServiceComponent,
    SwitchComponent,
   
  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }











