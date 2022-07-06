import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import {Bookdata} from '../Model/reqbook.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {

user:any;
isAuthenticated=false;
isAdmin=false;
isUser=false;
response:any;
data:any;

reqbookurl='http://localhost:3000/bookreq';

  constructor(private http:HttpClient, private router:Router) { }

  

 
  public authenticateEmployee(data:any)
  {
    debugger;
    console.log(data);
    return this.http.get('http://localhost:3000/user').subscribe(response=>{
      this.user=response;
      this.data=data;
      this.authenticateUser();
      this.navigateUser();
    })
  }

  authenticateUser()
  {
    this.response=(this.user.find((x:any)=>{
      return x.userName==this.data.userName && x.password==this.data.password

    }))
  }

navigateUser(){
  if(this.response)
  {
    this.checkRole();
  }
  else{
    alert ("Invalid Credential");
  }
}
checkRole()
{
  this.isAuthenticated=true;
  if(this.response.role==='admin')
  {
    this.isAdmin=true;
    this.isAuthenticated=true;
    this.router.navigate(['/adminlanding']);
  }
  else if(this.response.role==='user')
  {
    this.isUser=true;
    this.isAuthenticated=true;
    this.router.navigate(['/userlanding']);
  }
  else
  {
    alert ("Invalis user");
  }
}

public addBook(emp:any):Observable<Bookdata>{
  return this.http.post<Bookdata>(this.reqbookurl,emp);
}

public receiveBook():Observable<any>{
 return this.http.get<any>(this.reqbookurl);
}

}


