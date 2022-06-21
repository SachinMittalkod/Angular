import { Component, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-material-crud',
  templateUrl: './material-crud.component.html',
  styleUrls: ['./material-crud.component.css']
})
export class MaterialCrudComponent implements OnInit {

  constructor(private matdialog:MatDialog) { }

  ngOnInit(): void {
  }
  openDialog() {
    this.matdialog.open(DialogComponent, {
      data: {
        width:'60%' 
    
      },
    });
  }
}





