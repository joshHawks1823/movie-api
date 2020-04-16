import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { MoviesService } from "../services/omdb.service.client";
import { HttpClient } from '@angular/common/http';
import { SavedService } from '../saved.service';
import { ProfileService } from '../profile.service';
@Component({
  selector: "app-omdb-test",
  templateUrl: "./omdb-test.component.html",
  styleUrls: ["./omdb-test.component.css"],
})
export class OmdbTestComponent implements OnInit {
  title: string;
  movies: any;
  imdbID: string;
  Title: string; 
  Plot: string; 
  Year: string;
  Poster: string;

  @ViewChild("f") searchForm: NgForm;
  constructor(private omdbService: MoviesService, private FilmService: SavedService, private profileService:ProfileService) {}
  ngOnInit(): void {}
  search() {
    // Getting user input
    this.title = this.searchForm.value.title;
    // Calling searchMovie in omdb client service
    this.omdbService.searchMovie(this.title).subscribe((data: any) => {
      this.movies = data.Search;
      console.log(this.movies);
    });
  }

  saveMovie(id){
    let formData = {
    
        imdbID: this.movies[id].imdbID,
        Title: this.movies[id].Title,
        Plot: this.movies[id].Plot,
        Year: this.movies[id].Year,
        Poster: this.movies[id].Poster   
      
   
    };
    
   this.FilmService.saveMovie(formData).subscribe(
      res =>{
        console.log(res)
       
      }, 
      err =>{
        console.log(err)
            }
    )

  }
  saveToMoviesWatched(id){
    let formData = {
    
        movie_id: this.movies[id].imdbID,
        Title: this.movies[id].Title,
        Plot: this.movies[id].Plot,
        Year: this.movies[id].Year,
        Poster: this.movies[id].Poster,
        Rating:this.movies[id].Rating,
        Comments: this.movies[id].Comments   
      
   
    };
    console.log(formData)
   this.profileService.saveToMoviesWatched(formData).subscribe(
      res =>{
        console.log(res)
       
      }, 
      err =>{
        console.log(err)
            }
    )

  }
}

