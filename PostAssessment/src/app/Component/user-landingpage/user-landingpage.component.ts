import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AddbookComponent } from '../addbook/addbook.component';
import { RequestbookComponent } from '../requestbook/requestbook.component';

@Component({
  selector: 'app-user-landingpage',
  templateUrl: './user-landingpage.component.html',
  styleUrls: ['./user-landingpage.component.css']
})
export class UserLandingpageComponent implements OnInit {
  forms: FormGroup;

  constructor(private fb:FormBuilder, private route:Router, private dialog:MatDialog) { }

  ngOnInit(): void {
    this.forms=this.fb.group({
   
    
      BookName:['',Validators.required],
      Author:['',Validators.required],
     Date:['',Validators.required]
    })
  }
  openDialog() {
    this.dialog.open(RequestbookComponent, {
  
     height:'480px'
    });
  }
}
