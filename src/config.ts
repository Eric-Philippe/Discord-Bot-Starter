/**
 * Fetch environment variables from .env file.
 */
const BOT_TOKEN = process.env.BOT_TOKEN;
const CLIENT_ID = process.env.CLIENT_ID;
const GUILD_ID = process.env.GUILD_ID;

/** See .env | .env.example */

// Check if the environment variables are defined.
if (!BOT_TOKEN || !CLIENT_ID || !GUILD_ID) {
  throw new Error("Missing environment variables.");
}

export { BOT_TOKEN, CLIENT_ID, GUILD_ID };
