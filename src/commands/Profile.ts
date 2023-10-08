import UserProfileManager from "UserProfileManager";
import {
  ApplicationCommandOptionType,
  CommandInteraction,
  EmbedBuilder,
  SlashCommandBuilder,
  UserManager,
} from "discord.js";

import { Command } from "types/Command";

/**
 * @description This command replies show the user's profile.
 * @type {Command}
 * @doc https://discordjs.guide/creating-your-bot/slash-commands.html#individual-command-files
 */
export const Profile: Command = {
  // Define the command's metadata
  name: "profile",
  description: "Show the user's profile and xp.",
  options: [
    {
      name: "user",
      description: "The user to show the profile of.",
      type: ApplicationCommandOptionType.User,
      required: false,
    },
  ],

  // Define the command's answer behavior
  run: async (interaction: CommandInteraction) => {
    // Get the user targeted by the command
    const userOption = interaction.options.getUser("user");
    // if the user doesn't exist, we use the user who sent the command
    const targetUser = userOption ?? interaction.user;

    // Get the user's xp
    const userXp = await UserProfileManager.getXp(targetUser.id);

    // Create the embed
    const embed = new EmbedBuilder()
      .setTitle(`${targetUser?.username}'s profile`)
      .addFields([{ name: "XP", value: userXp.toString() }])
      .setColor("Random")
      .setFooter({
        text: `Requested by ${interaction.user.username}`,
        iconURL: interaction.user.avatarURL() ?? undefined,
      });

    // Reply to the user
    await interaction.followUp({
      embeds: [embed],
    });
  },
};
