import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-parameter',
  templateUrl: './parameter.component.html',
  styleUrls: ['./parameter.component.css']
})
export class ParameterComponent implements OnInit {
id: any;
name: any;
constructor(private activeroute:ActivatedRoute){

}
  ngOnInit(): void {
 this.id=  this.activeroute.snapshot.paramMap.get('id');
 this.name=  this.activeroute.snapshot.paramMap.get('name');
  }

}
//if you want to get the route param only one time go for snapshot otherwise go for subscribe 
//paramMap is the method of ActivatedRoute and it will return an observable and it will give data only if we subscribe to it