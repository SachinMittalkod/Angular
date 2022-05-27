import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  title = 'Angular1';
  message:string='hello'
  event:string='dude'
  constructor() { }

  ngOnInit(): void {
  }
 

  clicked():void{
    alert("You have submitted")
  }
}
