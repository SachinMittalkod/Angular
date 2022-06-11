import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emp-add',
  templateUrl: './emp-add.component.html',
  styleUrls: ['./emp-add.component.css']
})
export class EmpAddComponent implements OnInit {

  constructor() { }
dataReceived:string='';
  ngOnInit(): void {
  }
  receiveparent(event:string){
    // console.log(event);
    this.dataReceived=event;
  }
}
