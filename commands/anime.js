module.exports = {
    name: 'anime',
    description: "sends a cool role",
    execute(message, args){
       

      let role = message.guild.roles.cache.find(r => r.name === "The Memer");


      if(message.member.roles.cache.some(r => r.name === "The Memer")) {
         message.channel.send('https://animedao.com/animelist/popular');



      } else {
          message.channel.send('Unfortunately, you do not have the correct permissions. Sorry..');
      }


  }
}