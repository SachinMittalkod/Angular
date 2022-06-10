import { Component, OnInit } from '@angular/core';
// import { Employee } from '../Model/employee.model';
import { EmployeeService } from '../Services/employee.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(private student:EmployeeService) { }
  getemployee(){
      const mydata=this.student.employeedetails;
      // console.log(mydata);
    }
details:any[];
  ngOnInit(): void {
 this.student.getemployee().subscribe(
   data=>{this.details=data}
 )
  }
 
}
