const express = require('express');     // Traer módulo express
const router = express.Router();    // Traer Router de exprees
const movieCtrl = require('../controllers/movieController');


// Routes
router.get('/', movieCtrl.getMovies);   // GET todas las pelis
router.post('/', movieCtrl.createMovie);    // POST una peli
router.get('/:id', movieCtrl.getOneMovie); // GET una sola peli (:id -> con 2 puntos)
router.put('/:id', movieCtrl.updateMovie); // PUT una peli (actualizar)
router.delete('/:id', movieCtrl.deleteMovie); // DELETE una peli


module.exports = router;
