const TelegramBotAPI = require('node-telegram-bot-api');
const fs = require('fs');

const config = JSON.parse(fs.readFileSync("config.json")),
	API_KEY = config.API_KEY;
const telegram = new TelegramBotAPI(API_KEY, { polling: true });

const commandOptions = {
	a: "TRIP A\n ======\nDeniz Karakay\nAugust van de Ven\nScott Moses\nIsaac Ong\nOana Roșca\n\
			Kaisar Arkhan (Yuki)\nDaniel Hsing\nAnshuman Agarwal\nCristian Garcia \nTymon Radzik \n\
			Dhruv Shrivastava Sawan Kumar\nJacqueline Bronger \nSoham Sen \nFilip Grzywok \nJustin Du",
	b:  "TRIP B\n ======\nEvgeny Shulgin\nAlexandru Bratosin\nSergey Popov\nIlya Bizyaev\nSampriti Panda\n\
			Tommy Ip\nUtkarsh Dixit\nDhanat Satta-awalo \nCollin Grimm\nMira Yang \nJoshua Pan\nShriank Kanaparti\n\
			Shardul Chiplunkar\nMatthew Marting\nRaefaldhi Amartya Junior\nVanisha Kesswani\nMichal Hanus\n\
			Sudhanshu Agarwal\n",
	pictures:  "Google Code-In Photo Album\n\
				---------------------------\n\
				https://goo.gl/photos/z6igidSJYce4Mv3c7",
	dates: "Trip A: Mon Jun 05 - Thu Jun 08\nTrip B: Mon Jun 26 - Thu Jun 29",
	help: "Usage: /trip <command>\nWhere <command> is one of:\nA, B, Pictures\n(Commands are case insensitive)"
};

const failedMessage = `Command not found. Enter command \`/trip help\` to see full list of options`

telegram.on("text", ({ text, chat: { id } }) => {
	if (text.startsWith("/trip")) {
		const output = commandOptions[text.split("/trip")[1].trim().toLowerCase()] || failedMessage;
		return telegram.sendMessage(id, output);
	}
});
