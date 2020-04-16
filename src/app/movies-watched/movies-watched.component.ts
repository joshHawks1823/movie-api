import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-movies-watched',
  templateUrl: './movies-watched.component.html',
  styleUrls: ['./movies-watched.component.css']
})
export class MoviesWatchedComponent implements OnInit {
watchedLists=[]
  title: string;
  movies: any;
  imdbID: string;
  Title: string; 
  Plot: string; 
  Year: string;
  Poster: string;
  Rating: string;
  Comments: string;

  constructor(private profileService:ProfileService) { }

  ngOnInit(): void {

    this.profileService.getList().subscribe((data: any[]) => {
      console.log(data);
  this.watchedLists = data;
});
  }
  saveToMoviesWatched(id){
    let formData = {
    
        imdbID: this.movies[id].imdbID,
        Title: this.movies[id].Title,
        Plot: this.movies[id].Plot,
        Year: this.movies[id].Year,
        Poster: this.movies[id].Poster,
        Rating:this.movies[id].Rating,
        Comments: this.movies[id].Comments   
      
   
    };
    
   this.profileService.saveToMoviesWatched(formData).subscribe(
      res =>{
        console.log(res)
       
      }, 
      err =>{
        console.log(err)
            }
    )

  }

  public delete(movieid){
    this.profileService.delete(movieid).subscribe((data) => {
      console.log(data)
      this.profileService.getList().subscribe((data: any[]) => {
        console.log(data);
    this.watchedLists = data;
  });
    })
      }
}
