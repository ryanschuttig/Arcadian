const router = require("express").Router();
const authRoutes = require("./auth");
const tetrisRoutes = require("./tetrisScore");
const path = require("path");

// Routes for authentication
router.use("/auth", authRoutes);
router.use("/api", tetrisRoutes);

// If no API routes are hit, send the React app
router.use("*", (req, res) => res.sendFile(path.join(__dirname, "../client/build/index.html")));

module.exports = router;