const Discord = require ('discord.js');
const client = new Discord.Client();
const { token } = require("./config.json")
client.on("ready", () => {
    
console.log(`{$client.user.username} ist online!`);

client.user.setActivity("Endersucht.tk - Netzwerk")


});
        
        
client.on("message", function(msg) {

var prefix = "config.prefix"

    if (!message.content.startsWith(prefix) || message.author.bot) return;

const args = message.content.slice(prefix.length).trim().split(' ');
const command = args.shift().toLowerCase();
        
    if(command === "ping") {
    
        msg.channel.send("Pong! Der Ping ist $(Math.round(client.ping)}ms!");


    }
        


});
                
                
client.login(token);
