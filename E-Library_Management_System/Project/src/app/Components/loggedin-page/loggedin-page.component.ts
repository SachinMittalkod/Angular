import { Component, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
// import { Margin } from '@mui/icons-material';
import { RequestbookComponent } from '../requestbook/requestbook.component';
@Component({
  selector: 'app-loggedin-page',
  templateUrl: './loggedin-page.component.html',
  styleUrls: ['./loggedin-page.component.css']
})
export class LoggedinPageComponent implements OnInit {

  constructor(private dialog:MatDialog) { }

  ngOnInit(): void {
    console.log("lazy loading");
  }
  openDialog() {
    this.dialog.open(RequestbookComponent, {
      height:'500px'
    
    });
  }
}
