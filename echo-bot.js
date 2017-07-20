//const mathBattle = require("./services/math-battle");
const stringUtils = require("./utils/strings");
const pathUtils = require("./utils/path-utils");
const serviceUtils = require("./utils/service-utils");

const path = require("path");

const telegram = require('telegram-bot-api');


const api = new telegram({
    token: '85163569:AAF3iyk0B2igKWR7Z0FACxAsxPtmdJQ6Occ',
    updates: {
        enabled: true,
        get_interval: 1000
    }
});

api.on('message', function(message)
{
    if(!message) {
        return;
    }
    let chat_id = message.chat.id;

    let service = serviceUtils.findService(message);
    let command = findCommand(message);
    let data = extractData(message);


    if(!data || data.length < 1) {

        service(command)
            .then(result => sendResponse(chat_Id, result))
            .catch(err => err);
    } else {

        service[command](...data)
            .then(result => sendResponse(chat_id, result))
            .catch(err => err);
    }



    function sendResponse(chatId, message) {

        api.sendMessage({
            chat_id: chatId,
            text: 'message'
        })
            .then(function(message)
            {
                console.log(message);
            })
            .catch(function(err)
            {
                console.log(err);
            });
    }

    function findCommand(message) {
        try {
            return message.text.split(" ")[1];
        } catch(err){
            console.log("Couldn't find command for message :", message);
            return null;
        }
    }

    function extractData(message) {
        try {
                let text = message.text.split(" ");
                text.splice(0, 2);
                return text;

            //return message.substring(stringUtils.getPosition(message, 3) + 1)[1]
        } catch(err){
            console.log("Couldn't find command arguments for message :", message);
            return null;
        }
    }
});

