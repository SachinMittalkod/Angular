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
{EmpID: 4, EmpName:'kumar', age: 45, location: 'Banglore'}]
  ///////////////////////////////////////////
  // employee:EmpDetails;
  // @Output() addemployeeRecord: EventEmitter<EmpDetails> =
  // new EventEmitter<EmpDetails>();
  // constructor() {
  //   this.employee = new EmpDetails();
  //  }
  ngOnInit(): void {
    
  }

  //  public addEmployee() {
  //   const data = {
  //     id: this.employee.id,
  //     employeeName: this.employee.employeeName,
  //     projectId: this.employee.projectId,
  //     angularProficiency: +this.employee.angularProficiency,
  //   };
  //   if (data.angularProficiency > 5 ) {
  //     alert('Enter a valid Information');
  //     return;
  //   }

  //   this.addemployeeRecord.emit(data);
  // }
   


  }
  


