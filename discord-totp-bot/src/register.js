import { Command, Option, register } from 'discord-hono'


const commands = [
	new Command("authenticate", "Issue one-time password to Log in to Google Account")
];

register(
	commands,
	process.env.DISCORD_APPLICATION_ID,
	process.env.DISCORD_TOKEN,
	process.env.DISCORD_GUILD_ID,
);

