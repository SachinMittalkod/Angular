import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BooksService } from 'src/app/service/books.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
data:FormGroup;
  logdata: Object;
  user: Object;
  constructor(private service:BooksService, private fb:FormBuilder, private http: HttpClient, private router:Router) { }
  // 'http://localhost:3000/admin'
  ngOnInit(): void {
   this.data= this.fb.group(
      {
        adminid:[""],
        AdminPassword:[""]
      }
    )
  }
  adlogin(){
  this.http.get<any>('http://localhost:3000/admin').subscribe(resp=>{
   this.user=resp.find((b:any)=>{
return b.adminid == this.data.value.adminid && b.AdminPassword == this.data.value.AdminPassword
   });
   if(this.user){
    alert("Login Success");
    this.router.navigate(['/adminlanding'])  
   }else{
    alert("please check")
   }
  })
  }
}
