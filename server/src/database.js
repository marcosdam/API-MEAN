// Traer módulo mongoose
const mongoose = require('mongoose');

// URL server (MongoDB Atlas)
const URI = 'mongodb+srv://root:root@cluster0.t1j0m.mongodb.net/damc2020?retryWrites=true&w=majority';

// .then -> Tod0 bien | .catch -> Capturar error
mongoose.connect(URI)
    .then(db => console.log('DB conectada'))
    .catch(err => console.error(err));

// Exportar conector
module.exports = mongoose;
