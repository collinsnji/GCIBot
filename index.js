const TelegramBotAPI = require('node-telegram-bot-api');
require('dotenv').config();
const commandOptions = require('./commandOptions')
const failedMessage = `Command not found. Enter command \`/trip help\` to see full list of options`
const http = require('http')

const { API_KEY, PORT, HOST } = process.env
const telegram = new TelegramBotAPI(API_KEY, { webHook : { port : PORT || 443, host : HOST } });
telegram.deleteWebHook()
	.then(telegram.openWebHook())
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

setInterval(function() {
	http.get('https://gcibot16-17.herokuapp.com');
}, 1800000);
