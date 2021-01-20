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
    const movie = new Movie({
        title: req.body.title,
        year: req.body.year,
        rated: req.body.rated,
        runtime: req.body.runtime,
        countries: req.body.countries,
        genres: req.body.genres,
        director: req.body.director,
        writers: req.body.writers,
        actors: req.body.actors,
        plot: req.body.plot,
        poster: req.body.poster,
        imdb: req.body.imdb,
        tomato: req.body.tomato,
        metacritic: req.body.metacritic,
        awards: req.body.awards,
        type: req.body.type
    });
    await movie.save()
        .catch((err) => {
            console.error(err);
        });
    res.json({'status': 'Movie insertada correctamente'});
};

// Func getOneMovie (Request & Response)
movieCtrl.getOneMovie = async (req, res) => {
    const movie = await Movie.findById(req.params.id)   // Guardo el resultado de la consulta a la BD
    .catch((err) => {   // Si hay error, sácalo por consola
        console.log(err);
    });
    res.json(movie);    //Si no hay error devuelve la movie en formato .json
};

// Func updateMovie (Request & Response)
movieCtrl.updateMovie = async (req, res) => {
    const movie = {
        title: req.body.title,
        year: req.body.year,
        rated: req.body.rated,
        runtime: req.body.runtime,
        countries: req.body.countries,
        genres: req.body.genres,
        director: req.body.director,
        writers: req.body.writers,
        actors: req.body.actors,
        plot: req.body.plot,
        poster: req.body.poster,
        imdb: req.body.imdb,
        tomato: req.body.tomato,
        metacritic: req.body.metacritic,
        awards: req.body.awards,
        type: req.body.type,
    };
    // Una vez tengo los datos que quiero actualizar -> movie.findById
    await Movie.findByIdAndUpdate(req.params.id, {$set: movie}, {new: true});
    res.json({status: 'Movie actualizada'});
};

// Func deleteMovie (Req & Res)
movieCtrl.deleteMovie = async (req, res) => {
    await Movie.findByIdAndDelete(req.params.id)
        .catch((err) => {
           console.error(err);
        });
    res.json({satatus: 'Movie borrada'});
};

module.exports = movieCtrl;
