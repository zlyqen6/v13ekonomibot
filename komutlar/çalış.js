const discord = require('discord.js');
const db = require("inflames.db")

exports.run = async (client, message, args) => {
  if (!db.kontrol(`iş_${message.author.id}`)) return message.channel.send({ content: "Çalışmak için bir işe ihtiyacın var iş sahibi olmak için **!iş**", reply: { messageReference: message.id } });
  let iş = db.bul(`iş_${message.author.id}`);
  let ödül = 0;

  // Meslekler ve ödülleri
  switch (iş) {
    case "şoför":
      ödül = Math.floor(Math.random() * 100) + 50;
      break;
    case "şef":
      ödül = Math.floor(Math.random() * 125) + 75;
      break;
    case "mühendis":
      ödül = Math.floor(Math.random() * 150) + 100;
      break;
    case "doktor":
      ödül = Math.floor(Math.random() * 300) + 200;
      break;
    case "avukat":
      ödül = Math.floor(Math.random() * 500) + 300;
      break;
    case "CEO":
      ödül = Math.floor(Math.random() * 750) + 500;
      break;
    default:
      break;
  }

  db.topla(`para_${message.author.id}`, ödül);
  message.channel.send({ content: `Çok çalıştın ve karşılığında **${ödül}** zCoin aldın.`, reply: { messageReference: message.id } });
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["ç"],
  permLevel: 0
};

exports.help = {
  name: "çalış",
  description: "",
  usage: ""
};
