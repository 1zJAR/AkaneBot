const fs = require('fs');
const { MessageAttachment, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'ily',
    description: 'Sends a ily text or gif :heart:',
    execute(message, args){
        const file1 = new MessageAttachment('/Users/jovan/Desktop/Projects/CodingProject/DiscordBots/AkaneBot/ily/ily1.gif');
        const ily1Embed = new MessageEmbed()
        .setTitle('I LUV U BABE :heart:')
        .setImage('attachment://ily1.gif')
        .setFooter(message.author.username, message.author.displayAvatarURL())
        .setTimestamp()
        .setColor("#900B78");

        const file2 = new MessageAttachment('/Users/jovan/Desktop/Projects/CodingProject/DiscordBots/AkaneBot/ily/ily2.gif');
        const ily2Embed = new MessageEmbed()
        .setTitle('I LUV U BABY :white_heart:')
        .setImage('attachment://ily2.gif')
        .setFooter(message.author.username, message.author.displayAvatarURL())
        .setTimestamp()
        .setColor("#900B78");

        const file3 = new MessageAttachment('/Users/jovan/Desktop/Projects/CodingProject/DiscordBots/AkaneBot/ily/ily3.gif');
        const ily3Embed = new MessageEmbed()
        .setTitle('GIV ME KISS MWUAA :white_heart:')
        .setImage('attachment://ily3.gif')
        .setFooter(message.author.username, message.author.displayAvatarURL())
        .setTimestamp()
        .setColor("#900B78");

        let content = [`I love you baby :white_heart:`, `Luv you daddy :heart:`,{ embeds: [ily1Embed], files: [file1] }, `Giv me kisses :kissing_heart:`, { embeds: [ily2Embed], files: [file2] }, { embeds: [ily3Embed], files: [file3] }]
        message.channel.send(content[Math.floor(Math.random() * content.length)])
        
    }

}