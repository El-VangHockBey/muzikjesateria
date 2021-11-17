const { canModifyQueue } = require("../util/Util");

module.exports = {
  name: "geç",
  aliases: ["s"],
  description: "Şu anda çalan şarkıyı atla",
  execute(message) {
    const queue = message.client.queue.get(message.guild.id);
    if (!queue)
      return message.reply("sırada şarkı yok").catch(console.error);
    if (!canModifyQueue(message.member)) return;

    queue.playing = true;
    queue.connection.dispatcher.end();
    queue.textChannel.send(`${message.author} ⏭ şarkı geçildi`).catch(console.error);
  }
};
