const Movie = require('../models/movieModel');

const movieCtrl = {};


// Func getMovies (Request & Response)
movieCtrl.getMovies = async (req, res) => {
    const movies = await Movie.find()   // Devuelve todas las películas y las guarda en const movies (como select en Mongo)
        .catch((err) => {
            console.error(err);
        });
    res.json(movies);
};

// Func createMovie (Request & Response)
movieCtrl.createMovie = async (req, res) => {
    const movie= new Movie(req.body);
    await movie.save()
        .catch((err) => {
            console.error(err);
        });
    res.json({'status': 'Movie isertada correctamente'});
};

module.exports = movieCtrl;
