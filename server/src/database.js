// Traer módulo mongoose
const mongoose = require('mongoose');

// URL server (MongoDB Atlas)
const URI = '';
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
};

// .then -> Tod0 bien | .catch -> Capturar error
mongoose.connect(URI)
    .then(db => console.log('DB conectada'))
    .catch(err => console.error(err));

// Exportar conector
module.exports = mongoose;
