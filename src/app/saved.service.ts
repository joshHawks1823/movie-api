import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Title } from '@angular/platform-browser';
import { movielist } from './interface';

@Injectable()
export class SavedService {
  constructor(private http: HttpClient) {}

  saveMovie(movie: any) {
   let reqHeaders =  new HttpHeaders({
    'Content-Type': 'application/json',
    "Authorization" : localStorage.getItem("token")
   })
    let body = {movie:movie
    }

    return this.http.post<any>('http://localhost:4000/saved/createsaved', body, {
      headers: reqHeaders
    });
  }
}
