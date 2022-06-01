'use strict';

// update cmd script

// Packages for developing slash cmds
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v10');

// Config Variables
const token = process.env['token']
const clientID = process.env['clientID']

// Array of cmds
const cmds = [];

const rest = new REST({ version: '10' }).setToken(token);

(async () => {
  try {
    console.log('Started refreshing application (/) commands.');

    await rest.put(Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID), { body: commands });

    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
})();