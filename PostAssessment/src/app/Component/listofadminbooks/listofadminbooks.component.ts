import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Bookdata } from 'src/app/Model/reqbook.model';
import { BookService } from 'src/app/service/book.service';
import { UpdatebookComponent } from '../updatebook/updatebook.component';

@Component({
  selector: 'app-listofadminbooks',
  templateUrl: './listofadminbooks.component.html',
  styleUrls: ['./listofadminbooks.component.css']
})
export class ListofadminbooksComponent implements OnInit {
  mydata:Bookdata[]=[];
  constructor(private service:BookService, private dialog:MatDialog) { }
  recdata:Bookdata[]=[];

  ngOnInit(): void {
  this.service.getadminbook().subscribe(resp=>{
    this.mydata=resp;
    console.log(this.mydata);
  })
    }

    deleteit(id:number){
   
      this.service.delete(id).subscribe(resp=>{
        console.log(resp);
        window.location.reload();

      });
    }

 public   opendialog(){
      this.dialog.open(UpdatebookComponent,{
        width:'474px',
        height: '440px'
      })
    }
}
