import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../Model/book.model';
import { requestbook } from '../Model/requestbook.model';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  baseUrl='http://localhost:3000/Books';
  reqbookurl='http://localhost:3000/reqbook'
  signupurl='http://localhost:3000/signupuser'
  adminurl='http://localhost:3000/admin'
  constructor(private http:HttpClient) { }
  user:any;
  admin:any;
  data:any;
  isAuthenticated=false;
  getusers(){
    return this.http.get<User[]>(this.baseUrl)
  }

  public addBook(emp:any):Observable<requestbook>{
    return this.http.post<requestbook>(this.reqbookurl,emp);
  }

 public getrequest(){
    return this.http.get<requestbook[]>(this.reqbookurl)
  }

  public adminlogin(){
    this.http.get<any>(this.adminurl);
  }

  public Authenticate(data:any){
return this.http.get(this.adminurl).subscribe(resp=>{
  this.admin=resp;
  this.data=data;
  this.autheticateuser();
  this.navigateUser();
})
  }

  autheticateuser(){
    this.admin=this.admin.find((c:any)=>{
      return c.adminid==this.data.adminid && c.AdminPassword ==this.data.AdminPassword
    })
  }
  navigateUser() {
    if(this.admin){
      this.checkrole()
    }else{
      alert("not admin")
    }
  }
  checkrole() {
    this.isAuthenticated=true;
    if(this.admin.admin){
      
    }
  }
}


