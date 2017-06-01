const TelegramBotAPI = require('node-telegram-bot-api');
const fs = require('fs');

var config = JSON.parse(fs.readFileSync("config.json")),
	API_KEY = config.API_KEY;

var telegram = new TelegramBotAPI(API_KEY, { polling: true });

var TripA = "TRIP A\n ======\nDeniz Karakay \nAugust van de Ven \nScott Moses \nIsaac Ong \nOana Roșca \nKaisar Arkhan (Yuki) \nDaniel Hsing \nAnshuman Agarwal \nCristian Garcia \nTymon Radzik \nDhruv Shrivastava Sawan Kumar \nJacqueline Bronger \nSoham Sen \nFilip Grzywok \nJustin Du";
var TripB = "TRIP B\n ======\nEvgeny Shulgin \nAlexandru Bratosin\nSergey Popov \nIlya Bizyaev \nSampriti Panda \nTommy Ip \nUtkarsh Dixit \nDhanat Satta-awalo \nCollin Grimm \nMira Yang \nJoshua Pan \nShriank Kanaparti \nShardul Chiplunkar \nMatthew Marting \nRaefaldhi Amartya Junior \nVanisha Kesswani \nMichal Hanus \nSudhanshu Agarwal \n"

var words = [
	"Trip A", "Trip B", "hello"];
var response = [TripA, TripB, "Hi there"];

telegram.on("text", (message) => {
	for (var i = 0; i < words.length; i++) {
		var res = response[i];
		if (message.text.toLowerCase().includes(words[i].toLowerCase())) {
			return telegram.sendMessage(message.chat.id, res, {parse_mode: "Markdown"});
		}
		if (message.text.toLowerCase() == words[i].toLowerCase()) {
			return telegram.sendMessage(message.chat.id, res);
		}
	}
});
