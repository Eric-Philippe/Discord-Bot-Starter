import { CommandInteraction, SlashCommandBuilder } from "discord.js";

import { Command } from "types/Command";

/**
 * @description This command replies with Pong!
 * @type {Command}
 * @doc https://discordjs.guide/creating-your-bot/slash-commands.html#individual-command-files
 */
export const Ping: Command = {
  // Define the command's metadata
  name: "ping",
  description: "Replies with Pong!",
  // Define the command's answer behavior
  run: async (interaction: CommandInteraction) => {
    const replyContent = "Hello there!";

    // Reply to the user
    await interaction.followUp({
      ephemeral: true,
      content: replyContent,
    });
  },
};
