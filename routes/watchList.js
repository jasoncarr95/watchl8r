const express = require('express')
const router = express.Router()
const watchListController = require('../controllers/watchList') 
const { ensureAuth, ensureGuest } = require('../middleware/auth')

router.get('/', ensureAuth, watchListController.getTodos)

router.post('/createTodo', watchListController.createTodo)

router.put('/markComplete', watchListController.markComplete)

router.put('/markIncomplete', watchListController.markIncomplete)

router.delete('/deleteTodo', watchListController.deleteTodo)

module.exports = router