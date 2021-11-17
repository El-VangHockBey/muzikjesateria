const { canModifyQueue } = require("../util/Util");

module.exports = {
  name: "bitir",
  description: "Müziği bitirir",
  execute(message) {
    const queue = message.client.queue.get(message.guild.id);

    if (!queue) return message.reply("şarkı yok").catch(console.error);
    if (!canModifyQueue(message.member)) return;

    queue.songs = [];
    queue.connection.dispatcher.end();
    queue.textChannel.send(`${message.author} şarkı bitirildi`).catch(console.error);
  }
};
