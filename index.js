const Discord = require("discord.js");
const kick = require("./kick");
require("dotenv").config();
const client = new Discord.Client();

const { HELLO, MEMBERS, ROLE, KICK } = require("./Commands/action");

client.once("ready", () => {
  console.log("ready");
});

client.on("message", (message) => {
  let member = message.guild.member(message.author);
  let Agree = message.guild.roles.cache.find(
    (role) => role.name === "[WILDER]"
  );

  if (message.content.startsWith("[BTZ]")) {
    message.guild.member(member).roles.add(Agree);
  }
  if (message.content.startsWith(ROLE)) {
  }
  if (message.content.startsWith(KICK)) {
    return kick(message);
  }

  if (message.content === HELLO) {
    message.channel.send(`Hey ${message.author} bienvennue sur R_A_R`);
  }

  if (message.content === MEMBERS) {
    message.channel.send(
      `Il y a aujourd'hui un pilote et ${message.guild.memberCount} membres d'équipage !`
    );
  }
});

client.login(process.env.KEY);
