const discord = require("discord.js"); //modüller
const db = require("inflames.db");

exports.run = async (client, message, args) => {
  if (!db.kontrol(`para_${message.author.id}`))
    return message.channel.send({
      content: "Malesef hiç paran bulunmuyor.",
      reply: { messageReference: message.id },
    });
  let atılacak = message.mentions.users.first();
  if (!atılacak)
    return message.channel.send({
      content: "Kime para atmak istiyorsun?",
      reply: { messageReference: message.id },
    });
  let para = args[1];
  if (!para)
    return message.channel.send({
      content: "Ne kadar para atmak istiyorsun?",
      reply: { messageReference: message.id },
    });
    if (isNaN(para) === "true")
    return message.channel.send({
      content: "Atılacak para olarak bir sayı değeri belirt.",
      reply: { messageReference: message.id },
    });
  let paran = db.bul(`para_${message.author.id}`);
  if (paran < para)
    return message.channel.send({
      content: "Bu kadar paran bulunmuyor.",
      reply: { messageReference: message.id },
    });
  db.topla(`para_${atılacak.id}`, parseInt(para));
  db.çıkar(`para_${message.author.id}`, parseInt(para));
  message.channel.send({
    content: `${atılacak.tag} isimli kişiye, ${para} zCoin gönderildi.`,
    reply: { messageReference: message.id },
  });
};
exports.conf = {
  enabled: true, //kullanıma açık mı değil mi
  guildOnly: true, //dmde kullanıma açık mı değil mi
  aliases: ["gönder", "paragönder", "para-gönder", "paraat", "para-at"], //kısayollar
  permLevel: 0, //perm level mainde karşıliklar yazar
};

exports.help = {
  name: "send", //komutu çalıştıracak olan kelime
  description: "", //açıklama (isteğe bağlı)
  usage: "", //kullanım (isteğe bağlı)
};
