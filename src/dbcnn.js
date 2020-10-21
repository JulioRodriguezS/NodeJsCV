const mongoose = require('mongoose')
require('dotenv/config')

mongoose.connect(process.env.DB_CONNECTION,{
    useCreateIndex:true,
    useFindAndModify:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then((db)=>{console.log(`db connected`)})
.catch((err)=>{console.log(`err: ${err}`)})

module.exports = mongoose.connect

