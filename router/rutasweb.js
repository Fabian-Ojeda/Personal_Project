const express = require('express');
const router = express.Router();
const cow = require("cowsay");
const messages = require("../messages");


console.log(messages.message1)
console.log(cow.say({text:messages.song}))

router.get('/', (req, res) => {
    res.send(cow.say({text:messages.song}))
});
router.get('/pagina', (req, res) => {
    res.render("index", {title:"Titulo del index", content:"Contenido del index"})
});

router.get('/hola', (req, res) => {
    res.render("hola", {title:"Titulo del hola"})
});

module.exports = router