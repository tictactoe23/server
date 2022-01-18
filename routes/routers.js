const express = require("express");
const {
  addGame,
  getGames,
  checkAuth,
  authAdmin,
} = require("../controllers/controllers");

const router = express.Router();

router.post("/add-game", addGame);

router.post("/get-game", getGames);

router.post("/auth-token", checkAuth);

router.post("/auth", authAdmin);

module.exports = router;
