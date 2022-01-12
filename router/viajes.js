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

router.get('/:id', async(req, res) => {

    const id = req.params.id

    try {
        const viajeDb = await viaje.findOne({_id:id})
        console.log(viajeDb)
        res.render('viajeDetalles', {title:"Detalles del viaje", viaje:viajeDb, find:true})
    }catch (e){
        console.log(e)
        res.render('viajeDetalles', {title:"Detalles del viaje", find:false})
    }
})

router.delete('/delete/:id', async (req, res) => {
    const id = req.params.id

    try {
        const viajeDb = await viaje.findByIdAndDelete({_id:id})

        if (viajeDb){
            res.json({
                estado:true,
                mensaje:"Eliminación realizada correctamente!"
            })
        } else {
            res.json({
                estado:false,
                mensaje:"No se pudo eliminar correctamente!"
            })
        }
    } catch (e){
        console.log(e)
    }
})

router.get('/editar/:id',async (req, res)=>{
    const id = req.params.id
    try {
        const viajeDb = await viaje.findOne({_id:id})
        res.render('editarViaje', {title:"Editar viaje", viaje:viajeDb})
    }catch (e){
        console.log(e)
    }
})

router.put('/editarViaje/:id', async (req, res) => {
    const id = req.params.id
    const body = req.body
    try {
        const viajeDb = await viaje.findByIdAndUpdate(id, body, {useFindAndModify:false})
        res.json({
            estado:true,
            mensaje:"Actualización realizada correctamente!"
        })
    }catch (e){
        console.log(e)
        res.json({
            estado:true,
            mensaje:"La actualización no se ha podido realizar correctamente    !"
        })
    }
})
module.exports = router