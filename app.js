const express = require('express');
const app = express();

require('dotenv').config()

const port = process.env.PORT || 7000

//Conexión a base de datos
const mongoose = require('mongoose')

const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@primercluster.b0pfh.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;

mongoose.connect(uri,{useNewUrlParser:true, useUnifiedTopology: true}
).then(() => console.log('La conexión a la base de datos se ha realizado correctamente')
).catch(e => console.log(e))

app.set('view engine', 'ejs')
app.set('views', __dirname+'/views')

app.use(express.static(__dirname+'/public'))

//Rutas Web
app.use('/', require('./router/rutasweb'))
app.use('/autos', require('./router/autos'))
app.use('/viajes', require('./router/viajes'))

app.listen(port, () => {
    console.log('Server running on port '+port)
});