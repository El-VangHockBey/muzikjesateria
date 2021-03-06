const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "yardım",
  aliases: ["help"],
  description: "Display all commands and descriptions",
  execute(message) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
      .setTitle(`${message.client.user.username} Yardım Menüsü`)
      .setDescription("Tüm komutların listesi")
      .setColor("#F8AA2A");

    commands.forEach((cmd) => {
      helpEmbed.addField(
        `**${message.client.prefix}${cmd.name} ${cmd.aliases ? `(${cmd.aliases})` : ""}**`,
        `${cmd.description}`,
        true
      );
    });

    helpEmbed.setTimestamp();
    helpEmbed.setColor("RANDOM")

    return message.channel.send(helpEmbed).catch(console.error);
  }
};
