import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BooksService } from 'src/app/service/books.service';

@Component({
  selector: 'app-requestbook',
  templateUrl: './requestbook.component.html',
  styleUrls: ['./requestbook.component.css']
})
export class RequestbookComponent implements OnInit {
  forms: FormGroup;
  constructor(private fb:FormBuilder, private service:BooksService, private route:Router) { }
  arryofdata:any=[];

  ngOnInit(): void {
    this.forms=this.fb.group({
   
      id:['',Validators.required],
      BookName:['',Validators.required],
      Author:['',Validators.required],
     Date:['',Validators.required]
    })
  }
  public onFormSubmit(forms:NgForm){
this.service.addBook(forms).subscribe(data=>{
  this.arryofdata=data;
 

})
  }
 public reset(){
    this.forms.reset();
  }

 

}
