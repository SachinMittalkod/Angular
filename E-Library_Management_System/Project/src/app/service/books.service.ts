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
  constructor(private http:HttpClient) { }
  user:any;
  getusers(){
    return this.http.get<User[]>(this.baseUrl)
  }

  public addBook(emp:any):Observable<requestbook>{
    return this.http.post<requestbook>(this.reqbookurl,emp);
  }

 public getrequest(){
    return this.http.get<requestbook[]>(this.reqbookurl)
  }
// public validationls(){
//   return this.http.get('http://localhost:3001/signupuser');
  // .subscribe(data=>{
  //   this.user=data;
  //   const use= this.user.find((a:any)=>{
  //           a.username ===
  //   })
   
  // })
}


