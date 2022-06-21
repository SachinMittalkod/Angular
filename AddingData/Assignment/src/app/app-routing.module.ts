import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialCrudComponent } from './material-crud/material-crud.component';
import { StoredComponent } from './stored/stored.component';

const routes: Routes = [
  {path:'crud', component:MaterialCrudComponent},
  {path:'addproduct', component:StoredComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
