const bodyParser = require('body-parser')
const exphbs = require('express-handlebars')
const path= require('path')
const server = require('express')
const app = server()

app.use(bodyParser.json())
app.use(server.urlencoded({extended:false}))

//view engine
app.set('views', path.join(__dirname,'views'))
app.engine('.hbs', exphbs({    
    extname:'hbs',
    layoutsDir:path.join(app.get('views'),'layouts'),
    partialsDir:path.join(app.get('views'),'partials'),
    defaultLayout:'main'
}))
app.set('view engine', '.hbs')

//routing
app.use(require('./routes')(server))

const port = (process.env.PORT || 3000)

app.listen(port,(res)=>{
    console.log(`app listen on port: ${port}`)
})