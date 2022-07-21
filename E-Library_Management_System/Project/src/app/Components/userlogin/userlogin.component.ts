import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/service/auth.service';

import { BooksService } from 'src/app/service/books.service';
import { LoginService } from 'src/app/service/login.service';
import { NotificationService } from 'src/app/service/notification.service';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {
 
  data:FormGroup;
  user: object;
  use:any;
 
  constructor(private router:Router, private fb:FormBuilder, private service:BooksService, private http:HttpClient,
    private toastr: ToastrService, private toasterservice:NotificationService, private getdata:LoginService, private authservice:AuthService) { }


  ngOnInit(): void {
      this.data=this.fb.group({
        username:["",Validators.required],
        createpassword:["",Validators.required],
      })
  }


  // login(){
  //   this.http.get<any>('http://localhost:3000/signupuser').subscribe(res=>{
  //      this.user=res.find((a:any)=>{
  //       console.log(this.user);
  //       console.log(this.data.value.username);
  //       console.log(a.username);
  //       return a.username == this.data.value.username && a.createpassword == this.data.value.password;
  //       console.log(this.data.value.username);
  //     });
  //     if(this.user){
  //       this.toasterservice.showSuccess("You have Successfully Logged in","Welcome")
  //       // alert("Login succcess")
        
  //       this.router.navigate(['/afterlogin'])
  //     }else{
  //       this.toasterservice.showError("please check username and password", "Sorry Failed!!")
  //             // alert("please check username and password")
  //           }
  //   })
  // }

  // login(){
  //  this.getdata.getusername().subscribe(res=>{
  //       console.log(res);
  //       this.user=res.find((a:any)=>{
  //       console.log(this.user);
  //       console.log(this.data.value.username);
  //       console.log(a.username);
  //       localStorage.setItem('username', this.data.value.username)
  //       return a.username == this.data.value.username && a.createpassword == this.data.value.password;
      
  //       console.log(this.data.value.username);
  //     });
  //     if(this.user){
  //       this.toasterservice.showSuccess("You have Successfully Logged in","Welcome")
  //       // alert("Login succcess")
        
  //       this.router.navigate(['/afterlogin'])
  //     }else{
  //       this.toasterservice.showError("please check username and password", "Sorry Failed!!")
  //             // alert("please check username and password")
  //           }
  //   })
  // }

  public login(){
    debugger;
    this.authservice.authenticateEmployee(this.data.value);
    localStorage.setItem('username', this.data.value.username)
  }
}
// form==data