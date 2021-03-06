import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Requestbook } from 'src/app/Model/requestbook.model';
import { BooksService } from 'src/app/service/books.service';



@Component({
  selector: 'app-view-request',
  templateUrl: './view-request.component.html',
  styleUrls: ['./view-request.component.css']
})



export class ViewRequestComponent implements OnInit {
  i:number=0;
  constructor(private service:BooksService, private route:Router) { }
  book:Requestbook[]=[];
  term:any="";
  posthistory:any;
  ngOnInit(): void {
  this.service.getrequest().subscribe(resp=>{
    this.book=resp;
    console.log(this.book);
  })
  }

  delete(id:number){
this.service.acceptrequest(id).subscribe(res=>{
  console.log(res);
  this.service.getrequest().subscribe(resp=>{
    this.book=resp;
    console.log(this.book);
  })
  
  
  // let currentUrl=this.route.url;
  // this.route.routeReuseStrategy.shouldReuseRoute = () => false;
  // this.route.onSameUrlNavigation = 'reload';
  // this.route.navigate([currentUrl]);
})
  }

  public accepted(datass:any){
    debugger;
    console.log(datass);
    datass.id=0;
    this.service.postreqhistory(datass).subscribe(data=>{
      this.posthistory=data;
      console.log(data);

      // let currentUrl=this.route.url;
      // this.route.routeReuseStrategy.shouldReuseRoute = () => false;
      // this.route.onSameUrlNavigation = 'reload';
      // this.route.navigate([currentUrl]);
  
    })
  }
}
