import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { BooksService } from 'src/app/service/books.service';
@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {
  public signup:FormGroup;
  constructor(private fb:FormBuilder, private service:BooksService, private http:HttpClient, private router:Router) { }
  signdata:any=[];
  ngOnInit(): void {
    this.signup=this.fb.group({
      id:[""],
      username:[""],
      email:[""],
      mobileno:[""],
      createpassword:[""]
    })
  
  }
  onFormSubmit(){
    this.http.post<any>('http://localhost:3000/signupuser', this.signup.value).subscribe(resp=>{
      alert("Signup succesfull")
      console.log(resp)
      this.router.navigate(['/userlogin'])
    },error=>{alert("please check")})
      
  }



}


