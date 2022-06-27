import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loggedin-page',
  templateUrl: './loggedin-page.component.html',
  styleUrls: ['./loggedin-page.component.css']
})
export class LoggedinPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log("lazy loading");
  }

}
