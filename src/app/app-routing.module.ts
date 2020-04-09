import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TmdbTestComponent } from "./tmdb-test/tmdb-test.component";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import { MovieComponent } from "./movie/movie.component";

const routes: Routes = [
  { path: "tmdb", component: TmdbTestComponent },
  { path: "movie", component: MovieComponent },
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignupComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
