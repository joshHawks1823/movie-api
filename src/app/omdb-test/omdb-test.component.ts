import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { OmdbService } from "../services/omdb.service.client";
import { SavedService} from "../saved.service"

@Component({
  selector: "app-omdb-test",
  templateUrl: "./omdb-test.component.html",
  styleUrls: ["./omdb-test.component.css"]
})
export class OmdbTestComponent implements OnInit {
  title: string;
  movies: any;
  message: boolean;
  @ViewChild("f") searchForm: NgForm;
  constructor(private omdbService: OmdbService, 
  private savedService: SavedService) {}
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
  savedClick(index){
    console.log(this.movies[index])
    this.savedService.saveMovie(this.movies[index]).subscribe(response =>{
      this.message = true
    console.log("movie posted")
    })
  }

}
