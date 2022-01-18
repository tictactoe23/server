import DataBase from "../plugins/mysql";
import config from "../config/config";
import { sendGame } from "../plugins/bot";

const mysql = new DataBase(config.database);

export const addGame = async (req, res) => {
  var response = { success: false };
  const { body } = req;
  if (body?.win && body?.move) {
    const { insertId } = await mysql.addGame({
      win: body.win,
      move: body.move,
    });
    sendGame({ win: body.win, move: body.move, id: insertId });
    response.success = true;
  }
  res.json(response).status(200);
};

export const getGames = async (req, res) => {
  var response = { success: false };
  const games = await mysql.getGames();
  response.games = games;
  res.json(response).status(200);
};

export const checkAuth = async (req, res) => {
  if (!req.body?.token) return res.status(500).json({ success: false });
  const data = await mysql.getAdmin(req.body?.token);
  if (data[0]) return res.status(200).json({ success: true });
  else return res.status(404).json({ success: false });
};

export const authAdmin = async (req, res) => {
  if (!req.body?.login || !req.body?.password)
    return res
      .status(200)
      .json({ success: false, error: "Укажите все данные" });
  const data = await mysql.getAdmin(req.body?.login);
  if (data[0]) {
    if (data[0].password === req.body.password) {
      return res.status(200).json({ success: true, token: data[0].token });
    } else {
      return res
        .status(200)
        .json({ success: false, error: "Вы ввели неверный пароль" });
    }
  } else {
    return res
      .status(200)
      .json({ success: false, error: "Пользователь не найден" });
  }
};
