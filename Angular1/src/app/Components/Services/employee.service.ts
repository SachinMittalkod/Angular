import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Employee } from '../Model/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
employeedetails:Employee[];

  constructor() {
    this.employeedetails=[
      new Employee(1,'sachin','banglore', 'Male', false ),
      new Employee(2,'Sam','mumbai', 'Male', true ),
      new Employee(3,'Ram','banglore', 'Male', false ),
      new Employee(4,'Mayura','Delhi', 'Female', false ),
      new Employee(5,'mark','Hydrabad', 'Male', true ),
      new Employee(6,'shreya','Hubli', 'Female', true ),
      
    ]
   }

   public getemployee():Observable<Employee[]>{


    return of(this.employeedetails);
   }

   public getEmployeebyId(id:number):Observable<Employee>{
     const emp=this.employeedetails.find(x=>x.id===id);
    //  const emp1=this.employeedetails.filter(y=>y.id===id);
     return of(emp);
   }
}

// observable is a asynchronous programming
// if any change in data observable give the notification
// observer:- it will keep the track of change in data
// of method is used for type casting(array of data into Observable)
// if you ad some more data in future then it must get reflected so observable is used
// x=>x.id===id in line function
// 'filter' will iterate through all the records & go to all data but 'find' search for particular data
// In angular Constructors are generally used for dependency injection