import { Component, OnInit } from '@angular/core';

import { ServersService} from '../servers.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {

movies = [];
comments: string;
constructor(private myReviews: ServersService) { }

  ngOnInit(): void {

this.onLoad()


    }
    onLoad(){
      this.myReviews.getMovie().subscribe((data) => {
        console.log(data)   
        this.movies = data;
         this.reviewDisplay()   
          });
    }


public reviewClick(movieId){
  // console.log(this.comments)
this.myReviews.postReview(movieId, this.comments).subscribe((data)=>{
  // this.movies = data;
  console.log(data)
 this.onLoad()
})
}


public reviewDisplay(){
  // console.log(this.comments)
this.myReviews.getReview().subscribe((data)=>{
  // this.movies = data;
  // console.log(data)
})




}}
