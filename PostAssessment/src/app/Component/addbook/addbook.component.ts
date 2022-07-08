import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import {MatDialog} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgToastService } from 'ng-angular-popup';
import { BookService } from 'src/app/service/book.service';
@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {
  forms: FormGroup;
  bookdetails:any=[];
  data:any;
  id:number;
  no: import("c:/Angular/PostAssessment/src/app/Model/Addbook.model").Adminbook;
 
  constructor(private fb:FormBuilder, private route:Router, private dialog:MatDialog, private service:BookService
 ,private toster:NgToastService 
 ) { }

  ngOnInit(): void {
    this.forms=this.fb.group({
   
    
      BookName:['',Validators.required],
      Author:['',Validators.required],
     Date:['',Validators.required]
    })

  }
  
  onFormSubmit(datas:NgForm){
  debugger;

this.service.adminaddBook(datas).subscribe(respo=>{
  this.bookdetails=respo;
this.no=respo;
this.toster.success({detail:"Books added successfully", summary:"something went wrong",duration:5000})


  // alert("Book Added Succesfully")
  
    
})

  }
}
