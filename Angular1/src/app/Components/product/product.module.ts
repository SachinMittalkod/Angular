import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductdetailsComponent } from './productss/productdetails.component';
import { AddProductComponent } from './add-product/add-product.component';
import { EditproductComponent } from './editproduct/editproduct.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';


@NgModule({
  declarations: [
    ProductdetailsComponent,
    AddProductComponent,
    EditproductComponent,
    DeleteProductComponent,
    
  ],
  imports: [
    CommonModule,
    ProductRoutingModule
  ]
})
export class ProductModule { 
  public constructor(){
    console.log("product module Loaded");
  }
}











