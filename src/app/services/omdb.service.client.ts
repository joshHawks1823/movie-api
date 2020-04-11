import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
// Injecting service into module
@Injectable()
export class MoviesService {
  constructor(private http: HttpClient) {}
  searchMovie(title: string) {
    const url = "http://www.omdbapi.com/?apikey=9076ccfd&s=" + title;
    return this.http.get(url).pipe(map((res) => res));
  }
}
