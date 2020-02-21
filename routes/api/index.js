const router = require("express").Router();
const noteRoutes = require("./notes");
const userRoutes = require("./users");

// Note routes
router.use("/notes", noteRoutes);
//User Routes
router.use("/users", userRoutes);
// For anything else, render the html page
router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../../client/build/index.html"));
  });

module.exports = router;
