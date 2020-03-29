import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { OmdbTestComponent } from "./omdb-test/omdb-test.component";
import { FormsModule } from "@angular/forms";
import { OmdbService } from "./services/omdb.service.client";

// import { SearchComponent } from "./search/search.component";
// import { MovieService } from "./movie.service";

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
@NgModule({
  declarations: [AppComponent, OmdbTestComponent,LoginComponent, SignupComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [OmdbService],
  bootstrap: [AppComponent]


})
export class AppModule { }
