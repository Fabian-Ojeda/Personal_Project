const express = require('express');
const router = express.Router();

const autos = [{id:1,name:"Toyota Supra"}, {id:2,name:"Mitsubishi Lancer Evolution IX"},{id:3,name:"Nissan Gtr - R35"}]

router.get('/', (req, res) => {
    res.render("autos", {title:"Autos", content:autos})
});



module.exports = router