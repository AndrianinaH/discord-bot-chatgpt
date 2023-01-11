const { Client, GatewayIntentBits } = require("discord.js");
const { ask } = require("./ai");
require("dotenv").config();

const bot = new Client({
  intents: [
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.Guilds,
    GatewayIntentBits.MessageContent,
  ],
});

const TRIGGER_MESSAGE = process.env.TRIGGER_MESSAGE;

bot.login(process.env.DISCORD_BOT_TOKEN);

bot.on("ready", () => {
  console.log("The AI bot is online"); //message when bot is online
});

bot.on("messageCreate", async (message) => {
  if (message.content.includes(TRIGGER_MESSAGE)) {
    console.log("🚀 NOOB request: ", message.content);
    const question = message.content.split(TRIGGER_MESSAGE)[1];
    if (question) {
      message.channel.sendTyping();
      const response = await ask(question);
      console.log("🚀 BOT response: ", response);
      message.channel.send(response);
    }
  }
});
