const router = require("express").Router();
const tetrisController = require("../controllers/tetrisScoreController");

// Match front end
router.post("/score", tetrisController.create);
router.get("/tetris", tetrisController.findAll);

module.exports = router;