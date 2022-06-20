const fs = require('fs');
const { MessageAttachment, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'sad',
    description: 'Sends a sad gif of how you feeling :sob:',
    execute(message, args){
        const file1 = new MessageAttachment('/Users/jovan/Desktop/Projects/CodingProject/DiscordBots/AkaneBot/sad/sad1.gif');
        const sad1Embed = new MessageEmbed()
        .setTitle('Stop making me sad baby')
        .setImage('attachment://sad1.gif')
        .setFooter(message.author.username, message.author.displayAvatarURL())
        .setTimestamp()
        .setColor("#900B78");

        const file2 = new MessageAttachment('/Users/jovan/Desktop/Projects/CodingProject/DiscordBots/AkaneBot/sad/sad2.gif');
        const sad2Embed = new MessageEmbed()
        .setTitle('This is how you make me feel :sob:')
        .setImage('attachment://sad2.gif')
        .setFooter(message.author.username, message.author.displayAvatarURL())
        .setTimestamp()
        .setColor("#900B78");

        const file3 = new MessageAttachment('/Users/jovan/Desktop/Projects/CodingProject/DiscordBots/AkaneBot/sad/sad3.gif');
        const sad3Embed = new MessageEmbed()
        .setTitle('This is how you make me feel')
        .setImage('attachment://angry3.gif')
        .setFooter(message.author.username, message.author.displayAvatarURL())
        .setTimestamp()
        .setColor("#900B78");

        const file4 = new MessageAttachment('/Users/jovan/Desktop/Projects/CodingProject/DiscordBots/AkaneBot/sad/sad4.gif');
        const sad4Embed = new MessageEmbed()
        .setTitle(':sob::sob::sob:')
        .setImage('attachment://sad4.gif')
        .setFooter(message.author.username, message.author.displayAvatarURL())
        .setTimestamp()
        .setColor("#900B78");

        const file5 = new MessageAttachment('/Users/jovan/Desktop/Projects/CodingProject/DiscordBots/AkaneBot/sad/sad5.gif');
        const sad5Embed = new MessageEmbed()
        .setTitle('Leave me alone')
        .setImage('attachment://sad5.gif')
        .setFooter(message.author.username, message.author.displayAvatarURL())
        .setTimestamp()
        .setColor("#900B78");
        
        let content = [{ embeds: [sad1Embed], files: [file1] }, { embeds: [sad2Embed], files: [file2] }, { embeds: [sad3Embed], files: [file3] }, { embeds: [sad4Embed], files: [file4] }, { embeds: [sad5Embed], files: [file5] }]
        message.channel.send(content[Math.floor(Math.random() * content.length)])
        
    }

}