import express from "express";
import {
  addGame,
  getGames,
  checkAuth,
  authAdmin,
} from "../controllers/controllers";

const router = express.Router();

router.post("/add-game", addGame);

router.post("/get-game", getGames);

router.post("/auth-token", checkAuth);

router.post("/auth", authAdmin);

export default router;
