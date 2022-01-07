const express = require('express');
const messages = require('./messages')
const cow = require("cowsay")

const app = express();
const port = process.env.PORT || 6000
app.set('view engine', 'ejs')
app.set('views', __dirname+'/views')

app.use(express.static(__dirname+'/public'))

console.log(messages.message1)
console.log(cow.say({text:messages.song}))

app.get('/', (req, res) => {

    res.send(cow.say({text:messages.song}))
});
app.get('/pagina', (req, res) => {

    res.render("index", {title:"Titulo del index", content:"Contenido del index"})
});

app.get('/hola', (req, res) => {

    res.render("hola", {title:"Titulo del hola"})
});
app.listen(port, () => {
    console.log('Server running on port '+port)
});