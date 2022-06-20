const fs = require('fs');
const { MessageAttachment, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'nsfw',
    description: 'Sends a NSFW gifs',
    execute(message, args){
        message.channel.send('This command is currently in dev...');
    }

}