import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
@Input() inputmessage:string;
@Output() output:EventEmitter<string>=new EventEmitter;
outputvariable:'this data from child'
  constructor() { }

  ngOnInit(): void {
    console.log(this.inputmessage);
  }
 public sendData(){
   this.output.emit(this.outputvariable);
 }
}
