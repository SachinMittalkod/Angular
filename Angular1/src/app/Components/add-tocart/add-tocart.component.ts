import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-tocart',
  templateUrl: './add-tocart.component.html',
  styleUrls: ['./add-tocart.component.css']
})
export class AddTocartComponent implements OnInit {
Names:string='*ngFor';

  constructor() { }

  ngOnInit(): void {
  }
 
   name:string[]=["Banglore" ,"Mysore", "HUBLI"]
   
   userlogin:boolean=true;

  
  
}
