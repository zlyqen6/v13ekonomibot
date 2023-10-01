const discord = require('discord.js'); //modüller
const db = require("inflames.db")

exports.run = async (client, message, args) => {

let yardım = new discord.MessageEmbed()
.setTitle("zLyqen | Yardım")
.setThumbnail(client.user.avatarURL({ dynamic: true, format: 'png', size: 1024}))
.addField("<:Help:1158110712485396530>  param / para / env / envanter", `<a:arrow1:1158111105890127912>Envanterinizi incelersiniz.`)
.addField("<:Help:1158110712485396530>  ağaçkes / a / ak", `<a:arrow1:1158111105890127912>Eğer baltanız varsa ağaç kesersiniz.`)
.addField("<:Help:1158110712485396530>  balık-tut / b / bt", `<a:arrow1:1158111105890127912>Eğer oltanız varsa balık tutarsınız.`)
.addField("<:Help:1158110712485396530>  yazı-tura / yazıtura / yt", `<a:arrow1:1158111105890127912>Yazı tura atarsınız şans %50 var mısın?`)
.addField("<:Help:1158110712485396530>  slot", `<a:arrow1:1158111105890127912>Slot oynarsınız şans düşük ama ödülü yüksek.`)
.addField("<:Help:1158110712485396530>  market / m / ürünler / ürün", `<a:arrow1:1158111105890127912>Satılan ürünlere ve fiyatlarını incelersiniz.`)
.addField("<:Help:1158110712485396530>  davet / d", `<a:arrow1:1158111105890127912>Botu sunucunuza ekleyip bize destek olursunuz.`)
.addField("<:Help:1158110712485396530>  günlük / daily", `<a:arrow1:1158111105890127912> Günlük paranızı alırsınız.`)
.addField("<:Help:1158110712485396530>  para-gönder / para-at / send", `<a:arrow1:1158111105890127912>İstediğiniz kişiye bütçenizin yettiği kadar para gönderirsiniz.`)
.addField("<:Help:1158110712485396530>  satın-al / sa", `<a:arrow1:1158111105890127912> İstediğiniz bir eşyayı satın alırsınız.`)
.setFooter(`İsteyen: ${message.author.tag}`)
.setTimestamp()
return message.channel.send({ embeds: [ yardım ], reply: { messageReference: message.id }});;
}
exports.conf = {
  enabled: true, //kullanıma açık mı değil mi
  guildOnly: true, //dmde kullanıma açık mı değil mi
  aliases: ["y","help","h"], //kısayollar
  permLevel: 0 //perm level mainde karşıliklar yazar
};
  
exports.help = {
 name: "yardım", //komutu çalıştıracak olan kelime
 description: "",//açıklama (isteğe bağlı)
 usage: ""//kullanım (isteğe bağlı)
};