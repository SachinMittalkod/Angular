import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { EditproductComponent } from './editproduct/editproduct.component';
import { ProductdetailsComponent } from './productss/productdetails.component';
import { UserComponent } from './user/user.component';

// const routes: Routes = [
// {path:'',component:ProductdetailsComponent, children:[ {path:'add',component:AddProductComponent},
// {path:'edit',component:EditproductComponent, children:[
// {path:'delete', component:DeleteProductComponent}  
// ]}
// ]},
// ];
const routes: Routes = [
  {path:'',component:ProductdetailsComponent, children:[ {path:'add',component:AddProductComponent,children:[ {path:'edit',component:EditproductComponent, children:[
    {path:'delete', component:DeleteProductComponent, children:[{path:'myprofile', component:UserComponent}]}  
    ]}]},
 
  ]},
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule {
 }
