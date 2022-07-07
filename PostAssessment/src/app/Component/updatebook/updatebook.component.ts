import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-updatebook',
  templateUrl: './updatebook.component.html',
  styleUrls: ['./updatebook.component.css']
})
export class UpdatebookComponent implements OnInit {
  forms:FormGroup;
  constructor() { }

  ngOnInit(): void {
  }
  public reset(){
    this.forms.reset();
  }
  
  onFormSubmit(data:any){

  }
  update(){
    
  }
}
