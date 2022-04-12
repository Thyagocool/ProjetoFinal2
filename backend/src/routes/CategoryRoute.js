/*
const router = require('express').Router()
const CategoryController = require('../controllers/CategoryController')

router.get('/', CategoryController.get)

router.get('/:id', CategoryController.getOne)

router.post('/', CategoryController.post)

router.put('/', CategoryController.update)

router.delete('/:id', CategoryController.delete)

module.exports = router

*/

const router = require('express').Router()
const Controllers = require('../controllers')

const controller = Controllers.CategoryController

router.get('/', controller.get)

//router.get('/:id', controller.getOne)

//router.post('/', controller.post)

//router.put('/', controller.update)

//router.delete('/:id', controller.delete)

module.exports = router