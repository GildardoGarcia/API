const express = require('express');
let router = express.Router();
let DB = require('../db/db')

// Operaciones especificas para el recurso de 'items'

// GET consultar coleccion de items
router.get('/', (req, res, next) => {
  let items = DB.select('items')
  res.status(200).send(items)
});

// GET consultar item especifico
router.get('/:id', (req, res, next) => {
  let id = parseInt(req.params.id)
  let item = DB.select('items', id)
  res.status(200).send(item)
});

// POST insertar item
router.post('/', (req, res, next) => {
  let item = DB.insert('items', req.body)
  console.log(item)
  res.status(200).send(item)
})

// PUT actualizar item
router.put('/:id', (req, res, next) => {
  let id = parseInt(req.params.id)
  let object = Object.assign(req.body, {id: id})
  let item = DB.update('items', object)
  res.status(200).send(item)
})

// DELETE borrar item
router.delete('/:id', (req, res, next) => {
  let id = parseInt(req.params.id)
  let item = DB.remove('items', id)
  res.status(200).send(item)
})

module.exports = router;
