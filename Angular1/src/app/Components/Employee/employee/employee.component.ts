import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../Services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  // providers:[EmployeeService]
})
export class EmployeeComponent implements OnInit {
details:any[];
mydata:any[];
  constructor(private empservice:EmployeeService) { }

  // getemployee(){
  //   const mydata=this.empservice.employeedetails;
  //   // console.log(mydata);
  // }

  ngOnInit(): void {
    this.empservice.getemployee().subscribe(data=>{
      this.details=data;
    })
  }

}
// injecting the service here using constructor