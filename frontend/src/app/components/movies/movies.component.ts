import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {MovieService} from "../../services/movie.service";
import {Movie} from "../../models/movie";

// Var para utilizar Materialize
declare var M: any;

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
    this.getMovies(); // Inicializar array al arrancar
  }

  addMovie(selectedMovie: Movie, movieForm: NgForm) {
    console.log('peli: ', selectedMovie, 'formulario:', movieForm);
    this.movieService.postMovie(selectedMovie)
      .subscribe(res => {
        console.log('res: ', res);
        M.toast({html: 'Saved Succesful'});
        this.getMovies();
      });
  }

  addCountry(){
    if (this.movieService.selectedMovie.countries[0] === ''){
      this.movieService.selectedMovie.countries.splice(0,1);
    }
    this.movieService.selectedMovie.countries.push(this.myCountry); // Añadir country a la lista
    this.myCountry = '';  // Reiniciar var
  }

  addGenre() {
    if (this.movieService.selectedMovie.genres[0] === ''){
      this.movieService.selectedMovie.genres.splice(0,1);
    }
    this.movieService.selectedMovie.genres.push(this.myGenre); // Añadir género a la lista
    this.myGenre = '';  // Reiniciar variable
  }

  addWriter() {
    if (this.movieService.selectedMovie.writers[0] === ''){
      this.movieService.selectedMovie.writers.splice(0,1);
    }
    this.movieService.selectedMovie.writers.push(this.myWriter); // Añadir escritor a la lista
    this.myWriter = '';  // Reiniciar variable
  }

  addActor() {
    if (this.movieService.selectedMovie.actors[0] === ''){
      this.movieService.selectedMovie.actors.splice(0,1);
    }
    this.movieService.selectedMovie.actors.push(this.myActor); // Añadir actor a la lista
    this.myActor = '';  // Reiniciar variable
  }

  resetForm(movieForm?: NgForm) {
    if (movieForm) {
      movieForm.reset();
      this.movieService.selectedMovie = new Movie();  // Resetear formulario (nuevo objeto vacío para no resetear tod0)
    }
  }

  getMovies() {
    // Recoger las películas de mi API
    this.movieService.getMovies()
      .subscribe(res => {
        this.movieService.movies = res as Movie[];
        console.log('res: ', res);
      });
  }

  editMovie(movie: Movie) {

  }

  deleteMovie(_id: string) {

  }
}
