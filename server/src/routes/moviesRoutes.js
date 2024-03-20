const express = require("express");
const router = express.Router();

const torrentController = require("../controllers/moviesControllers");

router.get("/:id", torrentController.getMovie);
router.get("/", torrentController.getMovies);

module.exports = router;
