const express = require("express");
const app = express();
const MongoClient = require("mongodb").MongoClient;
const PORT = 6969;
require("dotenv").config();

let db,
  dbConnectionStr = process.env.DB_STRING,
  dbName = "watchlist";

MongoClient.connect(dbConnectionStr, { useUnifiedTopology: true }).then(
  (client) => {
    console.log(`Connected to ${dbName} Database`);
    db = client.db(dbName);
  }
);

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Server Responds on main page with rendered EJS... INFO
app.get("/", (request, response) => {
  db.collection("movies")
    .find()
    .toArray()
    .then((data) => {
      

      response.render("index.ejs", { info: data });
    })
    .catch((error) => console.error(error));
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
        console.log(`POST request made! Added ${request.body.title}`)
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
