import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Adminbook } from '../Model/Addbook.model';

@Injectable({
  providedIn: 'root'
})
export class EditService {
  

  adminaddurl='http://localhost:3000/AdminAddbook';
  constructor(private http:HttpClient, private router:Router) { }


  getUpdateUser(id:number){
    const url = `${this.adminaddurl}/${id}`;
    return this.http.get<Adminbook>(url,);
  
  }
  public updateUser(user: any): Observable<Adminbook> {
    const url = `${this.adminaddurl}/${user.id}`;
    return this.http.put<Adminbook>(url,user);
  }
  public getUsers() {
    return this.http.get<Adminbook[]>(this.adminaddurl);
  }
}
