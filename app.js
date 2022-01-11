const express = require('express');


const app = express();

const port = process.env.PORT || 7000
app.set('view engine', 'ejs')
app.set('views', __dirname+'/views')

app.use(express.static(__dirname+'/public'))

//Rutas Web
app.use('/', require('./router/rutasweb'))
app.use('/autos', require('./router/autos'))

app.listen(port, () => {
    console.log('Server running on port '+port)
});