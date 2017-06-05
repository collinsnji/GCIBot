const TelegramBotAPI = require('node-telegram-bot-api');
const fs = require('fs');

var config = JSON.parse(fs.readFileSync("config.json")),
	API_KEY = config.API_KEY;

var telegram = new TelegramBotAPI(API_KEY, { polling: true });

var TripA = "TRIP A\n ======\nDeniz Karakay\nAugust van de Ven\nScott Moses\nIsaac Ong\nOana Roșca\n\
			Kaisar Arkhan (Yuki)\nDaniel Hsing\nAnshuman Agarwal\nCristian Garcia \nTymon Radzik \n\
			Dhruv Shrivastava Sawan Kumar\nJacqueline Bronger \nSoham Sen \nFilip Grzywok \nJustin Du",

	TripB = "TRIP B\n ======\nEvgeny Shulgin\nAlexandru Bratosin\nSergey Popov\nIlya Bizyaev\nSampriti Panda\n\
			Tommy Ip\nUtkarsh Dixit\nDhanat Satta-awalo \nCollin Grimm\nMira Yang \nJoshua Pan\nShriank Kanaparti\n\
			Shardul Chiplunkar\nMatthew Marting\nRaefaldhi Amartya Junior\nVanisha Kesswani\nMichal Hanus\n\
			Sudhanshu Agarwal\n",

	TripPics = "Google Code-In Photo Album\n\
				---------------------------\n\
				https://goo.gl/photos/z6igidSJYce4Mv3c7",

	HelpMsg = "Usage: @CodeInBot <command>\n\
			  Where <command> is one of:\n\
			      Trip A, Trip B, Trip Pictures\n"

var words = ["Trip A", "Trip B", "Help", "Trip Pictures"];
var response = [TripA, TripB, HelpMsg, TripPics];

telegram.on("text", (message) => {
	if (message.text.substr(0, 10) == "@CodeInBot") {
		for (var i = 0; i < words.length; i++) {
			var res = response[i];
			if (message.text.toLowerCase().includes(words[i].toLowerCase())) {
				return telegram.sendMessage(message.chat.id, res, { parse_mode: "markdown" });
			}
			if (message.text.toLowerCase() == words[i].toLowerCase()) {
				return telegram.sendMessage(message.chat.id, res);
			}
		}
	}
});
