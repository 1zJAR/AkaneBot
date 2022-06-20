const fs = require('fs');
const { MessageAttachment, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'angry',
    description: 'Sends a angry gif! :angry:',
    execute(message, args){
        const file1 = new MessageAttachment('/Users/jovan/Desktop/Projects/CodingProject/DiscordBots/AkaneBot/angry/angry1.gif');
        const angry1Embed = new MessageEmbed()
        .setTitle('YOU PISS ME OFF DADDY!!!:rage:')
        .setImage('attachment://angry1.gif')
        .setFooter(message.author.username, message.author.displayAvatarURL())
        .setTimestamp()
        .setColor("#900B78");

        const file2 = new MessageAttachment('/Users/jovan/Desktop/Projects/CodingProject/DiscordBots/AkaneBot/angry/angry2.gif');
        const angry2Embed = new MessageEmbed()
        .setTitle('YOU BICH:angry:')
        .setImage('attachment://angry2.gif')
        .setFooter(message.author.username, message.author.displayAvatarURL())
        .setTimestamp()
        .setColor("#900B78");

        const file3 = new MessageAttachment('/Users/jovan/Desktop/Projects/CodingProject/DiscordBots/AkaneBot/angry/angry3.gif');
        const angry3Embed = new MessageEmbed()
        .setTitle('STOPPPPPPPPP!!!!!!!:angry:')
        .setImage('attachment://angry3.gif')
        .setFooter(message.author.username, message.author.displayAvatarURL())
        .setTimestamp()
        .setColor("#900B78");

        const file4 = new MessageAttachment('/Users/jovan/Desktop/Projects/CodingProject/DiscordBots/AkaneBot/angry/angry4.gif');
        const angry4Embed = new MessageEmbed()
        .setTitle('DADDY STOPPPPPP:angry:')
        .setImage('attachment://angry4.gif')
        .setFooter(message.author.username, message.author.displayAvatarURL())
        .setTimestamp()
        .setColor("#900B78");
        
        let content = [{ embeds: [angry1Embed], files: [file1] }, { embeds: [angry2Embed], files: [file2] }, { embeds: [angry3Embed], files: [file3] }, { embeds: [angry4Embed], files: [file4] }]
        message.channel.send(content[Math.floor(Math.random() * content.length)])
        
    }

}