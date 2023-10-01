const discord = require('discord.js'); //modüller
const db = require("inflames.db");
const ms = require("parse-ms");

exports.run = async (client, message, args) => {
  let times = await db.fetch(`yazıturasüresi_${message.author.id}`);
  let saniye = 1000 * 7;
  if (times !== null && saniye - (Date.now() - times) > 0) {
    let time = ms(saniye - (Date.now() - times));
    message.channel.send({ content: `Bu komutu tektar kullanmak için **${time.hours ? time.hours + "saat" : ""} ${time.minutes ? time.minutes + "dakika" : ""} ${time.seconds ? time.seconds + "saniye" : ""} ${time.milliseconds ? time.milliseconds + "salise" : ""}** beklemelisin!`, reply: { messageReference: message.id } }).then(msg => setTimeout(() => msg.delete(), time.seconds * 1000));
    return;
  }
  let bahis = parseInt(args[0])
  if (isNaN(bahis) === "true") message.channel.send({ content: `Bahis olarak bir sayı gir`, reply: { messageReference: message.id } });
  if (!db.kontrol(`para_${message.author.id}`)) return message.channel.send({ content: "Malesef hiç paran bulunmuyor.", reply: { messageReference: message.id } });
  if (db.bul(`para_${message.author.id}`) < bahis) return message.channel.send({ content: "Malesef bu kadar paran bulunmuyor.", reply: { messageReference: message.id } });
  if (!bahis) return message.channel.send({ content: "Ne kadar bahis oynamak istiyorsun?", reply: { messageReference: message.id } });
  if (bahis > 100000) return message.channel.send({ content: "En fazla 1000000 zCoin bahis oynayabilirsin.", reply: { messageReference: message.id } });
  if (bahis === 0) return message.channel.send({ content: "En az 1 zCoin bahis oynamalısın.", reply: { messageReference: message.id } });
  var çalmayın = ["kazandın", "kaybettin", "kazandın", "kaybettin", "kazandın", "kazandın"]
  var Covid = çalmayın[Math.floor(Math.random() * çalmayın.length)];
  if (Covid === "kazandın") {
    db.topla(`para_${message.author.id}`, parseInt(bahis))
    message.channel.send({ content: `<:3199trade:1158109506350366800> Yaşasın bahisi **kazandın**! Oynanan bahis: ${bahis}`, reply: { messageReference: message.id } });
  }
  if (Covid === "kaybettin") {
    db.çıkar(`para_${message.author.id}`, parseInt(bahis))
    message.channel.send({ content: `<a:9550cryingghosst:1158109809212670042>    Olamaz bahisi **kaybettin**! Oynanan bahis: ${bahis}`, reply: { messageReference: message.id } });
  }
  db.yaz(`yazıturasüresi_${message.author.id}`, Date.now());
}
exports.conf = {
  enabled: true, //kullanıma açık mı değil mi
  guildOnly: true, //dmde kullanıma açık mı değil mi
  aliases: ["yazı-tura", "yt", "cf"], //kısayollar
  permLevel: 0 //perm level mainde karşıliklar yazar
};

exports.help = {
  name: "yazıtura", //komutu çalıştıracak olan kelime
  description: "",//açıklama (isteğe bağlı)
  usage: ""//kullanım (isteğe bağlı)
};