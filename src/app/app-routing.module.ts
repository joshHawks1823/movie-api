import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { OmdbTestComponent } from "./omdb-test/omdb-test.component";
const routes: Routes = [{ path: "omdb", component: OmdbTestComponent }];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
