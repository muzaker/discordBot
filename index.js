const Discord = require("discord.js");
const bot = new Discord.Client();
let {
  getRandomItem,
  addUsers,
  removeUsers,
  sendAzkar,
  send,
  replayId,
  makeMessage,
  updateJson,
  ramadan,
  adminID,
  Hijri
} = require("./src/lib");
let azkar = require("./db/azkar.json");

bot.on("ready", () => {
  console.log(`Logged in as ${bot.user.tag}!`);
});

bot.on("message", (ctx) => {
  if (ctx.content === "مذكر") { 
    let mas = getRandomItem(azkar);
    ctx.reply(makeMessage(mas));
  }
  if (ctx.content === "تاريخ") {
    ctx.reply(Hijri());
  }
});

bot.login(process.env.BOT_TOKEN || getApi());

function getApi() {
  const prompt = require("prompt-sync")();

  const fs = require("fs");

  const api = prompt("What is your api bot? => ");

  const content = "BOT_TOKEN=" + api;

  fs.writeFile(".env", content, () => {});

  return api;
}
