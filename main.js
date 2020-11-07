const Discord = require('discord.js');

const cheerio = require('cheerio');

const request = require('request');

const prefix = '_';

var servers = {};

const ytdl = require("ytdl-core");

const fs = require('fs');

const client = new Discord.Client();



client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}
 
 
client.once('ready', () => {
    console.log('Dark Mitama is online!');
    client.user.setActivity('Soft Music ??', { type: 'LISTENING'}).catch(console.error);
}); 


client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);

    switch (args[0]) {

        case "poll":
            const Embed = new Discord.MessageEmbed()
                .setColor(0xFFC300)
                .setTitle("Inititate Poll")
                .setDescription("A Simple Thumbs up and down Poll");

            if (!args[0]) {
                message.channel.send(Embed);
                break;
            }

            let msgArgs = args.slice(1).join(" ");

            message.channel.send(msgArgs).then(messageReaction => {
                messageReaction.react("👍");
                messageReaction.react("👎");

            });
            break;
    }

    switch (args[0]) {

        case 'kick':

            const user = message.mentions.users.first();
            if (user) {
                const member = message.guild.member(user);

                if (member) {
                    member.kick('You were removed from the discord server, sorry.').then(() => {
                        message.reply('Sucessfully Nuked the Member');
                    }).catch(err => {
                        message.reply('I was unable to Nuke the Member');
                        console.log(err);
                    })
                } else {
                    message.reply('That user isn\'t in this guild!');
                }
            } else {
                message.reply('you need to specify a person!');
            }
            break;
    }



    switch (args[0]) {
        case 'memes':
            image(message);

            break;
    }



    function image(message) {

        var options = {
            url: "http://results.dogpile.com/serp?qc=images&q=" + "memes from instagram",
            method: "GET",
            headers: {
                "Accept": "text/html",
                "User-Agent": "Chrome"
            }
        };

        request(options, function (error, response, responseBody) {
            if (error) {
                return;
            }

            $ = cheerio.load(responseBody);

            var links = $(".image a.link");

            var urls = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"));

            console.log(urls);

            if (!urls.length) {

                return;
            }

            message.channel.send(urls[Math.floor(Math.random() * urls.length)]);
        });

    }})


client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();


    if (command === 'ping') {
        client.commands.get('ping').execute(message, args);
    } else if (command === 'yt') {
        client.commands.get('yt').execute(message, args);
    } else if (command === 'anime') {
        client.commands.get('anime').execute(message, args);
    } else if (command === 'among') {
        client.commands.get('among').execute(message, args);
    } else if (command === 'mute') {
        client.commands.get('mute').execute(message, args);
    } else if (command === 'unmute') {
        client.commands.get('unmute').execute(message, args);
    }
});

client.login('process.env.token'); 
