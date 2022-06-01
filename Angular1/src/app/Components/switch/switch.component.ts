import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent implements OnInit {

  users:any=[];
user=[
  {id:1, name:'sachin', location:'Banglore'},
  {id:2, name:'john', location:'Mumbai'},
  {id:3, name:'mark', location:'Pune'},
  {id:4, name:'om', location:'Mysore'},
]
  constructor() { }

  ngOnInit(): void {
  }
  


}
