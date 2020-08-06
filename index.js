const Discord = require ('discord.js');

const client = new Discord.Client ();

client.once ('ready', () => {

  console.log ('Der Bot ist online!');

client.user.setActivity ("Endersucht.tk - Netzwerk")

});

client.on ('message', message => {console.log (message.content); 

});

client.login ('');
