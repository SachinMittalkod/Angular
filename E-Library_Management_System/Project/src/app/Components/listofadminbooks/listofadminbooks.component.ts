import { Component, inject, OnInit } from '@angular/core';
import { BooksService } from '../../service/books.service';
// import { User } from '../../Model/book.model';
import { requestbook } from 'src/app/Model/requestbook.model';
import { AdminaddbookService } from 'src/app/service/adminaddbook.service';
import { MatDialog } from '@angular/material/dialog';
import { UpdateBookComponent } from '../update-book/update-book.component';
import { NgForm } from '@angular/forms';
import { Adminaddbook } from 'src/app/Model/Adminaddbook.model';


@Component({
  selector: 'app-listofadminbooks',
  templateUrl: './listofadminbooks.component.html',
  styleUrls: ['./listofadminbooks.component.css'],
})
export class ListofadminbooksComponent implements OnInit {
  term: string = '';
  column = ['image', 'BookName', 'author', 'imageUrl'];
  users: requestbook[] = [];
  ids: Adminaddbook;
  constructor(
    private service: BooksService,
    private adminservice: AdminaddbookService, private dialog:MatDialog,

  ) {}

  
  // today=new Date();
  // tomorrow= new Date(this.today.getTime()+(168*60*60*1000))
  ngOnInit(): void {
    // this.service.getusers().subscribe((response)=>{
    //   this.users=response;
    this.adminservice.getadminbook().subscribe((response) => {
      this.users = response;
      console.log(this.users);
    });

    
    // console.log(this.editdata);
  }

  deleteit(id: number) {
    this.adminservice.delete(id).subscribe((resp) => {
      console.log(resp);
      window.location.reload();
    });
  }

  opendialog(id: any){
    this.dialog.open(UpdateBookComponent, {
      width:'450px',

    });
    // this.adminservice.getbookid()
    this.adminservice.editId(id);
    
  }
}
