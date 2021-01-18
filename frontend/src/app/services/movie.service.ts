import { Injectable } from '@angular/core';
import {Movie} from "../models/movie";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  // Crear una película
  selectedMovie: Movie;
  // Inyectar protocolo HTTP en el const
  constructor(private http: HttpClient) { }
}
