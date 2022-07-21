import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BooksService } from 'src/app/service/books.service';
import { NotificationService } from 'src/app/service/notification.service';

@Component({
  selector: 'app-requestbook',
  templateUrl: './requestbook.component.html',
  styleUrls: ['./requestbook.component.css']
})
export class RequestbookComponent implements OnInit {
  forms: FormGroup;
  today= new Date();
  constructor(private fb:FormBuilder, private service:BooksService, private route:Router, private notifiservice:NotificationService) { }
  arryofdata:any=[];
data:any;

  ngOnInit(): void {
    this.forms=this.fb.group({
   
      username:['', Validators.required],
      BookName:['',Validators.required],
      Author:['',Validators.required],
     Date:['',Validators.required]
    })
    this.service.getrequest().subscribe(res=>{
      this.data=res;
      console.log(this.data);
  })
 
  
}

public onFormSubmit(datas:NgForm){
  this.service.addBook(datas).subscribe(data=>{
    this.arryofdata=data;
 
    if(this.arryofdata.id>2){
      window.location.reload();
      this.notifiservice.showSuccess("Successfully" , "You Have Requested Book")
   
    }else{
      this.notifiservice.showError("Failed", "Sorry You can't add  more than 3 books")
    
    }
   
  
  
  })
    }
  }