import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPanelComponent } from './Component/admin-panel/admin-panel.component';
import { AvailabilitybooksComponent } from './Component/availabilitybooks/availabilitybooks.component';
import { ListofBooksComponent } from './Component/listof-books/listof-books.component';
import { ListofadminbooksComponent } from './Component/listofadminbooks/listofadminbooks.component';
import { LoginComponent } from './Component/login/login.component';
import { UpdatebookComponent } from './Component/updatebook/updatebook.component';
import { UserLandingpageComponent } from './Component/user-landingpage/user-landingpage.component';

const routes: Routes = [
  {path:'' , redirectTo:'/login' , pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'admin', component:AdminPanelComponent},
  {path:'userlanding', component:UserLandingpageComponent},
  {path:'adminlanding',component:AdminPanelComponent},
  {path:'listofbooks', component:ListofBooksComponent},
  {path:'adminaddedbooks', component:ListofadminbooksComponent},
  {path:'useravaliofbook', component:AvailabilitybooksComponent},
  {path:'updatedbook/:id', component:UpdatebookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
