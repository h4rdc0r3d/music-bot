const commando = require("discord.js-commando");

class SkipMusicCommand extends commando.Command {
  constructor(client) {
    super(client, {
      name: "skip",
      group: "music",
      memberName: "skip",
      description: "skips the song (Requester only!)"
    });
  }

  async run(message, args) {
    // is it in a connection?
    let serverQueue = server.get(message.guild.id);
    if(!message.member.voiceChannel){
        return message.channel.send("~");
    }
    if(!serverQueue){
      return message.channel.send('?');

    }

    if(serverQueue.requester == message.author.username){
      serverQueue.connection.dispatcher.end();
      message.channel.send('!');
    }else{
      message.channel.send('^ㅁ^');
    }
  }
}

module.exports = SkipMusicCommand;
