const { canModifyQueue } = require("../util/Util");

module.exports = {
  name: "ses",
  aliases: ["v"],
  description: "Şu anda çalan müziğin sesini değiştir",
  execute(message, args) {
    const queue = message.client.queue.get(message.guild.id);

    if (!queue) return message.reply("şarkı oynatılmıyor").catch(console.error);
    if (!canModifyQueue(message.member))
      return message.reply("ilk önce sesli kanala katılman gerek!").catch(console.error);

    if (!args[0]) return message.reply(`🔊 Mevcut hacim: **${queue.volume}%**`).catch(console.error);
    if (isNaN(args[0])) return message.reply("ses için bir sayı belirtin").catch(console.error);
    if (Number(args[0]) > 100 || Number(args[0]) < 0 )
      return message.reply("lütfen 0 - 100 arası bir sayı belirtin").catch(console.error);

    queue.volume = args[0];
    queue.connection.dispatcher.setVolumeLogarithmic(args[0] / 100);

    return queue.textChannel.send(`ses **${args[0]}%** ayarlandı`).catch(console.error);
  }
};
