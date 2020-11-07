module.exports = {
    name: 'among',
    description: "this is a ping command!",
    execute(message, args){
        message.channel.send('@Everyone, who wants to play Among Us?');
    }
}