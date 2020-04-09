import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Component({
  selector: "app-tmdb-test",
  templateUrl: "./tmdb-test.component.html",
  styleUrls: ["./tmdb-test.component.css"],
})
export class TmdbTestComponent implements OnInit {
  movies = [];
  title: String;
  searchMovie() {
    const url =
      "https://api.themoviedb.org/3/discover/movie?api_key=e66b49009d48fd4705a0cb67d2808726&page=1&with_genres=27";
    return this.http.get(url).pipe(map((res) => res));
  }
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get(
        "https://api.themoviedb.org/3/discover/movie?api_key=e66b49009d48fd4705a0cb67d2808726&page=1&with_genres=27"
      )
      .subscribe((data: any) => {
        console.log(data);
        this.movies = data.results;
      });
  }
}
