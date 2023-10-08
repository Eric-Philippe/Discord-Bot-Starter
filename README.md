# Discord Bot Starter Kit

This is a starter kit for a Discord bot written in TypeScript and using Bun. The main goal of this project is to provide a simple and easy to use starter kit for anyone who wants to create a Discord bot using TypeScript. it's quick and easy to launch your first bot with this starter kit !

## First Features

### Commands

The starter kit comes with a simple command handler. You can create commands in the `commands` folder. The command handler will automatically load them and make them available in your Discord server.

### XP System

The kit implements a really simple and basic XP system to show you how to use the bun implemented sqlite database. Feel free to improve it and make it better !

### A structured project

The project is structured in a way that makes it easy to understand and to use. You can easily add new commands, events, etc. Also showing a database table manager as in the `src/UserProfileManager.ts` file.

## How to use

### Requirements

- Ubuntu (Or MacOs / WSL), bun is not available on Windows yet

- Bun v1.0.0 or higher [Download Link Here](https://bun.sh)

### Copy the project

```bash
$ git clone https://github.com/Eric-Philippe/Discord-Bot-Starter-Kit.git

> Cloning into 'Discord-Bot-Starter-Kit'...
```

### Install the dependencies

```bash
$ cd Discord-Bot-Starter-Kit
$ bun i
```

### Create the .env file

```bash
$ cp .env.example .env
```

### Create and dump the database

```bash
$ bun run src/database/scripts/dump.ts
```

### Create the Discord Bot

Go on the [Discord Developer Portal](https://discord.com/developers/applications) and create a new application. Then go to the `Bot` tab and create a new bot.

#### Get the bot token

You can get the bot token by clicking on the `Copy` button in the `Token` section and then paste it in the `.env` file in the `BOT_TOKEN` variable.

#### Get the client ID

You can get the client ID on the `General Information` tab. Copy it and paste it in the `.env` file in the `CLIENT_ID` variable.

#### Give the bot the Privileged Gateway Intents

Go back on the `Bot` tab and check the `Presence Intent` and `Server Members Intent` and `Message Content Intent` checkboxes. This will allow the bot to get the list of members in a server and to get the content of a message.

### Invite the bot to your server

Go back on the `Oauth2 -> URL Generator` tab and check the `bot` checkbox.
Then, give your bot the permissions you want it to have and copy the generated URL. Paste it in your browser and select the server you want to invite the bot to.

### Run the bot

Go back to the project folder and run the bot

```bash
bun start

> Ready !
```

or if you want to run it in the background

```bash
bun start &

> Ready !
```

Now you can use your bot !

## How to add a command

### Create the command file

Create a new file in the `src/commands` folder. The file name will be the command name. For example, if you want to create a `ping` command, create a `Ping.ts` file.

I then invite you to read the [Command documentation](https://discordjs.guide/creating-your-bot/slash-commands.html#individual-command-files) !

## Feedback or issues

If you have any feedback or issue, feel free to open an issue on the [GitHub repository](https://github.com/Eric-Philippe/Discord-Bot-Starter-Kit/issues) or if you need any help feel free to contact me on Discord `zaorhion` !

_I would also be really glad to have some feedback on the project !_
