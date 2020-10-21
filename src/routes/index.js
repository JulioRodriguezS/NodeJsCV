const mongoose = require('mongoose')
require('../dbcnn')

module.exports= (server)=>{
    const router = server.Router()
    router.get('/',(req,res,next)=>{
        res.render('index')
    })
    return router
}
