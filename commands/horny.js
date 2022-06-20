const fs = require('fs');
const { MessageAttachment, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'horny',
    description: 'Sends a horny SFW gif :smiling_imp:',
    execute(message, args){
        const file1 = new MessageAttachment('/Users/jovan/Desktop/Projects/CodingProject/DiscordBots/AkaneBot/horny/horny1.gif');
        const horny1Embed = new MessageEmbed()
        .setTitle('ONI CHANNNNN!!!!')
        .setImage('attachment://horny1.gif')
        .setFooter(message.author.username, message.author.displayAvatarURL())
        .setTimestamp()
        .setColor("#900B78");

        const file2 = new MessageAttachment('/Users/jovan/Desktop/Projects/CodingProject/DiscordBots/AkaneBot/horny/horny2.gif');
        const horny2Embed = new MessageEmbed()
        .setTitle('Wanna go to my room baby? :white_heart:')
        .setImage('attachment://horny1.gif')
        .setFooter(message.author.username, message.author.displayAvatarURL())
        .setTimestamp()
        .setColor("#900B78");

        const file3 = new MessageAttachment('/Users/jovan/Desktop/Projects/CodingProject/DiscordBots/AkaneBot/horny/horny3.gif');
        const horny3Embed = new MessageEmbed()
        .setTitle('BABEEEE WHAT YOU DOINGGGGGGG')
        .setImage('attachment://horny3.gif')
        .setFooter(message.author.username, message.author.displayAvatarURL())
        .setTimestamp()
        .setColor("#900B78");

        const file4 = new MessageAttachment('/Users/jovan/Desktop/Projects/CodingProject/DiscordBots/AkaneBot/horny/horny4.gif');
        const horny4Embed = new MessageEmbed()
        .setTitle('Its time to get dirty :hot_face:')
        .setImage('attachment://horny4.gif')
        .setFooter(message.author.username, message.author.displayAvatarURL())
        .setTimestamp()
        .setColor("#900B78");

        const file5 = new MessageAttachment('/Users/jovan/Desktop/Projects/CodingProject/DiscordBots/AkaneBot/horny/horny5.gif');
        const horny5Embed = new MessageEmbed()
        .setTitle('hwa slosh :heart: pant??!!! :hot_face:')
        .setImage('attachment://horny5.gif')
        .setFooter(message.author.username, message.author.displayAvatarURL())
        .setTimestamp()
        .setColor("#900B78");

        const file6 = new MessageAttachment('/Users/jovan/Desktop/Projects/CodingProject/DiscordBots/AkaneBot/horny/horny6.gif');
        const horny6Embed = new MessageEmbed()
        .setTitle('You Like That Daddy? :hot_face:')
        .setImage('attachment://horny6.gif')
        .setFooter(message.author.username, message.author.displayAvatarURL())
        .setTimestamp()
        .setColor("#900B78");

        let content = [{ embeds: [horny1Embed], files: [file1] }, { embeds: [horny2Embed], files: [file2] }, { embeds: [horny3Embed], files: [file3] }, { embeds: [horny4Embed], files: [file4] }, { embeds: [horny5Embed], files: [file5] }, { embeds: [horny6Embed], files: [file6] }]
        message.channel.send(content[Math.floor(Math.random() * content.length)])
        
    }

}