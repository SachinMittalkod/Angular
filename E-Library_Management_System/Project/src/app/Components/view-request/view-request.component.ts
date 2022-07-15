import { Component, OnInit } from '@angular/core';
import { requestbook } from 'src/app/Model/requestbook.model';
import { BooksService } from 'src/app/service/books.service';



@Component({
  selector: 'app-view-request',
  templateUrl: './view-request.component.html',
  styleUrls: ['./view-request.component.css']
})



export class ViewRequestComponent implements OnInit {
  i:number=0;
  constructor(private service:BooksService) { }
  book:requestbook[]=[];
  term:any="";
  ngOnInit(): void {
  this.service.getrequest().subscribe(resp=>{
    this.book=resp;
    console.log(this.book);
  })
  }
  accept(id:number){
this.service.acceptrequest(id).subscribe(res=>{
  console.log(res);
  window.location.reload();
})
  }
}
