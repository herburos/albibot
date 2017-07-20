const mathBattle = require("./math-battle");

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
    let chat_id = message.chat.id;

    mathBattle.updateScore(message.text).catch(err => err);

    api.sendMessage({
        chat_id: message.chat.id,
        text: message.text ? message.text : 'This message doesn\'t contain text :('
    })
        .then(function(message)
        {
            console.log(message);
        })
        .catch(function(err)
        {
            console.log(err);
        });
});

