const express = require('express');     // Traer módulo express
const router = express.Router();    // Traer Router de exprees
const movieCtrl = require('../controllers/movieController');


// Routes
router.get('/', movieCtrl.getMovies);
router.post('/', movieCtrl.createMovie);


module.exports = router;
