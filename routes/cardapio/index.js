const express = require('express')
const router = express.Router()

router.get('/cardapio', (req, res)=>{
    res.render('cardapio')
})

module.exports = router