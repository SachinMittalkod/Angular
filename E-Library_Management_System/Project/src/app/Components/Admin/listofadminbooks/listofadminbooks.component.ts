import { Component, inject, OnInit } from '@angular/core';
import { BooksService } from '../../../service/books.service';
// import { User } from '../../Model/book.model';
import { requestbook } from 'src/app/Model/requestbook.model';
import { AdminaddbookService } from 'src/app/service/adminaddbook.service';
import { MatDialog } from '@angular/material/dialog';
import { UpdateBookComponent } from '../update-book/update-book.component';
import { NgForm } from '@angular/forms';
import { Adminaddbook } from 'src/app/Model/Adminaddbook.model';
import { Router } from '@angular/router';


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
    private route:Router
  ) {}

  

  ngOnInit(): void {
  
    this.adminservice.getadminbook().subscribe((response) => {
      this.users = response;
      console.log(this.users);
    });

    
    // console.log(this.editdata);
  }

  deleteit(id: number) {
    window.location.reload();
    this.adminservice.delete(id).subscribe((resp) => {
      console.log(resp);
      
    // let currentUrl=this.route.url;
    // this.route.routeReuseStrategy.shouldReuseRoute = () => false;
    // this.route.onSameUrlNavigation = 'reload';
    // this.route.navigate([currentUrl]);

      
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
