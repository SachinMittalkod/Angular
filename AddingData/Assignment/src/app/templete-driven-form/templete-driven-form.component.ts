import { Component, OnInit } from '@angular/core';
import { NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-templete-driven-form',
  templateUrl: './templete-driven-form.component.html',
  styleUrls: ['./templete-driven-form.component.css']
})
export class TempleteDrivenFormComponent implements OnInit {

  user:any="India"
  templete:any="";
  formsDemo: any;
  sumbitted(formss:NgForm){
  this.templete=formss;
  console.log(this.templete);
  console.log(this.templete.value.password);
  }
  constructor() {

   }
   resetForm(formsDemo:NgForm){
   formsDemo.resetForm();
   }

  ngOnInit(): void {
    
  }
 
}
