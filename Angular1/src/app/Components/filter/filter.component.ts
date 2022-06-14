import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { EmpDetails } from '../Model/EmpDetails.model';

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
  searchtext:any;

items=[{EmpID: 1, EmpName:'sachin', age: 24, location: 'Banglore'},
{EmpID: 2, EmpName:'ram', age: 26, location: 'Delhi'},
{EmpID: 3, EmpName:'saurav', age: 24, location: 'Mumbai'},
{EmpID: 4, EmpName:'kumar', age: 45, location: 'Banglore'},
{EmpID: 5, EmpName:'Aditya', age: 27, location: 'Gujarat'},
{EmpID: 6, EmpName:'Aditi', age: 29, location: 'Banglore'}]
 
  
  ngOnInit(): void {
    
  }

  }
  


