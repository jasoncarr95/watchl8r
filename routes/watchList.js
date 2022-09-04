const express = require('express')
const router = express.Router()
const watchListController = require('../controllers/watchList') 
const { ensureAuth, ensureGuest } = require('../middleware/auth')

router.get('/', ensureAuth, watchListController.getToWatchs)

// router.post('/addItem', watchListController.addItem)

// router.put('/markWatched', watchListController.markWatched)

// router.put('/markIncomplete', watchListController.markIncomplete)

// router.delete('/deleteTodo', watchListController.deleteTodo)

module.exports = router