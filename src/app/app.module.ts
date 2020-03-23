import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
// import { HelloComponent } from "./hello/hello.component";

import { SearchComponent } from "./search/search.component";
import { MovieService } from "./movie.service";

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule, AppRoutingModule],
  declarations: [AppComponent, SearchComponent],
  bootstrap: [AppComponent],
  providers: [MovieService]
})
export class AppModule {}
