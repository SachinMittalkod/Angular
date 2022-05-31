import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AboutusModule {
  constructor(){
    console.log("About us lazy loading");
  } 
  
}
