import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPanelComponent } from './Component/admin-panel/admin-panel.component';
import { LoginComponent } from './Component/login/login.component';
import { UserLandingpageComponent } from './Component/user-landingpage/user-landingpage.component';

const routes: Routes = [
  {path:'' , redirectTo:'/login' , pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'admin', component:AdminPanelComponent},
  {path:'userlanding', component:UserLandingpageComponent},
  {path:'adminlanding',component:AdminPanelComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
