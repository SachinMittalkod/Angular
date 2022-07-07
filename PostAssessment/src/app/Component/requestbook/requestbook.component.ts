import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import {MatDialog} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { BookService } from 'src/app/service/book.service';

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
  constructor(private fb:FormBuilder, private route:Router, private dialog:MatDialog, private service:BookService) { }

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
  })
  }
  public reset(){
    this.forms.reset();
  }
  // addBook
  onFormSubmit(datas:NgForm){
  
    debugger;
this.service.reqbook(datas).subscribe(respo=>{
  this.bookdetails=respo;
  if(this.bookdetails.id > 3){
alert("you cant add")

  }
})
alert("new Book Requested")
  }
}
