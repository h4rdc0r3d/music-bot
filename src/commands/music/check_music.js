const commando = require("discord.js-commando");

class CheckMusicCommand extends commando.Command {
  constructor(client) {
    super(client, {
      name: "check",
      group: "music",
      memberName: "check",
      description: "Tells you the song playing right now"
    });
  }

  async run(message, args) {
    // is it in a connection?
    let serverQueue = server.get(message.guild.id);
    if(!message.member.voiceChannel){
        return message.channel.send("and now");
    }
    if(!serverQueue){
      return message.channel.send('?');

    }

    return message.channel.send(`Now Playing: ${serverQueue.queue[0].title}`);
  }
}

module.exports = CheckMusicCommand;
