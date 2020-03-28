import { Component } from "@angular/core";
import { FormControl } from "@angular/forms";
import {
  map,
  switchMap,
  debounceTime,
  distinctUntilChanged
} from "rxjs/operators";
import { Observable } from "rxjs";

import { MovieService } from "./movie.service";


@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  searchControl: FormControl;
  movies$: Observable<any[]>;
  title: Observable<any[]>;

  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.searchControl = new FormControl();

    this.movies$ = this.searchControl.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap(searchString =>
        this.movieService.getMovieBySearchTerm(searchString)
      ),
      map((res: any) => res.Search)
    );
  }
}
