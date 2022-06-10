import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  EmpID:number;
  EmpName:string;
  age:number;
  location:String;
  constructor() { }

  ngOnInit(): void {
  }

searchtext:any;
items=[{EmpID: 1, EmpName:'sachin', age: 24, location: 'Banglore'},
{EmpID: 2, EmpName:'ram', age: 26, location: 'Delhi'},
{EmpID: 3, EmpName:'saurav', age: 24, location: 'Mumbai'},
{EmpID: 4, EmpName:'kumar', age: 45, location: 'Banglore'}]
}
