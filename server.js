// Basic Express app set up
const express = require("express");
const app = express();

const mongoose = require('mongoose')
const passport = require('passport')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const flash = require('express-flash')
const logger = require('morgan')
const connectDB = require('./config/database')
const mainRoutes = require('./routes/main')
const todoRoutes = require('./routes/todos')


// Loads .env file contents into | `process.env`. Example: 'KEY=value'
require("dotenv").config({ path: "./config/.env" });

// Passport config
require('./config/passport')(passport)

connectDB()

// EJS
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(logger('dev'))
// Sessions
app.use(
    session({
      secret: 'keyboard cat',
      resave: false,
      saveUninitialized: false,
      store: new MongoStore({ mongooseConnection: mongoose.connection }),
    })
  )
  
// Passport middleware
app.use(passport.initialize())
app.use(passport.session())

app.use(flash())


// ROUTES





// Server Responds on main page with rendered EJS... INFO

app.get("/", async (request, response) => {
  const movies = await db
    .collection("movies")
    .find({ type: "movie" })
    .toArray();
  const shows = await db.collection("movies").find({ type: "show" }).toArray();

  console.log(`Received a GET a request on '/'`);
  response.render("index.ejs", { movieItem: movies, showItem: shows });
});

//  Adding to the database.. DB is named "movies"
app.post("/addItem", (request, response) => {
  db.collection("movies")
    .insertOne({
      title: request.body.title,
      type: request.body.type,
      platform: request.body.platform,
    })
    .then((result) => {
      console.log(`POST request made! Added ${request.body.title}`);
      //   console.log("Added To Watch List!");
      response.redirect("/");
    })
    .catch((error) => console.error(error));
});

app.put("/addOneLike", (request, response) => {
  db.collection("movies")
    .updateOne(
      {
        title: request.body.title,
        type: request.body.type,
        likes: request.body.likesS,
      },
      {
        $set: {
          likes: request.body.likesS + 1,
        },
      },
      {
        sort: { _id: -1 },
        upsert: true,
      }
    )
    .then((result) => {
      console.log("Added One Like");
      response.json("Like Added");
    })
    .catch((error) => console.error(error));
});

app.delete("/deleteItem", (request, response) => {
  db.collection("movies")
    .deleteOne({ title: request.body.title })
    .then((result) => {
      console.log("Item Deleted");
      response.json("Item Deleted");
    })
    .catch((error) => console.error(error));
});

app.listen(process.env.PORT || PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.get("/movies", async (request, response) => {
  const movies = await db
    .collection("movies")
    .find({ type: "movie" })
    .toArray();
  const shows = await db.collection("movies").find({ type: "show" }).toArray();

  console.log(`Received a GET a request on '/movies'`);
  response.render("movies.ejs", { movieItem: movies, showItem: shows });
});

app.get("/shows", async (request, response) => {
  const movies = await db
    .collection("movies")
    .find({ type: "movie" })
    .toArray();
  const shows = await db.collection("movies").find({ type: "show" }).toArray();

  console.log(`Received a GET a request on '/shows'`);
  response.render("shows.ejs", { movieItem: movies, showItem: shows });
});
