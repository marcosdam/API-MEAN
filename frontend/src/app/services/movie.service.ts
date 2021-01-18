import { Injectable } from '@angular/core';
import {Movie} from "../models/movie";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  // Peli y Lista de pelis
  selectedMovie: Movie;
  movies: Movie[];

  // URL de la API
  readonly URL_API = 'http://localhost:3000/api/movies';

  // Inyectar protocolo HTTP en el const
  constructor(private http: HttpClient) {
    // Iniciar peli
    this.selectedMovie = new Movie();
  }

  // Funciones (GET / POST / PUT / DELETE)
  getMovies(){
    return this.http.get(this.URL_API);
  }
  postMovie(movie: Movie){
    return this.http.post(this.URL_API, movie);
  }
  putMovie(movie: Movie){
    return this.http.put(this.URL_API+`/${movie._id}`, movie);
  }
  deleteMovie(_id: string){
    return this.http.delete(this.URL_API+`/${_id}`);
  }
}
