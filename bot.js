const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.user.setGame('with ur mommy 8==============D')

var prefix = "!"
client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'ping')) {
		message.channel.sendMessage(`Pong! \`${Date.now() - message.createdTimestamp} ms\``);
	}
});

client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'botinvite')) {
		message.channel.sendMessage('https://discordapp.com/oauth2/authorize/?permissions=2146958591&scope=bot&client_id=454681676929564672');
	}
});

client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'ayy')) {
		message.channel.sendMessage('lmao :alien:');
	}
});

client.login(process.env.BOT_TOKEN);
