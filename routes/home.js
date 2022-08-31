const express = require('express')
const router = express.Router()
const homeController = require('../controllers/home')

router.get('/', homeController.getIndex) 

module.exports = router

// app.get("/", async (request, response) => {
//   const movies = await db
//     .collection("movies")
//     .find({ type: "movie" })
//     .toArray();
//   const shows = await db.collection("movies").find({ type: "show" }).toArray();

//   console.log(`Received a GET a request on '/'`);
//   response.render("index.ejs", { movieItem: movies, showItem: shows });
// });
