import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import {MatDialog} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { BookService } from 'src/app/service/book.service';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-requestbook',
  templateUrl: './requestbook.component.html',
  styleUrls: ['./requestbook.component.css']
})
export class RequestbookComponent implements OnInit {

  forms: FormGroup;
  bookdetails:any=[];
  data:any;
  id:number;
  no:number;
  constructor(private fb:FormBuilder, private route:Router, private dialog:MatDialog, private service:BookService,private toster:NgToastService) { }

  ngOnInit(): void {
    this.forms=this.fb.group({
   
    
      BookName:['',Validators.required],
      Author:['',Validators.required],
     Date:['',Validators.required]
    })
    this.service.receiveBook().subscribe(res=>{
      this.data=res;
      // this.id=this.data.id;
      console.log(this.data);
      // this.no=res;
      // console.log(this.no);
      
  })
  }
  
  // addBook
  onFormSubmit(datas:NgForm){
  

this.service.reqbook(datas).subscribe(respo=>{
  this.bookdetails=respo;
  if(this.bookdetails.id > 3){
    // window.location.reload();


  }
})
this.toster.success({detail:"Books Requested successfully", summary:"something went wrong",duration:5000})
// alert("new Book Requested")
  }

  public reset(){
    this.forms.reset();
  }
}
