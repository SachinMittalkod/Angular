import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular1';
  message:string='hello'
  event:string='dude'

  clicked():void{
    alert("You have submitted")
  }
}
