const commando = require("discord.js-commando");

class AssignClassCommand extends commando.Command {
  constructor(client) {
    super(client, {
      name: "O_O",
      group: "fantasy",
      memberName: "assign_class",
      description: "Start your journey with a random given class"
    });
  }

  async run(message, args) {
    let generalChannel = message.member.guild.channels.find(
      x => x.name === "general"
    );

    let class0 = message.member.guild.roles.find(role => role.name === "Mage");
    let class1 = message.member.guild.roles.find(
      role => role.name === "Warrior"
    );
    let class2 = message.member.guild.roles.find(role => role.name === "Thief");

    let chance = Math.floor(Math.random() * 3);

    if (chance === 0) {
      message.member.addRole(class0);
      generalChannel.send(
        message.member + "1"
      );
    } else if (chance === 1) {
      message.member.addRole(class1);
      generalChannel.send(message.member + "!");
    } else if (chance === 2) {
      message.member.addRole(class2);
      generalChannel.send(
        message.member + "!"
      );
    }

    message.member.send("Your class has been chosen");
  }
}

module.exports = AssignClassCommand;
