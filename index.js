const Discord = require("discord.js");
const kick = require("./kick");
const client = new Discord.Client();
const action = require("./Commands/action");
client.once("ready", () => {
  console.log("ready");
});

client.on("message", (message) => {
  if (message.content.startsWith("!kick")) {
    return kick(message);
  }

  if (message.content === action.HELLO) {
    message.channel.send(`Hey ${message.author} bienvennue sur R_A_R`);
  }

  if (message.content === "/members") {
    message.channel.send(
      `Il y a aujourd'hui un pilote et  ${message.guild.memberCount} membres d'équipage !`
    );
  }
});

client.login("ODYwNDA5Mzc5MTcwMDI1NDg0.YN60rQ.ClwoHBJle7t1y1EllLIIgk12FoE");
