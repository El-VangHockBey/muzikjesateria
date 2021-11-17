module.exports = {
  name: "ping",
  cooldown: 10,
  description: "botun pingini atar",
  execute(message) {
    message.reply(`📈 Botun Pingi ${Math.round(message.client.ws.ping)} ms`).catch(console.error);
  }
};
