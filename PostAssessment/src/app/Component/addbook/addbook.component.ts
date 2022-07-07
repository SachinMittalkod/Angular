import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import {MatDialog} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

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
  ) { }

  ngOnInit(): void {
    this.forms=this.fb.group({
   
    
      BookName:['',Validators.required],
      Author:['',Validators.required],
     Date:['',Validators.required]
    })

  }
  // public reset(){
  //   this.forms.reset();
  // }
  // addBook
  onFormSubmit(datas:NgForm){
  debugger;

this.service.adminaddBook(datas).subscribe(respo=>{
  this.bookdetails=respo;
this.no=respo;
  alert("Book Added Succesfully")
  
    
})

  }
}
