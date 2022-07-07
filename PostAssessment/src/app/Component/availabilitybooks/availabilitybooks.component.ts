import { Component, OnInit } from '@angular/core';
import { Bookdata } from 'src/app/Model/reqbook.model';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-availabilitybooks',
  templateUrl: './availabilitybooks.component.html',
  styleUrls: ['./availabilitybooks.component.css']
})
export class AvailabilitybooksComponent implements OnInit {
  term:string="";
  mydata:Bookdata[]=[];
  constructor(private service:BookService) { }
  recdata:Bookdata[]=[];

  ngOnInit(): void {
  this.service.getadminbook().subscribe(resp=>{
    this.mydata=resp;
    console.log(this.mydata);
  })
    }
}
