const bodyParser = require('body-parser')
const exphbs = require('express-handlebars')
const path = require('path')
const server = require('express')
const app = server()

//static files this is necesary to recognize in the host the public routes 
//of css, img, js...
app.use('/public', server.static(path.join(__dirname, 'public')))

//interpreter
app.use(bodyParser.json())
app.use(server.urlencoded({ extended: false }))

//view engine
/*we need to pass the views directory over the app set and get for the app otherwise will dont run*/
app.set('views', path.join(__dirname, 'views'))
app.engine('.hbs', exphbs({
    extname: 'hbs',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    defaultLayout: 'main',
    helpers: require('./helpers')
}))
app.set('view engine', '.hbs')

//routing
const routes = require('./routes')
routes(app, server)

//listening
const port = (process.env.PORT || 3003)
app.listen(port, (res) => {
    console.log(`app listen on port: ${port}`)
})