const Discord = require('discord.js');
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });
const prefix = '>';
const fs = require('fs');
const { MessageAttachment, MessageEmbed } = require('discord.js');

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('Akane bot is online!');
})

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'help'){
        client.commands.get('help').execute(message, args);
    } 
    
    else if(command == 'hi'){
        client.commands.get('hi').execute(message, args);
    } 

    else if(command == 'goodmorning'){
        client.commands.get('goodmorning').execute(message, args);
    } 

    else if(command == 'goodnight'){
        client.commands.get('goodnight').execute(message, args);
    }

    if(command === 'redpanda'){
        client.commands.get('redpanda').execute(message, args);
    } 

    else if(command == 'ily'){
        client.commands.get('ily').execute(message, args);
    } 

    if(command === 'angry'){
        client.commands.get('angry').execute(message, args);
    } 

    if(command === 'sad'){
        client.commands.get('sad').execute(message, args); 
    } 

    else if(command == 'happy'){
        client.commands.get('happy').execute(message, args); 
    } 

    else if(command == 'horny'){
        client.commands.get('horny').execute(message, args); 
    } 

});

//Enter your token for your discord bot
client.login('TOKEN');
