import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"],
})
export class SignupComponent implements OnInit {
  newEmail: string = "";
  username: string = "";
  password: string = "";

  constructor(private http: HttpClient) {}

  ngOnInit() {}
  login() {
    let formData = {
      user: {
        newEmail: this.newEmail,
        username: this.username,
        password: this.password,
      },
    };
    this.http
      .post<any>("http://localhost:4000/user/createuser", formData)
      .subscribe(
        (res) => {
          console.log(res);
          localStorage.setItem("token", res.sessionToken);
        },
        (err) => {
          console.log(err);
        }
      );
  }
}
