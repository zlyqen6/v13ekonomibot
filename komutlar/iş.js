const discord = require("discord.js"); //modüller
const db = require("inflames.db");
const fs = require("fs");

exports.run = async (client, message, args) => {
  
};
exports.conf = {
  enabled: true, //kullanıma açık mı değil mi
  guildOnly: true, //dmde kullanıma açık mı değil mi
  aliases: ["s", "iş"], //kısayollar
  permLevel: 0, //perm level mainde karşıliklar yazar
};

exports.help = {
  name: "iş", //komutu çalıştıracak olan kelime
  description: "", //açıklama (isteğe bağlı)
  usage: "iş", //kullanım (isteğe bağlı)
};
