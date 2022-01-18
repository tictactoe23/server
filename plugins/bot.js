import TelegramBot from "node-telegram-bot-api";
import config from "../config/config";

const bot = new TelegramBot(config.TOKEN, {});
const chatId = config.CHAT_ID;

export const sendGame = (game) => {
  try {
    let msg = `🎮 <b>Информация об игре</b>\n\n`;
    msg += `<b>Номер:</b> ${game.id}\n`;
    msg += `<b>Победитель:</b> ${game.win.toUpperCase()}\n`;
    msg += `<b>Количество ходов:</b> ${game.move}\n`;
    bot.sendMessage(chatId, msg, { parse_mode: "HTML" });
  } catch (e) {
    console.log(e);
  }
};

export default bot;
