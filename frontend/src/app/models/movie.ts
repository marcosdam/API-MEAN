export class Movie {
  myimdb = {id: '', rating: null, votes: null};
  myTomato = {meter: null, image: '', rating: null, reviews: null, fresh: null, consensus: '',
    userMeter: null, userRating: null, userReviews: null};
  myAwards = {wins: null, nominations: null, text: ''};

  constructor() {
    this._id= '';
    this.title= '';
    this.year= 0;
    this.rated= '';
    this.runtime= 0;
    this.countries= [''];
    this.genres= [''];
    this.director= '';
    this.writers= [''];
    this.actors= [''];
    this.plot= '';
    this.poster= '';
    this.imdb = this.myimdb;
    this.tomato = this.myTomato;
    this.metacritic = null;
    this.awards = this.myAwards;
    this.type = '';
  }

  _id: string;
  title: string;
  year: number;
  rated: string;
  runtime: number;
  countries: [string];
  genres: [string];
  director: string;
  writers: [string];
  actors: [string];
  plot: string;
  poster: string;
  imdb: {
    id: string;
    rating: number;
    votes: number;
  };
  tomato: {
    meter: number;
    image: string;
    rating: number;
    reviews: number;
    fresh: number;
    consensus: string;
    userMeter: number;
    userRating: number;
    userReviews: number;
  };
  metacritic: number;
  awards: { wins: number; nominations: number; text: string };
  type: string;
}
