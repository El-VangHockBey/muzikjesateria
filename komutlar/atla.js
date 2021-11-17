const { canModifyQueue } = require("../util/Util");

module.exports = {
  name: "atla",
  aliases: ["st"],
  description: "Seçili sıra numarasına atla",
  execute(message, args) {
    if (!args.length || isNaN(args[0]))
      return message
        .reply(`Kullanım: ${message.client.prefix}${module.exports.name} <Sıra Numarası>`)
        .catch(console.error);

    const queue = message.client.queue.get(message.guild.id);
    if (!queue) return message.channel.send("Sıra yok.").catch(console.error);
    if (!canModifyQueue(message.member)) return;
    if (args[0] > queue.songs.length)
      return message.reply(`Sıra sadece ${queue.songs.length} şarkılar uzun!`).catch(console.error);

    queue.playing = true;

    if (queue.loop) {
      for (let i = 0; i < args[0] - 2; i++) {
        queue.songs.push(queue.songs.shift());
      }
    } else {
      queue.songs = queue.songs.slice(args[0] - 2);
    }

    queue.connection.dispatcher.end();
    queue.textChannel.send(`${message.author} ⏭ atlandı ${args[0] - 1} şarkılar`).catch(console.error);
  }
};
