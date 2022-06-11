import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
employee:Employee[];
  constructor(private empservice:EmployeeService) { }

  ngOnInit(): void {
    // this.empservice.getEmployees().subscribe()
    this.empservice.getEmployees().subscribe(response=>this.employee=response);
  }

}
