import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Title } from '@angular/platform-browser';
import { Watchlist } from './models/watchlist';

@Injectable()
export class SavedService {

  apiUrl: string = 'http://localhost:4000/saved';

  constructor(private http: HttpClient) {}

  public getWatchList(){
    let reqHeaders =  new HttpHeaders({
      'Content-Type': 'application/json',
      "Authorization" : localStorage.getItem("token")
     })
     return this.http.get(`${this.apiUrl}/saved`, {
       headers:reqHeaders
     });
  }

  delete(id){
    let reqHeaders =  new HttpHeaders({
      'Content-Type': 'application/json',
      "Authorization" : localStorage.getItem("token")
     })
    return this.http.delete(`${this.apiUrl}movie/delete/${id}`,{
      headers:reqHeaders
    });

 }

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
