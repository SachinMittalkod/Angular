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
  bookdata = new Bookdata();
  val: any;
  
  constructor(private service:BookService, private router:Router, private fb:FormBuilder, private para: ActivatedRoute) { }

  ngOnInit(): void {
    // let sub = this.route.params.subscribe(params => {
    //   this.val = params['id'];
    //   //this.getEmployeeById(this.router.snapshot.params['id']);
       
    // });
    this.update(this.para.snapshot.params['id']);
    this.forms=this.fb.group({
      id:[""],
      BookName:[""],
      Author:[""],
      Date:[""]
    });
    this.getBook(this.para.snapshot.params['id']);
    // this.service.updatbook(this.val).subscribe(data => {
    //   this.store =data;
    //   console.log(this.store.BookName);
    // });
    
  }
  public getBook(id:any){

    this.service.getBookById(id).subscribe(res=>{

      this.bookdata =res;
      console.log(res,'Hello I am  ');

    },err=>{

      console.log(err);

    })

  }
  public reset(){
    this.forms.reset();
  }
  
  update(id:any){
    console.log(this.forms.value)
    this.service.updatbook(id,this.forms).subscribe(data=>{
      console.log(data,'Hello I am here');
    })
    this.getuser();
    this.router.navigate(['/adminaddedbooks'])
  }
  getuser() {
   this.service.getadminbook().subscribe((resp=>{
    this.bookdata=resp;
    console.log(resp);
   }))
  }
}
