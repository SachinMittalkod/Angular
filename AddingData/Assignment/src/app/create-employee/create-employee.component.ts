import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  @Output() addemployeeRecord:EventEmitter<Employee>=new EventEmitter<Employee>();
 employee:Employee;
  constructor() { 
    this.employee=new Employee();
  }

  ngOnInit(): void {
  }
  public addEmployee()
  {
    const data={
     id:this.employee.id,
      name:this.employee.name,
      projectid:this.employee.projectid,
      AngularProficiency:this.employee.AngularProficiency
    };

    this.addemployeeRecord.emit(data);
  }

}
