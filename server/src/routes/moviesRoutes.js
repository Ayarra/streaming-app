const express = require("express");
const router = express.Router();

const torrentController = require("../controllers/moviesControllers");
const test = require("../services/torrentServices");

router.get("/stream", test.stream);
router.get("/:id", torrentController.getMovie);
router.get("/", torrentController.getMovies);

module.exports = router;
