import { Component, OnInit } from '@angular/core';
import { BooksService } from '../service/books.service';
import { User } from '../Model/book.model';


@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})


export class BooklistComponent implements OnInit {
  term:string="";
column=["id","BookName" ,"author" ,"imageUrl"]
  constructor(private service:BooksService) { }
users:User[]=[];
  ngOnInit(): void {
    this.service.getusers().subscribe((response)=>{
      this.users=response;
    })
  }
}
