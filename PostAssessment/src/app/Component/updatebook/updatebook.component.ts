import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Adminbook } from 'src/app/Model/Addbook.model';
import { Bookdata } from 'src/app/Model/reqbook.model';
import { BookService } from 'src/app/service/book.service';
import { EditService } from 'src/app/service/edit.service';

@Component({
  selector: 'app-updatebook',
  templateUrl: './updatebook.component.html',
  styleUrls: ['./updatebook.component.css']
})
export class UpdatebookComponent implements OnInit {
  empForm:FormGroup;
  val: any;
  
  // constructor(private service:BookService, private router:Router, private fb:FormBuilder, private para: ActivatedRoute) { }
  constructor(private bs: EditService,private router: Router, private formBuilder: FormBuilder,public route: ActivatedRoute) { }
  users: Adminbook[] =[];
  user: Adminbook;
  ngOnInit(): void {
    let sub = this.route.params.subscribe(params => {
      this.val = params['id'];
      //this.getEmployeeById(this.router.snapshot.params['id']);
    });
     console.log(this.val);
    this.bs.getUpdateUser(this.val).subscribe(data => {
      this.user =data;
      console.log(this.user.BookName);
    })

    this.empForm=this.formBuilder.group({
  
     id:['',Validators.required],
     BookName:['',Validators.required],
     Author:['',Validators.required],
    Date:['',Validators.required]
   })
    

  }
 
  public reset(){
    this.empForm.reset();
  }
  
  update(){
    this.bs.updateUser(this.user).subscribe(data => {
    });
    this.getUsers();
    this.router.navigate(['/adminaddedbooks']);
  }

  getUsers() {
    this.bs.getUsers().subscribe((response) => {
      this.users = response;
    })