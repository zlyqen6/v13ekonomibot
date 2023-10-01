const discord = require("discord.js");
module.exports = {
    name: "yardım",
    description: "Botun komutlarını gösterir.",
    async execute(interaction, client) {
        let yardım = new discord.MessageEmbed()
.setTitle("zLyqen | Yardım")
.setThumbnail(client.user.avatarURL({ dynamic: true, format: 'png', size: 1024}))
.addField("\<:Who:1148515616337178634> param / para / env / envanter", `<:1397premiumbot:1158103481874395258> Envanterinizi incelersiniz.`)
.addField("\<:Who:1148515616337178634> ağaçkes / a / ak", `<:1397premiumbot:1158103481874395258> Eğer baltanız varsa ağaç kesersiniz.`)
.addField("\<:Who:1148515616337178634> balık-tut / b / bt", `<:1397premiumbot:1158103481874395258> Eğer oltanız varsa balık tutarsınız.`)
//.addField("\<:Who:1148515616337178634> çalış / ç", `<:1397premiumbot:1158103481874395258> Eğer iş sahibiyseniz çaışırsınız.`)
.addField("\<:Who:1148515616337178634> yazı-tura / yazıtura / yt", `<:1397premiumbot:1158103481874395258> Yazı tura atarsınız şans %50 var mısın?`)
.addField("\<:Who:1148515616337178634> slot", `<:1397premiumbot:1158103481874395258> Slot oynarsınız şans düşük ama ödülü yüksek.`)
.addField("\<:Who:1148515616337178634> market / m / ürünler / ürün", `<:1397premiumbot:1158103481874395258> Satılan ürünlere ve fiyatlarını incelersiniz.`)
.addField("\<:Who:1148515616337178634> davet / d", `<:1397premiumbot:1158103481874395258> Botu sunucunuza ekleyip bize destek olursunuz.`)
.addField("\<:Who:1148515616337178634> günlük / daily", `<:1397premiumbot:1158103481874395258> Günlük paranızı alırsınız.`)
.addField("\<:Who:1148515616337178634> para-gönder / para-at / send", `<:1397premiumbot:1158103481874395258> İstediğiniz kişiye bütçenizin yettiği kadar para gönderirsiniz.`)
.addField("\<:Who:1148515616337178634> satın-al / sa", `<:1397premiumbot:1158103481874395258> İstediğiniz bir eşyayı satın alırsınız.`)
//.addField("\<:Who:1148515616337178634> sıralama / s", `<:1397premiumbot:1158103481874395258> Genel sıralamayı incelersinsiz.`)
.setFooter(`zLyqen Ekonomi botu sunucumuza gelmeyi unutma "/davet"`)
.setTimestamp()
      await interaction.reply({ embeds: [ yardım ], ephemeral: true });
      return;
    },
  };