const fs = require('fs');
const { MessageAttachment, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'redpanda',
    description: 'Sends a red panada picture :panda_face:',
    execute(message, args){

        const file1 = new MessageAttachment('/Users/jovan/Desktop/Projects/CodingProject/DiscordBots/AkaneBot/redpanda/redpanda1.jpg');
        const redpanda1Embed = new MessageEmbed()
        .setTitle('Red Panda')
        .setImage('attachment://redpanda1.jpg')
        .setFooter(message.author.username, message.author.displayAvatarURL())
        .setTimestamp()
        .setColor("#900B78");

        const file2 = new MessageAttachment('/Users/jovan/Desktop/Projects/CodingProject/DiscordBots/AkaneBot/redpanda/redpanda2.jpg');
        const redpanda2Embed = new MessageEmbed()
        .setTitle('Red Panda')
        .setImage('attachment://redpanda2.jpg')
        .setFooter(message.author.username, message.author.displayAvatarURL())
        .setTimestamp()
        .setColor("#900B78");

        const file3 = new MessageAttachment('/Users/jovan/Desktop/Projects/CodingProject/DiscordBots/AkaneBot/redpanda/redpanda3.jpg');
        const redpanda3Embed = new MessageEmbed()
        .setTitle('Red Panda')
        .setImage('attachment://redpanda3.jpg')
        .setFooter(message.author.username, message.author.displayAvatarURL())
        .setTimestamp()
        .setColor("#900B78");

        const file4 = new MessageAttachment('/Users/jovan/Desktop/Projects/CodingProject/DiscordBots/AkaneBot/redpanda/redpanda4.jpg');
        const redpanda4Embed = new MessageEmbed()
        .setTitle('Red Panda')
        .setImage('attachment://redpanda4.jpg')
        .setFooter(message.author.username, message.author.displayAvatarURL())
        .setTimestamp()
        .setColor("#900B78");
        
        let content = [{ embeds: [redpanda1Embed], files: [file1] }, { embeds: [redpanda2Embed], files: [file2] }, { embeds: [redpanda3Embed], files: [file3] }, { embeds: [redpanda4Embed], files: [file4] }]
        message.channel.send(content[Math.floor(Math.random() * content.length)])
        
    }

}