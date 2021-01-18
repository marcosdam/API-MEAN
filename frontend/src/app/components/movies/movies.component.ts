import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {MovieService} from "../../services/movie.service";
import {Movie} from "../../models/movie";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  // Var myCountry
  myCountry: string;

  // Inyectar movieService en el constructor
  constructor(private movieService: MovieService) { }

  ngOnInit() {
  }

  addMovie(selectedMovie: Movie, movieForm: NgForm) {

  }

  addCountry(){
    this.movieService.selectedMovie.countries.push(this.myCountry); // Añadir
    this.myCountry = '';  // Reiniciar var
  }
}
