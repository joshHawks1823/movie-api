import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Title } from '@angular/platform-browser';
import { movielist } from './interface';



@Injectable()
export class ServersService {
  constructor(private http: HttpClient) {}

  getMovie() {
   let reqHeaders =  new HttpHeaders({
    'Content-Type': 'application/json',
    "Authorization" : localStorage.getItem("token")
   })
   
    

    return this.http.get<any>('http://localhost:4000/myprofile/review', {
      headers: reqHeaders

    });
  }


s

postReview(id, comment: string){
  let body = {profiles:{Comments: comment}}
  let reqHeaders =  new HttpHeaders({
    'Content-Type': 'application/json',
    "Authorization" : localStorage.getItem("token")

  })
  let movie = {id: id}
    return this.http.put<any>(`http://localhost:4000/myprofile/movie/update/${movie.id}`, body, {
      headers: reqHeaders
  }
)}

displayReview(){
  let reqHeaders =  new HttpHeaders({
    'Content-Type': 'application/json',
    "Authorization" : localStorage.getItem("token")
  })
   



}

getReview() {
  let reqHeaders =  new HttpHeaders({
   'Content-Type': 'application/json',
   "Authorization" : localStorage.getItem("token")
  })
  
   

   return this.http.get<any>('http://localhost:4000/myprofile/review', {
     headers: reqHeaders

   });
 }

}



