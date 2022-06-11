import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  
private url='/assets/employee.json'

  constructor(private HttpClient:HttpClient) { }
  
    public getEmployees():Observable<Employee[]>{
      return this.HttpClient.get<Employee[]>(this.url);
    }
  }

