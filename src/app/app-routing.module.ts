import { NgModule } from "@angular/core";
import { Routes, RouterModule, CanActivate } from "@angular/router";
import { OmdbTestComponent } from "./omdb-test/omdb-test.component";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component"
import { ProfileComponent } from './profile/profile.component';
import { 
  AuthGuardService as AuthGuard 
} from './services/auth-guard.service';
import { 
  RoleGuardService as RoleGuard 
} from './services/role-guard.service';
import { AdminPortalComponent } from './admin-portal/admin-portal.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component:HomeComponent},
  { path: "omdb", component: OmdbTestComponent }, 
  { path: "login", component: LoginComponent}, 
  { path: "signup" , component: SignupComponent},
  { path: 'profile', component: ProfileComponent, 
  canActivate: [AuthGuard],
},
  { path: 'admin-portal', component: AdminPortalComponent,
canActivate: [RoleGuard],
data: {
  expectedRole: 2
}
},
  { path: '**', redirectTo: ''}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
