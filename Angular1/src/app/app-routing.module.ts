import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { CartComponent } from './Components/cart/cart.component';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { PagenotfoundComponent } from './Components/pagenotfound/pagenotfound.component';

const routes: Routes = [
  {path:'', redirectTo:'/home-page', pathMatch:'full'},
  {path:'home-page' , component:HomePageComponent},
  {path:'about', component:AboutUsComponent},
  {path:'cart', component:CartComponent},
  {path:'**', component:PagenotfoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
