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



module.exports = router