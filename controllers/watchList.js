const watchList = require("../models/watchList");
const platformLogo = require("../middleware/platformLogo")


module.exports = {
    // Basic Get request on home page
    getToWatchs: async (req, res) => {
        console.log(req.user);
        try {
            const movies = await watchList.find({ type: "movie" });
            const shows = await watchList.find({ type: "show" });
            console.log(movies);
            res.render("watchList.ejs", { movieItem: movies, showItem: shows });
        } catch (err) {
            console.log(err);
        }
    },
    addItem: async (req, res) => {
        console.log(req.body);
        try {
            await watchList.create({
                title: req.body.title,
                type: req.body.type,
                platform: req.body.platform,
                watched: false,
                user: req.user.id,
                logoURL: platformLogo[req.body.platform]

            });
            console.log("Item added to watchlist!")
            res.redirect("/watchList");
        } catch (err) {
            console.log(err);
        }
    },
};

//  Adding to the database.. DB is named "movies"
// app.post("/addItem", (request, response) => {
//     db.collection("movies")
//     .insertOne({
//         title: request.body.title,
//         type: request.body.type,
//         platform: request.body.platform,
//     })
//     .then((result) => {
//         console.log(`POST request made! Added ${request.body.title}`);
//         //   console.log("Added To Watch List!");
//         response.redirect("/");
//     })
//     .catch((error) => console.error(error));
// });

// app.get("/", async (request, response) => {
//     const movies = await db
//       .collection("movies")
//       .find({ type: "movie" })
//       .toArray();
//     const shows = await db.collection("movies").find({ type: "show" }).toArray();

//     console.log(`Received a GET a request on '/'`);
//     response.render("index.ejs", { movieItem: movies, showItem: shows });
//   });
