const TelegramBotAPI = require('node-telegram-bot-api');
const fs = require('fs');
require('dotenv').config();

const { API_KEY } = process.env
const telegram = new TelegramBotAPI(API_KEY, { polling: true });

const commandOptions = require('./commandOptions')

const failedMessage = `Command not found. Enter command \`/trip help\` to see full list of options`

telegram.on("text", ({ text, chat: { id } }) => {
	if (text.startsWith("/trip")) {
		const output = commandOptions[text.split("/trip")[1].trim().toLowerCase()] || failedMessage;
		return telegram.sendMessage(id, output, {
			parse_mode: "Markdown"
		});
	}
});
