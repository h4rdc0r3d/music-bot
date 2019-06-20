const commando = require("discord.js-commando");

class JoinTeamCommand extends commando.Command {
  constructor(client) {
    super(client, {
      name: "join_team",
      group: "team",
      memberName: "join_team",
      description: "Joins a team"
    });
  }

  async run(message, args) {
    currentTeamMembers.push(message.author);
    message.reply("(^ㅁ^) ");
  }
}

module.exports = JoinTeamCommand;
