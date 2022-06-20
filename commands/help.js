const Discord = require('discord.js');
const fs = require('fs');
const {MessageEmbed} = require('discord.js')

module.exports = {
    name: 'help',
    description: 'Shows a list of all commands! :sos:',
    execute(message, args){
        let general = '';
        const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

        for(const file of commandFiles){
            const command = require(`../commands/${file}`);
            general += `${command.name} : ${command.description} \n`
        }
        const helpEmbed = new MessageEmbed()
        .setColor("#900B78")
        .setAuthor('1z#2401')
        .addField("List of commands", general, true)
        .setTimestamp();
        message.channel.send({embeds: [helpEmbed]});
    }

}