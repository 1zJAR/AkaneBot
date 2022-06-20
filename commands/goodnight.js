const fs = require('fs');
const { MessageAttachment, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'goodnight',
    description: 'Sends a goodnight text or gif :sleeping::zzz:',
    execute(message, args){
        const file1 = new MessageAttachment('/Users/jovan/Desktop/Projects/CodingProject/DiscordBots/AkaneBot/goodnight/goodnight1.gif');
        const goodnight1Embed = new MessageEmbed()
        .setTitle('Goodnight baby, sleep well :kissing_heart::zzz:')
        .setImage('attachment://goodnight1.gif')
        .setFooter(message.author.username, message.author.displayAvatarURL())
        .setTimestamp()
        .setColor("#900B78");

        const file2 = new MessageAttachment('/Users/jovan/Desktop/Projects/CodingProject/DiscordBots/AkaneBot/goodnight/goodnight2.gif');
        const goodnight2Embed = new MessageEmbed()
        .setTitle('Goodnight baby girl, sleep well and hopefuly you have a good day tomorrow :heart:')
        .setImage('attachment://goodnight2.gif')
        .setFooter(message.author.username, message.author.displayAvatarURL())
        .setTimestamp()
        .setColor("#900B78");

        let content = [`Goodnight baby, sleep well :kissing_heart::zzz:`, `Goodnight, my love :heart:`,{ embeds: [goodnight1Embed], files: [file1] }, `Goodnight Daddy:white_heart:`, { embeds: [goodnight2Embed], files: [file2] }]
        message.channel.send(content[Math.floor(Math.random() * content.length)])
        
    }

}