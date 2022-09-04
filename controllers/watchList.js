const watchList = require("../models/watchList");

module.exports = {
    // Basic Get request on home page
    getToWatchs: async (req, res) => {
        console.log(req.user);
        try {
            const movies = await ToWatch
                .collection("movies")
                .find({ type: "movie" })
                .toArray();
            const shows = await ToWatch
                .collection("movies")
                .find({ type: "show" })
                .toArray();

            console.log(`Received a GET a request on '/'`);
            response.render("index.ejs", {
                movieItem: movies,
                showItem: shows,
            });
        } catch (err) {
            console.log(err);
        }
    },
    // addItem: async (req, res) => {
    //     try {
    //         await ToWatch.create({
    //             ToWatch: req.body.ToWatchItem,
    //             completed: false,
    //             // has the logged in user ID
    //             userId: req.user.id,
    //         });
    //         console.log("ToWatch has been added!");
    //         res.redirect("/ToWatchs");
    //     } catch (err) {
    //         console.log(err);
    //     }
    // },
    // markWatched: async (req, res) => {
    //     try {
    //         await ToWatch.findOneAndUpdate(
    //             { _id: req.body.ToWatchIdFromJSFile },
    //             {
    //                 completed: true,
    //             }
    //         );
    //         console.log("Marked Complete");
    //         res.json("Marked Complete");
    //     } catch (err) {
    //         console.log(err);
    //     }
    // },
    // markIncomplete: async (req, res) => {
    //     try {
    //         await ToWatch.findOneAndUpdate(
    //             { _id: req.body.ToWatchIdFromJSFile },
    //             {
    //                 completed: false,
    //             }
    //         );
    //         console.log("Marked Incomplete");
    //         res.json("Marked Incomplete");
    //     } catch (err) {
    //         console.log(err);
    //     }
    // },
    // deleteToWatch: async (req, res) => {
    //     console.log(req.body.ToWatchIdFromJSFile);
    //     try {
    //         await ToWatch.findOneAndDelete({
    //             _id: req.body.ToWatchIdFromJSFile,
    //         });
    //         console.log("Deleted ToWatch");
    //         res.json("Deleted It");
    //     } catch (err) {
    //         console.log(err);
    //     }
    // },
};
