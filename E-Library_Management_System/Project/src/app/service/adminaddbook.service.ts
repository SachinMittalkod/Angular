import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { Adminaddbook } from '../Model/Adminaddbook.model';

@Injectable({
  providedIn: 'root'
})
export class AdminaddbookService {
  adminaddurl='http://localhost:3000/AdminAddbooks';
  subject=new Subject();
  constructor(private http:HttpClient, private router:Router) { }

  
  public adminaddBook(emp:any):Observable<Adminaddbook>{
    return this.http.post<Adminaddbook>(this.adminaddurl,emp);
  }

  public getadminbook(){
    return this.http.get<any>(this.adminaddurl);
  }
  public delete(id:number){
    const url=`${this.adminaddurl}/${id}`
   return  this.http.delete<Adminaddbook>(url);
  }
  public editSer(id:any,forms:any){
    const url=`${this.adminaddurl}/${id}`
   return  this.http.patch<Adminaddbook>(url,forms);
  }

 
   public editId(data:any){
    // console.log(data);
    return  this.subject.next(data);

  }
  public getbookid(){
    const urls=`${this.adminaddurl}`
    return this.http.get<Adminaddbook>(urls)
  }

}
