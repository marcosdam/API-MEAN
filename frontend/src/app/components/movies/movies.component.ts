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

  // Vars para arrays
  myCountry: string;
  myGenre: string;
  myWriter: string;
  myActor: string;

  // Inyectar movieService en el constructor
  constructor(private movieService: MovieService) { }

  ngOnInit() {
  }

  addMovie(selectedMovie: Movie, movieForm: NgForm) {
    console.log('peli: ', selectedMovie, 'formulario:', movieForm);
  }

  addCountry(){
    this.movieService.selectedMovie.countries.push(this.myCountry); // Añadir country a la lista
    this.myCountry = '';  // Reiniciar var
  }

  addGenre() {
    this.movieService.selectedMovie.genres.push(this.myGenre); // Añadir género a la lista
    this.myGenre = '';  // Reiniciar variable
  }

  addWriter() {
    this.movieService.selectedMovie.writers.push(this.myWriter); // Añadir escritor a la lista
    this.myWriter = '';  // Reiniciar variable
  }

  addActor() {
    this.movieService.selectedMovie.actors.push(this.myActor); // Añadir actor a la lista
    this.myActor = '';  // Reiniciar variable
  }
}
