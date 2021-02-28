import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

enum COLORS {
  GREY = "#E0E0E0",
  GREEN = "#76FF03",
  YELLOW = "#FFCA28",
  RED = "#DD2C00"
}

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
})
export class RatingComponent implements OnInit {


  @Input() rating: number;

  @Output() ratingChange: EventEmitter<number> = new EventEmitter();

  constructor() {
    console.log(window.localStorage.getItem("rating"));
    console.log(this);
    this.rating = parseInt(window.localStorage.getItem("rating"));
   }

  rate(index: number) {
    // function used to change the value of our rating 
    // triggered when user, clicks a star to change the rating
    this.rating = index;
    this.ratingChange.emit(this.rating);
    //console.log(this.rating);
    console.log(this);
    window.localStorage.setItem("rating", this.rating.toString());
 }

 getColor(index: number) {
  /* function to return the color of a star based on what
   index it is. All stars greater than the index are assigned
   a grey color , while those equal or less than the rating are
   assigned a color depending on the rating. Using the following criteria:

        1-2 stars: red
        3 stars  : yellow
        4-5 stars: green 
  */
 if(this.isAboveRating(index)){
   return COLORS.GREY;
 }
 switch (this.rating){
   case 1:
   case 2:
     return COLORS.RED;
   case 3:
     return COLORS.GREEN;
   case 4:
   case 5:
     return COLORS.YELLOW;
   default:
     return COLORS.GREY;
 }
}

isAboveRating(index: number): boolean {
  // returns whether or not the selected index is above ,the current rating
  // function is called from the getColor function.
  return index > this.rating;
}

  ngOnInit() {
    this.rating = parseInt(window.localStorage.getItem("rating"));
  }

}
