const discord = require("discord.js"); //modüller
const db = require("inflames.db");

exports.run = async (client, message, args) => {
  if (message.author.id !== "1066079560942223360")
    return message.channel.send({
      content: "Bu komut yapımcıya özeldir.",
      reply: { messageReference: message.id },
    });
    let atılacak = message.mentions.users.first();
    if(!atılacak)  return message.channel.send({
        content: "Rozet verilecek kişiyi etiketleyiniz.",
        reply: { messageReference: message.id },
      });
      if(!args[1]) {
        var rozet = args[0]
      } else {
        var rozet = args[1] 
      }
  if(!rozet)  return message.channel.send({
      content: "Verilecek rozeti yazınız.",
      reply: { messageReference: message.id },
    });
    if(rozet !== "görevli" && rozet !== "hata-avcısı" && rozet !== "destekci" && rozet !== "booster" && rozet !== "tester" && rozet !== "Yapımcı" && rozet !== "premium") return message.channel.send({
        content: "Böyle bir rozet bulunamıyor tüm rozetleri görmek için: **/rozetler** komutunu kullanabilirsiniz.",
        reply: { messageReference: message.id },
      });
      if(rozet === "görevli") var grozet = "<:8098shinybluestaff:1158105944903909446>  Görevli"
      if(rozet === "hata-avcısı") var grozet = "<:4744bughunterbadgediscord:1158105959118413874>  Hata avcısı"
      if(rozet === "destekci") var grozet = "<:6832badgeearlysupporter:1158105963149140090>  Destekci"
      if(rozet === "booster") var grozet = "<:8423booster:1158105947160461352>  Booster"
      if(rozet === "tester") var grozet = "<:4391icontester:1158105957373579315>  Tester"
      if(rozet === "Yapımcı") var grozet = "<a:5663activedeveloperneon:1158105961614032937> Geliştirici"
      if(rozet === "premium") var grozet = "<:1397premiumbot:1158103481874395258> Premium"
    if(!db.kontrol(`rozet_${atılacak.id}`)) {
        db.depola(`rozet_${atılacak.id}`, grozet) 
        return message.channel.send({
            content: `${atılacak.tag} isimli kişiye ${grozet} rozeti verildi.`,
            reply: { messageReference: message.id },
          });
    } else {
        if(!db.bul(`rozet_${atılacak.id}`).includes(grozet)) {
            db.depola(`rozet_${atılacak.id}`, grozet) 
            return message.channel.send({
                content: `${atılacak.tag} isimli kişiye ${grozet} rozeti verildi.`,
                reply: { messageReference: message.id },
              });   
        } else {
        db.sil(`rozet_${atılacak.id}`, grozet) 
        return message.channel.send({
            content: `${atılacak.tag} isimli kişide ${grozet} rozeti olduğu için rozet geri alındı.`,
            reply: { messageReference: message.id },
          });
        }
    }
};
exports.conf = {
  enabled: true, //kullanıma açık mı değil mi
  guildOnly: true, //dmde kullanıma açık mı değil mi
  aliases: [], //kısayollar
  permLevel: 0, //perm level mainde karşıliklar yazar
};

exports.help = {
  name: "rozetver", //komutu çalıştıracak olan kelime
  description: "", //açıklama (isteğe bağlı)
  usage: "", //kullanım (isteğe bağlı)
};
