const db = require("inflames.db");
const discord = require("discord.js");
module.exports = {
    name: "davet",
    description: "Botun davet linkini atar.",
    async execute(interaction, client) {
        const embed = new discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle("zLyqen| Ekonomi")
        .setDescription(`[Bot Davet](https://discord.com/oauth2/authorize?client_id=1147520218336346162&scope=bot&permissions=8) , \n[Bot Destek Sunucusu](https://discord.gg/CrvQ7b5n)`)
        .setFooter(`zLyqen ekonomi botu`)
      await interaction.reply({ embeds: [ embed ], ephemeral: true });
      return;
    },
  };