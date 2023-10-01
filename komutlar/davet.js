const discord = require('discord.js'); //modüller
const db = require("inflames.db")

exports.run = async (client, message, args) => {
    const embed = new discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle("zLyqen | Ekonomi")
    .setDescription(`[Bot Davet](https://discord.com/oauth2/authorize?client_id=1147520218336346162&scope=bot&permissions=8) , \n[Bot Destek Sunucusu](https://discord.gg/CrvQ7b5n)`)
    .setFooter(`zLyqen Bot ekonomi botu`)
    message.channel.send({ embeds: [embed] })
}
exports.conf = {
  enabled: true, //kullanıma açık mı değil mi
  guildOnly: true, //dmde kullanıma açık mı değil mi
  aliases: ["d"], //kısayollar
  permLevel: 0 //perm level mainde karşıliklar yazar
};
  
exports.help = {
 name: "davet", //komutu çalıştıracak olan kelime
 description: "",//açıklama (isteğe bağlı)
 usage: ""//kullanım (isteğe bağlı)
};