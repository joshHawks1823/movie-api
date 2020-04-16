import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
username: string = "";
password: string = "";



  constructor(private http: HttpClient) { }

  ngOnInit() {}

  login(){
    let formData = {
      user: {
        username: this.username,
        password: this.password,
       
      
      }
    };
    this.http.post<any>("http://localhost:4000/user/signin", formData).subscribe(
      res =>{
        console.log(res)
        localStorage.setItem("token", res.sessionToken) 
        localStorage.setItem('userType', res.user.userType)
        localStorage.setItem('username', res.user.username)
      }, 
      err =>{
        console.log(err)
            }
    )

  }

}
