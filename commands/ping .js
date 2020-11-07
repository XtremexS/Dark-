module.exports = {
    name: 'ping',
    description: "sends a cool role",
    execute(message, args){
        

       let role = message.guild.roles.cache.find(r => r.name === "The Memer");


        if(message.member.roles.cache.some(r => r.name === "The Memer")) {
          message.channel.send('Pong!');



      }  else {
           message.channel.send('I see that you do not have this role, let me change that :)');
           message.member.roles.add(role).catch(console.error);
       }


  }
}