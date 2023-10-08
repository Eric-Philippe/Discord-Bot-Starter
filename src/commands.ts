import { Command } from "types/Command";

// Import all the commands
import { Ping } from "commands/Ping";
import { Profile } from "commands/Profile";
import {
  ChatInputApplicationCommandData,
  CommandInteraction,
} from "discord.js";

/** List of all the bot's commands */
// This approach is useful if you want to dynamically load commands.
// And also allows you to remove commands from the list without having to delete them.
export const commands: Command[] = [Ping, Profile];

export interface CommandRun extends ChatInputApplicationCommandData {
  run: (interaction: CommandInteraction) => void;
}
