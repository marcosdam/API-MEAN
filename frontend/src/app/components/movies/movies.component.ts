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
  // Vars para select
  selectOption: any;
  options = [
    {
      name: 'Option 1',
      value: 1
    },
    {
      name: 'Option 2',
      value: 2
    },
    {
      name: 'Option 3',
      value: 3
    }
  ];

  // Vars para arrays
  myCountry: string;
  myGenre: string;
  myWriter: string;
  myActor: string;

  // Inyectar movieService en el constructor
  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.getMovies(); // Inicializar array al arrancar
    document.addEventListener('DOMContentLoaded', function (){
      var elems = document.querySelectorAll('select');
      var instances = M.FormSelect.init(elems);
    });
  }

  // Añadir y Actualizar pelis con addMovie
  addMovie(selectedMovie: Movie, movieForm: NgForm) {
    // Si la peli tiene un id (existe), la actualizo, si no la creo (nueva)
    if (selectedMovie._id){
      this.movieService.putMovie(selectedMovie)
        .subscribe(res => {
          this.resetForm(movieForm);
          M.toast({html: 'Updated Succesfully'});
          this.getMovies(); // Actualiza la lista
        });
    } else {
    console.log('peli: ', selectedMovie, 'formulario:', movieForm);
    this.movieService.postMovie(selectedMovie)
      .subscribe(res => {
        console.log('res: ', res);
        M.toast({html: 'Saved Succesfully'});
        this.getMovies();
      });
    }
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
    this.movieService.selectedMovie = movie;
  }

  deleteMovie(_id: string) {
    // Pedir confirmación para borrar
    if (confirm('Are your sure you want to delete this?')){
      this.movieService.deleteMovie(_id)
        .subscribe(res => {
          M.toast({html: 'Deleted movie'});
          this.getMovies(); // Actualizar lista después de borrar
        });
    }
  }

  // Func para select (Mostrar elemento por consola)
  select(){
    console.log('SelectOption: ', this.selectOption);
  }
}
