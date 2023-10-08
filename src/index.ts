import { Events } from "discord.js";

import client from "client";
import { commands } from "commands";

import User from "UserProfileManager";

/**
 * ``once`` is a method that allows you to listen to an event only once.
 *  Here we're listening to the bot is ``ready`` event.
 */
client.once(Events.ClientReady, () => {
  console.log("Ready!");

  client.application?.commands.set(commands);
});

/**
 * ``on`` is a method that allows you to listen to an event.
 *  Here we're listening to the bot is ``message`` event.
 *
 * See the documentation for more events:
 * https://old.discordjs.dev/#/docs/discord.js/main/typedef/Events
 */
client.on(Events.MessageCreate, async (msg) => {
  // We don't want the bot to respond to other bots.
  if (msg.author.bot) return;

  // Here we're checking if the user exists in the database.
  const doesUserExist = await User.doesExist(msg.author.id);

  /**
   * In a real production case, we would cache that information in order to avoid
   * making a request to the database every time a user sends a message.
   */

  // If the user doesn't exist, we create it in the database.
  if (!doesUserExist) await User.create(msg.author.id);
  else {
    // Pick a random number between 1 and 10.
    const randomXp = Math.floor(Math.random() * 10) + 1;

    // Add the random number to the user's xp.
    await User.addXp(msg.author.id, randomXp);
  }
});

client.on(Events.InteractionCreate, async (i) => {
  /** @SLASH_COMMANDS */
  if (i.isCommand()) {
    const slashCommand = commands.find((c) => c.name === i.command?.name);

    if (!slashCommand) {
      i.followUp({ content: "Command not found" });
      return;
    }

    await i.deferReply();

    slashCommand.run(i);
  }
});
