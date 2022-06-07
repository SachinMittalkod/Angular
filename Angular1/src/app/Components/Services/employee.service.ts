import { Injectable } from '@angular/core';
import { Employee } from '../Model/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
employeedetails:Employee[];

  constructor() {
    this.employeedetails=[
      new Employee(1,'sachin','banglore', 'Male', true ),
      new Employee(2,'Sam','mumbai', 'Male', true ),
      new Employee(3,'Ram','banglore', 'Male', true ),
      new Employee(4,'john','banglore', 'Male', true ),
      new Employee(5,'mark','banglore', 'Male', true ),
     
    ]
   }
}

//observable is a asynchronous programming
// if any change in data observable give the notification 