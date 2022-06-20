const fs = require('fs');
const { MessageAttachment, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'happy',
    description: 'Sends a happy gif :smile:',
    execute(message, args){
        const file1 = new MessageAttachment('/Users/jovan/Desktop/Projects/CodingProject/DiscordBots/AkaneBot/happy/happy1.gif');
        const happy1Embed = new MessageEmbed()
        .setTitle(':smile:')
        .setImage('attachment://happy1.gif')
        .setFooter(message.author.username, message.author.displayAvatarURL())
        .setTimestamp()
        .setColor("#900B78");

        const file2 = new MessageAttachment('/Users/jovan/Desktop/Projects/CodingProject/DiscordBots/AkaneBot/happy/happy2.gif');
        const happy2Embed = new MessageEmbed()
        .setTitle('Happy, happy, happy, happy!')
        .setImage('attachment://happy2.gif')
        .setFooter(message.author.username, message.author.displayAvatarURL())
        .setTimestamp()
        .setColor("#900B78");

        const file3 = new MessageAttachment('/Users/jovan/Desktop/Projects/CodingProject/DiscordBots/AkaneBot/happy/happy3.gif');
        const happy3Embed = new MessageEmbed()
        .setTitle('I cant feel my face when Im with you :smile: but I love it, but I love it, but I love it :smile::white_heart:')
        .setImage('attachment://happy3.gif')
        .setFooter(message.author.username, message.author.displayAvatarURL())
        .setTimestamp()
        .setColor("#900B78");

        const file4 = new MessageAttachment('/Users/jovan/Desktop/Projects/CodingProject/DiscordBots/AkaneBot/happy/happy4.gif');
        const happy4Embed = new MessageEmbed()
        .setTitle(':white_heart::heart::white_heart::heart::white_heart::heart:')
        .setImage('attachment://happy4.gif')
        .setFooter(message.author.username, message.author.displayAvatarURL())
        .setTimestamp()
        .setColor("#900B78");

        let content = [{ embeds: [happy1Embed], files: [file1] }, { embeds: [happy2Embed], files: [file2] }, { embeds: [happy3Embed], files: [file3] }, { embeds: [happy4Embed], files: [file4] }]
        message.channel.send(content[Math.floor(Math.random() * content.length)])
        
    }

}