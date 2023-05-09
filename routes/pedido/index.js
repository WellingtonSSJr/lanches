const express = require('express')
const router = express.Router()

router.get('/pedido', (req, res)=>{
    res.render('pedido')
})

module.exports = router