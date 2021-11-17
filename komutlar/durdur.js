const { canModifyQueue } = require("../util/Util");

module.exports = {
  name: "durdur",
  description: "Çalan Müziği Durdurur",
  execute(message) {
    const queue = message.client.queue.get(message.guild.id);
    if (!queue) return message.reply("şarkı oynatılmıyor").catch(console.error);
    if (!canModifyQueue(message.member)) return;

    if (queue.playing) {
      queue.playing = false;
      queue.connection.dispatcher.pause(true);
      return queue.textChannel.send(`${message.author} ⏸ şarkı durduruldu`).catch(console.error);
    }
  }
};
