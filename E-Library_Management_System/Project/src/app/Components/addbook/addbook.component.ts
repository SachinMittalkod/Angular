import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { BooksService } from 'src/app/service/books.service';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {
  forms: FormGroup;
  arryofdata:any=[];
  constructor(private fb:FormBuilder, private service:BooksService, private route:Router) { }
  ngOnInit(): void {
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
