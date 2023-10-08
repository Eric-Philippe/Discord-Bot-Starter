import { Client, GatewayIntentBits } from "discord.js";

/**
 * Refer to tsconfig.json for the module resolution
 * and path mapping configuration.
 */
import { BOT_TOKEN } from "config";

// Create a new client instance
// Intents are a way for you to tell the Discord API what you want to listen to.
// Here we're listening to the bot is ready event, and the message event.
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMessages,
  ],
});

/**
 * Login to Discord with your client's token.
 * /!\ Make sure you've added your token to the .env file !
 */
client.login(BOT_TOKEN);

/**
 * Export the client instance in order to access it
 * everywhere in your code.
 */
export default client;
