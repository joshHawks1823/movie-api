import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
// import { HelloComponent } from "./hello/hello.component";

import { SearchComponent } from "./search/search.component";
import { MovieService } from "./movie.service";
import { AppRoutingModule } from "./app-routing.module";
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  imports: [AppRoutingModule, BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule,],
  declarations: [AppComponent, SearchComponent, LoginComponent, SignupComponent],
  bootstrap: [AppComponent],
  providers: [MovieService]
})
export class AppModule { }
