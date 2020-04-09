import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SavedService } from '../saved.service';


@Component({
  selector: 'app-signup',
  templateUrl: './saved.component.html',
  styleUrls: ['./saved.component.css']
})
export class SavedComponent implements OnInit {
  imdbID: string;
  Title: string; 
  Plot: string; 
  Year: string;
  Poster: string;
 
  constructor(private http: HttpClient) { }

  ngOnInit() {}
  saveMovie(){
    let formData = {
      saved: {
        imdbID: this.imdbID,
        Title: this.Title,
        Plot: this.Plot,
        Year: this.Year,
        Poster: this.Poster
      
      }
    };
    this.http.post<any>("http://localhost:4000/saved/createsaved", formData).subscribe(
      res =>{
        console.log(res)
        localStorage.setItem("token", res.sessionToken) 
      }, 
      err =>{
        console.log(err)
            }
    )

  }
}
