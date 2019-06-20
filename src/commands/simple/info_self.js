const commando = require("discord.js-commando");
const discord = require("discord.js");

class InfoSelfCommand extends commando.Command {
  constructor(client) {
    super(client, {
      name: "info",
      group: "simple",
      memberName: "info",
      description: "Learn about me (RedrockBot)"
    });
  }

  async run(message, args) {
    var myInfo = new discord.RichEmbed()
      .setTitle("xyeta")
      .addField("O_O", "Hello, I'm Brizzard bot :c", true)
      .addField("ㅎㅅㅎ", true)
      .setDescription("(^ㅁ^)")
      .setColor("#DC143C")
      .setThumbnail(message.author.avatarURL)
      .setURL("https://www.twitch.tv/")
      .setFooter(":D :D :D :D :D :D :D");

    message.channel.sendEmbed(myInfo);
    message.channel.sendMessage(commando);
  }
}

module.exports = InfoSelfCommand;
