const Discord = require("discord.js");
const discord = require("discord.js");
module.exports = {
  name: "market",
  description: "Satılan ürünler ve fiyatlarını gösterir",
  async execute(interaction, client) {
    let ürünler = new discord.MessageEmbed()
      .setTitle("zLyqen| Ekonomi")
      .setThumbnail(interaction.author.avatarURL({ dynamic: true, format: 'png', size: 1024 }))
      .addField("Tahta olta", `Fiyat: **12500**`)
      .addField("Taş olta", `Fiyat: **15600**`)
      .addField("Altın olta", `Fiyat: **17800**`)
      .addField("Elmas olta", `Fiyat: **21500**`)
      .addField("Tahta balta", `Fiyat: **12500**`)
      .addField("Taş balta", `Fiyat: **15600**`)
      .addField("Altın balta", `Fiyat: **17800**`)
      .addField("Elmas balta", `Fiyat: **21500**`)
      /*
      .addField("On başı", `Fiyat: **10000**`)
      .addField("Yüz başı", `Fiyat: **15000**`)
      .addField("Bin başı", `Fiyat: **20000**`)
      .addField("Albay", `Fiyat: **25000**`)
      .addField("Orgeneral", `Fiyat: **30000**`)
      .addField("Korona", `Fiyat: **40000**`)
      */
      .setFooter(`zLyqen Ekonomi botu sunucumuza gelmeyi unutma "/davet"`)
      .setTimestamp()
    await interaction.reply({ embeds: [ürünler], ephemeral: true });
    return;
  },
};