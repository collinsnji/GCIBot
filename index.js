const TelegramBotAPI = require('node-telegram-bot-api');
const fs = require('fs');
require('dotenv').config();
const commandOptions = require('./commandOptions')
const failedMessage = `Command not found. Enter command \`/trip help\` to see full list of options`

const { API_KEY } = process.env
const telegram = new TelegramBotAPI(API_KEY);
telegram.openWebHook()
	.then(telegram.startPolling({
		restart: true,
	}))
	.then(() => {
		telegram.on("text", ({ text, chat: { id } }) => {
			if (text.startsWith("/trip")) {
				const output = commandOptions[text.split("/trip")[1].trim().toLowerCase()] || failedMessage;
				return telegram.sendMessage(id, output, {
					parse_mode: "Markdown"
				});
			}
		});
	})
	.catch((err) => {
		console.log(err);
	})
