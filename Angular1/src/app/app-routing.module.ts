import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutUsComponent } from './Components/about-us/about-us.component';
import { AddTocartComponent } from './Components/add-tocart/add-tocart.component';
import { CartComponent } from './Components/cart/cart.component';
// import { DefaultChildComponent } from './Components/default-child/default-child.component';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { PagenotfoundComponent } from './Components/pagenotfound/pagenotfound.component';
import { ServiceComponent } from './Components/service/service.component';

const routes: Routes = [
  {path:'', redirectTo:'/home-page', pathMatch:'full'},
  {path:'home-page' , component:HomePageComponent},
  {path:'service', component:ServiceComponent},
  {path:'about', loadChildren:() => import('./Components/about-us/aboutus.module').then(k=>k.AboutusModule)},
  {path:'products',  loadChildren:() => import('./Components/product/product.module').then(m=>m.ProductModule)},

  {path:'cart', component:CartComponent, children:[
    {path:'addtocart', component:AddTocartComponent,children:[
      {path:'home-page' , component:HomePageComponent}
    ]},
    
    
  ]},
  {path:'**', component:PagenotfoundComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
