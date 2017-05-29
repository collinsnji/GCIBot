const TelegramBotAPI = require('node-telegram-bot-api');
const fs = require('fs');

var config = JSON.parse(fs.readFileSync("config.json")),
    API_KEY = config.API_KEY;

var telegram = new TelegramBotAPI(API_KEY, { polling: true });
var TripA = "Deniz Karakay \nAugust van de Ven \nScott Moses \nIsaac Ong \nOana Roșca \nKaisar Arkhan (Yuki) \nDaniel Hsing \nAnshuman Agarwal \nCristian Garcia \nTymon Radzik \nDhruv Shrivastava Sawan Kumar \nJacqueline Bronger \nSoham Sen \nFilip Grzywok \nJustin Du";
var TripB = "Evgeny Shulgin \nAlexandru Bratosin\n Sergey Popov \nIlya Bizyaev \nSampriti Panda \nTommy Ip \n Utkarsh Dixit \nDhanat Satta-awalo \nCollin Grimm \nMira Yang \nJoshua Pan \nShriank Kanaparti \nShardul Chiplunkar \nMatthew Marting \nRaefaldhi Amartya Junior \nVanisha Kesswani \nMichal Hanus \nSudhanshu Agarwal \n"

telegram.on("text", (message) => {
    var messageVal = message.text.toLowerCase();
    switch (messageVal) {
        case "/tripa":
            telegram.sendMessage(message.chat.id, TripA);
            break;
        case "/tripb":
            telegram.sendMessage(message.chat.id, TripB);
            break;
        default:
            break;
    }
});
