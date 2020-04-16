import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  apiUrl:string = 'http://localhost:4000/myprofile/';

  constructor(private http: HttpClient) { }
  public getList(){
    let reqHeaders =  new HttpHeaders({
      'Content-Type': 'application/json',
      "Authorization" : localStorage.getItem("token")
     })
     return this.http.get(`${this.apiUrl}/profiles`, {
       headers:reqHeaders
     });
  }

  public saveToMoviesWatched(movie:any) {
    let reqHeaders =  new HttpHeaders({
      'Content-Type': 'application/json',
      "Authorization" : localStorage.getItem("token")
     })
      let body = {movie:movie, profiles:movie
      }
  
      return this.http.post<any>(`${this.apiUrl}createpost`, body, {
        headers: reqHeaders
      });
  }

  delete(id){
    let reqHeaders =  new HttpHeaders({
      'Content-Type': 'application/json',
      "Authorization" : localStorage.getItem("token")
     })
    return this.http.delete(`${this.apiUrl}/movie/delete/${id}`,{
      headers:reqHeaders
    });

 }


}
