const commando = require("discord.js-commando");

class VolumeMusicCommand extends commando.Command {
  constructor(client) {
    super(client, {
      name: "v",
      group: "music",
      memberName: "volume",
      description: "Sets the volume by {value}"
    });
  }

  async run(message, args) {
    // is it in a connection?
    let serverQueue = server.get(message.guild.id);
    if(!message.member.voiceChannel){
        return message.channel.send("1");
    }
    if(!serverQueue){
      return message.channel.send('?');

    }

    if(!args){
        return message.channel.send(`2 ${serverQueue.volume}`);
    }

    serverQueue.connection.dispatcher.setVolumeLogarithmic(args /5);
    serverQueue.volume = args;
}
}

module.exports = VolumeMusicCommand;
