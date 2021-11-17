const { canModifyQueue } = require("../util/Util");

module.exports = {
  name: "tekrarla",
  aliases: ["l"],
  description: "Müzik döngüsünü aç / kapat",
  execute(message) {
    const queue = message.client.queue.get(message.guild.id);
    if (!queue) return message.reply("Şarkı yok ki .d").catch(console.error);
    if (!canModifyQueue(message.member)) return;

    // toggle from false to true and reverse
    queue.loop = !queue.loop;
    return queue.textChannel.send(`şarkı döngüsü ${queue.loop ? "**açık**" : "**kapalı**"} `).catch(console.error);
  }
};
