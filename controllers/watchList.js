const watchList = require("../models/watchList");

module.exports = {
    // Basic Get request on home page
    getToWatchs: async (req, res) => {
        console.log(req.user);
        try {
            const movies = await watchList.find({ type: "movie" });
            const shows = await watchList.find({ type: "show" });
            res.render("watchList.ejs", { movieItem: movies, showItem: shows });
        } catch (err) {
            console.log(err);
        }
    },
};

// app.get("/", async (request, response) => {
//     const movies = await db
//       .collection("movies")
//       .find({ type: "movie" })
//       .toArray();
//     const shows = await db.collection("movies").find({ type: "show" }).toArray();
  
//     console.log(`Received a GET a request on '/'`);
//     response.render("index.ejs", { movieItem: movies, showItem: shows });
//   });