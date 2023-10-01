const discord = require('discord.js'); //modüller
const db = require("inflames.db");
const ms = require("parse-ms");

exports.run = async (client, message, args) => {
  let times = await db.fetch(`slotsüresi_${message.author.id}`);
  let saniye = 1000 * 7;
  if (times !== null && saniye - (Date.now() - times) > 0) {
    let time = ms(saniye - (Date.now() - times));
    let mesaj = message.channel.send({ content: `Bu komutu tektar kullanmak için**${time.hours ? time.hours + "saat" : ""} ${time.minutes ? time.minutes + "dakika" : ""} ${time.seconds ? time.seconds + "saniye" : ""} ${time.milliseconds ? time.milliseconds + "salise" : ""}** beklemelisin!`, reply: { messageReference: message.id } }).then(msg => setTimeout(() => msg.delete(), time.seconds * 1000));
    return;
  }
  let bahis = args[0]
  if (isNaN(bahis) === "true") message.channel.send({ content: `Bahis olarak bir sayı gir`, reply: { messageReference: message.id } });
  if (!db.kontrol(`para_${message.author.id}`)) return message.channel.send({ content: "Malesef hiç paran bulunmuyor.", reply: { messageReference: message.id } });
  if (db.bul(`para_${message.author.id}`) < bahis) return message.channel.send({ content: "Malesef bu kadar paran bulunmuyor.", reply: { messageReference: message.id } });
  if (!bahis) return message.channel.send({ content: "Ne kadar bahis oynamak istiyorsun?", reply: { messageReference: message.id } });
  if (bahis > 1000000) return message.channel.send({ content: "En fazla 1000000   zCoin bahis oynayabilirsin.", reply: { messageReference: message.id } });
  if (bahis === 0) return message.channel.send({ content: "En az 1 zCoin bahis oynamalısın.", reply: { messageReference: message.id } });
  var çalmayın = [":eggplant:", ":eggplant:", ":heart:"]
  var slot1 = çalmayın[Math.floor(Math.random() * çalmayın.length)];
  var slot2 = çalmayın[Math.floor(Math.random() * çalmayın.length)];
  var slot3 = çalmayın[Math.floor(Math.random() * çalmayın.length)];
  if(slot1 === slot2 && slot1 === slot3) {
    if(slot1 === ":money_with_wings:") {
      db.topla(`para_${message.author.id}`, 3 * parseInt(bahis))
      db.yaz(`slotsüresi_${message.author.id}`, Date.now());
      return message.channel.send({ content: `
      **Slot 1:** ${slot1}, **Slot 2:** ${slot2}, **Slot3:** ${slot3}
      <:3199trade:1158109506350366800>  Yaşasın oynadığın bahsin **3 katını kazandın**! Oynanan bahis: ${bahis}`, reply: { messageReference: message.id } });
    }
    if(slot1 === ":eggplant:") {
      db.topla(`para_${message.author.id}`, 2 * parseInt(bahis))
      db.yaz(`slotsüresi_${message.author.id}`, Date.now());
      return message.channel.send({ content: `
      **Slot 1:** ${slot1}, **Slot 2:** ${slot2}, **Slot3:** ${slot3}
      <:3199trade:1158109506350366800>  Yaşasın oynadığın bahsin **2 katını kazandın**! Oynanan bahis: ${bahis}`, reply: { messageReference: message.id } });
    }
    if(slot1 === ":heart:") {
      db.yaz(`slotsüresi_${message.author.id}`, Date.now());
      return message.channel.send({ content: `
      **Slot 1:** ${slot1}, **Slot 2:** ${slot2}, **Slot3:** ${slot3}
      <:3199trade:1158109506350366800> Ne kazandın ne kaybettin **berabere** paran geri verildi! Oynanan bahis: ${bahis}`, reply: { messageReference: message.id } });
    }
  } else {
    db.çıkar(`para_${message.author.id}`, parseInt(bahis))
    return message.channel.send({ content: `
    **Slot 1:** ${slot1}, **Slot 2:** ${slot2}, **Slot3:** ${slot3}
    <a:9550cryingghosst:1158109809212670042> Olamaz bahisi **kaybettin**! Oynanan bahis: ${bahis}`, reply: { messageReference: message.id } });
  }
}
exports.conf = {
  enabled: true, //kullanıma açık mı değil mi
  guildOnly: true, //dmde kullanıma açık mı değil mi
  aliases: [], //kısayollar
  permLevel: 0 //perm level mainde karşıliklar yazar
};

exports.help = {
  name: "slot", //komutu çalıştıracak olan kelime
  description: "",//açıklama (isteğe bağlı)
  usage: ""//kullanım (isteğe bağlı)
};