import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { FormsModule } from "@angular/forms";
import { TmdbTestComponent } from "./tmdb-test/tmdb-test.component";
import { MovieComponent } from "./movie/movie.component";
import { FilterPipe } from "./filter.pipe";
// import { SearchComponent } from "./search/search.component";
// import { MovieService } from "./movie.service";

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SavedComponent } from './saved/saved.component';
import { SavedService } from './saved.service';
import { ProfileComponent } from './profile/profile.component';
import {MatButtonModule} from '@angular/material/button'; 
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [   AppComponent,
    TmdbTestComponent,
    MovieComponent,
    FilterPipe,
    LoginComponent,
    SignupComponent,
  ],

  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule, BrowserAnimationsModule, MatButtonModule,MatFormFieldModule, MatInputModule, MatCardModule,],
  
  providers: [SavedService],
  bootstrap: [AppComponent]



})
export class AppModule {}
