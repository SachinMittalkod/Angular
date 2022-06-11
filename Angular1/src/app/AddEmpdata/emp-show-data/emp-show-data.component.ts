import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-emp-show-data',
  templateUrl: './emp-show-data.component.html',
  styleUrls: ['./emp-show-data.component.css']
})
export class EmpShowDataComponent implements OnInit {
// childData:string='this is from child';
EmpId:number;
EmpName:string;
ProjectID:number;
AngularProficiency:number;
EmpShowDataComponent:EmpShowDataComponent;

@Output() childernData:EventEmitter<EmpShowDataComponent>=new EventEmitter();
  constructor() {
    this.EmpShowDataComponent=new EmpShowDataComponent;
   }

  ngOnInit(): void {
  }
  sendData(){
  
    const data={
      EmpId:this.EmpShowDataComponent.EmpId,
      EmpName:this.EmpShowDataComponent.EmpName,
      ProjectID:this.EmpShowDataComponent.ProjectID,
      AngularProficiency:this.EmpShowDataComponent.AngularProficiency
    }
      // this.childernData.emit(this.childData);
        this.childernData.emit();
    console.log(data);
  }

}
