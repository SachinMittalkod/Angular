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
  today = new Date();
  tomorrow = new Date(this.today.getTime() + (24 * 60 * 60 * 1000));

  constructor(private service:BookService) { }
  recdata:Bookdata[]=[];
  // date: this.date= this.tomorrow.setDate(this.tomorrow.getDate()+1)
  ngOnInit(): void {
  this.service.getadminbook().subscribe(resp=>{
    this.mydata=resp;
    console.log(this.mydata);
  })
    }
}
