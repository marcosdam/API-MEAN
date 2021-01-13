import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MoviesComponent} from "./components/movies/movies.component";


const routes: Routes = [
  {
    path: '',
    component: MoviesComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
