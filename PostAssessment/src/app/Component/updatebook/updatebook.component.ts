import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Bookdata } from 'src/app/Model/reqbook.model';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-updatebook',
  templateUrl: './updatebook.component.html',
  styleUrls: ['./updatebook.component.css']
})
export class UpdatebookComponent implements OnInit {
  forms:FormGroup;
  store:Bookdata;
  books:Bookdata[]=[]
  val: any;
  constructor(private service:BookService, private router:Router, private fb:FormBuilder, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let sub = this.route.params.subscribe(params => {
      this.val = params['id'];
      //this.getEmployeeById(this.router.snapshot.params['id']);
    })

    this.service.updatbook(this.val).subscribe(data => {
      this.store =data;
      console.log(this.store.BookName);
    })
    this.forms=this.fb.group({
      id:[""],
      BookName:[""],
      Author:[""],
      Date:[""]
    })

    
  }
  public reset(){
    this.forms.reset();
  }
  
  onFormSubmit(data:any){

  }
  update(){
    this.service.updatbook(this.store).subscribe(data=>{
    })
    this.getuser();
    this.router.navigate(['/adminaddedbooks'])
  }
  getuser() {
   this.service.getadminbook().subscribe((resp=>{
    this.books=resp;
   }))
  }
}
