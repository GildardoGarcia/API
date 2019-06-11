const express = require('express')
let router = express.Router()
let DB = require('../db/db')

// Operaciones especificas para el recurso de 'lots'

// GET consultar coleccion de lots
router.get('/', (req, res, next) => {
    let itemId = parseInt(req.body.itemId)
    let lots = DB.select('lots', null, itemId)
    res.status(200).send(lots)
});

// GET consultar lot especifico
router.get('/:id', (req, res, next) => {
    let id = parseInt(req.params.id)
    let itemId = parseInt(req.body.itemId)
    let lot = DB.select('lots', id, itemId)
    res.status(200).send(lot)
});

// POST insertar lot
router.post('/', (req, res, next) => {
    let lot = DB.insert('lots', req.body)
    res.status(200).send(lot)
})

// PUT actualizar lot
router.put('/:id', (req, res, next) => {
    let id = parseInt(req.params.id)
    let object = Object.assign(req.body, {id: id})
    let lot = DB.update('lots', object)
    res.status(200).send(lot)
})

// DELETE borrar lot
router.delete('/:id', (req, res, next) => {
    let id = parseInt(req.params.id)
    let lot = DB.remove('lots', id)
    res.status(200).send(lot)
})

module.exports = router
