const express = require('express');
const router = express.Router();
const viaje = require('../models/viaje')

router.get('/', async (req, res) => {

    try {
        const arrayViajes = await viaje.find()
        res.render("viajes", {title:"Viajes", content:arrayViajes})
    } catch (e){
        console.log(e)
    }
});

router.get('/nuevo',  (req, res) => {
    res.render('nuevoViaje',{title:'Nuevo Viaje'})
});

router.post('/nuevoViajeCreado', async(req, res) => {
    try {
        const viajeDB = new viaje(req.body)
        await viajeDB.save()
        console.log("listo?")
        res.redirect('/viajes')
    }catch (e){
        console.log(e)
    }
})

module.exports = router