import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../../service/books.service';
// import { User } from '../../Model/book.model';
import { Requestbook } from 'src/app/Model/requestbook.model';
import { AdminaddbookService } from 'src/app/service/adminaddbook.service';


@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})


export class BooklistComponent implements OnInit {
  term:string="";
column=["id","image","BookName" ,"author" ,"imageUrl"]
  constructor(private service:BooksService, private adminservice:AdminaddbookService) { }
users:Requestbook[]=[];
today= new Date();

tomorrow = new Date(this.today.getTime() + (168 * 60 * 60 * 1000));

  ngOnInit(): void {
    // this.service.getusers().subscribe((response)=>{
    //   this.users=response;
    this.adminservice.getadminbook().subscribe((response)=>{
      this.users=response;
    })
  }
}
