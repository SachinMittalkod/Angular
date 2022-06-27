import { Component, OnInit } from '@angular/core';
// import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  constructor(private dialogs:MatDialog) { }
  
  openDialog() {
    this.dialogs.open(DialogComponent, {
     width:'30%'
    });
  }
  ngOnInit(): void {
  }
 
}
