const commando = require("discord.js-commando");

class DiceRollCommand extends commando.Command {
  constructor(client) {
    super(client, {
      name: "주사위",
      group: "simple",
      memberName: "roll",
      description: "Rolls a 100 sided dice"
    });
  }

  async run(message, args) {
    var chance = Math.ceil(Math.random() * 100);

    message.channel.sendMessage(
      message.author +
        "Rollls... " +
        chance +
        "Dice (1-100)"
    );
  }
}

module.exports = DiceRollCommand;
