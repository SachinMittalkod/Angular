import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
  @Input() rating :number;
  skillrating:string;
  constructor() { }
  ngOnChanges() {
    if (this.rating ==3 || this.rating < 4 ) {
      this.skillrating = 'Good';
    } else if (this.rating === 4 || this.rating<5) {
      this.skillrating = 'Very Good';
    } else if (this.rating == 5) {
      this.skillrating = 'Excellent';
    } 
    else {
      alert("Please Enter out of 5 ")
      this.skillrating = 'NO Rating Specified!';
    }
  }
  ngOnInit(): void {

  }

}






























