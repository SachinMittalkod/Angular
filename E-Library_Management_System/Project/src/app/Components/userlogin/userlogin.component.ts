import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { BooksService } from 'src/app/service/books.service';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {
 
  data:FormGroup;
  user: object;
  use:any
  constructor(private router:Router, private fb:FormBuilder, private service:BooksService, private http:HttpClient) { }


  ngOnInit(): void {
      this.data=this.fb.group({
        username:["",Validators.required],
        password:["",Validators.required],
      })
  }


  login(){
    this.http.get<any>('http://localhost:3000/signupuser').subscribe(res=>{
       this.user=res.find((a:any)=>{
        console.log(this.user);
        return a.username == this.data.value.username && a.createpassword == this.data.value.password;
      });
      if(this.user){
        alert("Login succcess")
        
        this.router.navigate(['/afterlogin'])
      }else{
              alert("please check username and password")
            }
    })
  }
}
