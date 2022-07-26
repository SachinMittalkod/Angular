import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { RequestbookComponent } from '../requestbook/requestbook.component';
import { BooksService } from 'src/app/service/books.service';

@Component({
  selector: 'app-loggedin-page',
  templateUrl: './loggedin-page.component.html',
  styleUrls: ['./loggedin-page.component.css']
})
export class LoggedinPageComponent implements OnInit {
name=localStorage.getItem('username')
  constructor(private dialog:MatDialog,private service:BooksService) { }

  ngOnInit(): void {
 
  }
  
  openDialog() {
    this.dialog.open(RequestbookComponent, {

      height:'550px'
    
    });
  }
}
