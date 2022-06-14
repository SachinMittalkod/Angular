import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

@Input() newdata:string;
  constructor() {
 
   }

  ngOnInit(): void {
  
  }
  oncall(){
    console.log(this.newdata);
  }

}








