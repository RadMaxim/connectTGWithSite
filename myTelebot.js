require('dotenv').config();
const validator = require('validator')
const token = process.env.BOT_TOKEN;

const Telebot = require('telebot')
const bot = new Telebot(token)
bot.on('text',(msg)=>{
    let id = msg.chat.id
    if (validator.isEmail(msg.text)) {

        bot.sendMessage(id, "It is a correct email")  
    }
    else {
        bot.sendMessage(id, "It is not a correct email")  
    }
   
})
bot.start();