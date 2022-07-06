import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm } from '@angular/forms';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form:FormGroup;
  constructor(private fb:FormBuilder, private service:BookService) { }

  ngOnInit(): void {
    this.form= new FormGroup({
      username: new FormControl(),
      password: new FormControl()
    })
  }
  

 
  public onSubmit(form:NgForm)
  {
    this.service.authenticateEmployee(form);
  }

}






