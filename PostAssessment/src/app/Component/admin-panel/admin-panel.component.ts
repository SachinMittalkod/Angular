import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Bookdata } from 'src/app/Model/reqbook.model';
import { BookService } from 'src/app/service/book.service';
import { AddbookComponent } from '../addbook/addbook.component';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {
  forms: FormGroup;
  mydata:Bookdata[]=[];
  notifications:Bookdata[]=[]
  constructor(private fb:FormBuilder, private route:Router, private dialog:MatDialog,private service:BookService) { }
  ngOnInit(): void {
    this.forms=this.fb.group({
   
    
      BookName:['',Validators.required],
      Author:['',Validators.required],
     Date:['',Validators.required]
    })

    this.service.receiveBook().subscribe(resp=>{
      this.mydata=resp;
      console.log(this.mydata);
      this.notifications=resp.lenght;
      console.log(this.notifications);
    })
  }


  openDialog() {
    this.dialog.open(AddbookComponent, {
  
     height:'480px'
    });
  }
}
