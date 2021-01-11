const express = require('express');     // Traer el módulo express
const morgan = require('morgan');       // Traer el módulo morgan
const cors = require('cors');           // Traer el módulo cors
const {mongoose} = require('./database') // Traer el módulo mongoose

const app = express();

// Settings
app.set('port', process.env.PORT || 3000) // Declarar puerto (cogerá el puerto por defecto del server, y si no, el 3000)


// Middlewares (Intermediarios -> cors, morgan, etc)
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());


// Routes
app.use('/api/movies', require('./routes/movieRoute'));



// Iniciar el server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'))
});
