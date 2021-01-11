const mongoose = require('mongoose');   // Traer módulo mongoose
const {Schema} = mongoose;    // Traer esquema de mongoose

// Definir esquema
const movieSchema = ({
    title: {type: String, required: true},
    year: {type: Number, required: true},
    rated: {type: String, required: true, default: null},
    runtime: {type: Number, required: true, default: null},
    countries: [{type: String, required: true}],
    genres: [{type: String, required: true, default: null}],
    director: {type: String, required: true, default: null},
    writers: [{type: String, required: true}],
    actors: [{type: String, required: true}],
    plot: {type: String, required: true, default: null},
    poster: {type: String, required: true, default: null},
    imdb: {
        id: String,
        rating: {type: Number, default: null},
        votes: {type: Number, default: null}
    },
    tomato: {
        meter: {type: Number, default: null},
        image: String,
        rating: Number,
        reviews: Number,
        fresh: Number,
        consensus: {type: String, default: null},
        userMeter: Number,
        userRating: Number,
        userReviews: Number
    },
    metacritic: Number,
    awards: {
        wins: Number,
        nominations: Number,
        text: String
    },
    type: {type: String, required: true}
});


module.exports = mongoose.model('Movie', movieSchema, 'APIMongoose');
