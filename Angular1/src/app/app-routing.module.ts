import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { AddTocartComponent } from './Components/add-tocart/add-tocart.component';
import { CartComponent } from './Components/cart/cart.component';
import { DefaultChildComponent } from './Components/default-child/default-child.component';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { PagenotfoundComponent } from './Components/pagenotfound/pagenotfound.component';
import { RemovecartComponent } from './Components/removecart/removecart.component';

const routes: Routes = [
  {path:'', redirectTo:'/home-page', pathMatch:'full'},
  {path:'home-page' , component:HomePageComponent},
  {path:'about', component:AboutUsComponent},
  {path:'cart', component:CartComponent, children:[
    // {path:'', redirectTo:'/addtocart', pathMatch:'full'},
    // {path:'default', component:DefaultChildComponent},
    {path:'addtocart', component:AddTocartComponent},
    {path:'removecart',component:RemovecartComponent}
  ]},
  {path:'**', component:PagenotfoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
