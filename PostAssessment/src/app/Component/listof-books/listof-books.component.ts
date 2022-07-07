import { Component, OnInit } from '@angular/core';
import { Bookdata } from 'src/app/Model/reqbook.model';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-listof-books',
  templateUrl: './listof-books.component.html',
  styleUrls: ['./listof-books.component.css']
})
export class ListofBooksComponent implements OnInit {
  mydata:Bookdata[]=[];
  notifications: any;
  constructor(private service:BookService) { }
  recdata:Bookdata[]=[];

  ngOnInit(): void {
  this.service.receiveBook().subscribe(resp=>{
    this.mydata=resp;
    console.log(this.mydata);
    this.notifications=resp.lenght;
  })
    }
  }


