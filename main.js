'use strict';

// .LOL Community Discord Bot

// Discord API
const { Client, Intents } = require('discord.js')

// Server
const http = require('http');
const server = require('./server.js')

// Config Variables
const token = process.env['token']

// Creating new Discord client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// Msg listener
client.on('message', msg => {
	console.log(msg.content);
});

// Slash cmd listener
client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;
});

// Bot Token
client.login(token);