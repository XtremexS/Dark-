module.exports = {
    name: "mute",
    description: "mutes the mentioned user",
  
    execute(message, args) {
      const mutedRole = message.guild.roles.cache.find(
        (role) => role.name === "Mute"
      );
  
      const target = message.mentions.members.first();
  
      if (!mutedRole) {
        message.channel.send("Cannot find mute role.");
      } else {
        target.roles.add(mutedRole);
        message.channel.send("I has been sucessfully zipped your annoying friend!");
    
      }
    },
  };