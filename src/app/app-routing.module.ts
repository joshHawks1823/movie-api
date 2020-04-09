import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { OmdbTestComponent } from "./omdb-test/omdb-test.component";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import { SavedComponent } from "./saved/saved.component";

const routes: Routes = [
  { path: "", component: OmdbTestComponent }, 
  { path: "login", component: LoginComponent}, 
  { path: "signup" , component: SignupComponent},
  { path: "saved", component: SavedComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
