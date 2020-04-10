import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
// import { OmdbTestComponent } from "./omdb-test/omdb-test.component";
// import { OmdbService } from "./services/omdb.service.client";
import {MatTableModule, MatTableDataSource} from '@angular/material/table'

// import { SearchComponent } from "./search/search.component";
// import { MovieService } from "./movie.service";

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider'
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ProfileComponent } from './profile/profile.component';
import { AdminPortalComponent } from './admin-portal/admin-portal.component';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { AuthGuardService } from './services/auth-guard.service';
import { RoleGuardService } from './services/role-guard.service';
import { HomeComponent } from './home/home.component';
import { TmdbTestComponent } from "./tmdb-test/tmdb-test.component";
import { MovieComponent } from "./movie/movie.component";
import { FilterPipe } from "./filter.pipe";
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [AppComponent, LoginComponent, SignupComponent, ProfileComponent, AdminPortalComponent, HomeComponent,TmdbTestComponent,
    MovieComponent, FilterPipe],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule, BrowserAnimationsModule, MatSliderModule, MatCardModule, MatDividerModule, MatFormFieldModule, MatTableModule, FlexLayoutModule],
  providers: [ JwtHelperService, {provide:JWT_OPTIONS,useValue:JWT_OPTIONS}, AuthGuardService, RoleGuardService],
  bootstrap: [AppComponent]

})
export class AppModule {}
