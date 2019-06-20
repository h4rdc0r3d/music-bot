const commando = require("discord.js-commando");

class NewTeamCommand extends commando.Command {
  constructor(client) {
    super(client, {
      name: "new_team",
      group: "team",
      memberName: "new_team",
      description: "creates a new team"
    });
  }

  async run(message, args) {
    currentTeamMembers = [];
    message.reply("@_@ ");
  }
}

module.exports = NewTeamCommand;
