import { NgModule } from "@angular/core";
import { Routes, RouterModule, CanActivate } from "@angular/router";

import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import { ProfileComponent } from "./profile/profile.component";
import { AuthGuardService as AuthGuard } from "./services/auth-guard.service";
import { RoleGuardService as RoleGuard } from "./services/role-guard.service";
import { AdminPortalComponent } from "./admin-portal/admin-portal.component";
import { OmdbTestComponent } from "./omdb-test/omdb-test.component";

import { FilmsComponent } from "./films/films.component";
const routes: Routes = [
  { path: "omdb", component: OmdbTestComponent },
  {path: "review", component: FilmsComponent},
  // tmdb

import { TmdbTestComponent } from "./tmdb-test/tmdb-test.component";
// import { MovieComponent } from "./movie/movie.component"
const routes: Routes = [
  { path: "omdb", component: OmdbTestComponent },

  { path: "", component: TmdbTestComponent },
  // { path: "movie", component: MovieComponent },
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignupComponent },
  {
    path: "profile",
    component: ProfileComponent,

    canActivate: [AuthGuard],
  },
  {
    path: "admin-portal",
    component: AdminPortalComponent,
    canActivate: [RoleGuard],
    data: {
      expectedRole: 2,
    },
  },
  { path: "**", redirectTo: "" },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
