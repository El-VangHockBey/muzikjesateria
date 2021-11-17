module.exports = {
  name: "uptime",
  aliases: ["u"],
  description: "Çalışma süresini kontrol edin",
  execute(message) {
    let seconds = Math.floor(message.client.uptime / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);

    seconds %= 60;
    minutes %= 60;
    hours %= 24;

    return message
      .reply(`Uptime: \`${days} gün(s),${hours} saat, ${minutes} dakika, ${seconds} saniye\``)
      .catch(console.error);
  }
};
 