//  Adding to the database.. DB is named "movies"
app.post("/addItem", (request, response) => {
    db.collection("movies")
      .insertOne({
        title: request.body.title,
        type: request.body.type,
        platform: request.body.platform,
        icon: icons[request.body.platform],
      })
      .then((result) => {
        console.log(`POST request made! Added ${request.body.title}`);
        //   console.log("Added To Watch List!");
        response.redirect("/");
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


app.get("/movies", async (request, response) => {
  const movies = await db
    .collection("movies")
    .find({ type: "movie" })
    .toArray();
  const shows = await db.collection("movies").find({ type: "show" }).toArray();

  console.log(movies[movies.length - 1]);

  // console.log(`Received a GET a request on '/movies'`);
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
