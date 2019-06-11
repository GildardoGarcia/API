// web framework
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const logger = require('morgan')

// logica para procesar los recursos
const indexRouter = require('./routes/index')
const itemsRouter = require('./routes/items')
const lotsRouter = require('./routes/lots')

let app = express()
// configuracion de servidor e interpretacion de mensajes del cliente
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'public')))

// rutas de los recursos, representa el Nivel 1 de un API REST
app.use('/', indexRouter) // pagina de hola mundo
app.use('/items', itemsRouter) // operaciones hacia el recurso de 'items'
app.use('/lots', lotsRouter) // operaciones hacia el recurso de 'lots'
app.use('/lots/:lotsId/itemId', (req, res, next) => { // operaciones hacia el recurso de 'items' del 'lot'
    let lotsId = parseInt(req.params.lotsId)
    req.body.lotsId = lotsId
    next()
}, itemsRouter)


module.exports = app
