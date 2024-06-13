const Telebot = require('telebot')
const bot = new Telebot('6567440090:AAGC0oKTz-R9jKOxQUDmevEmvKc7r_RT8m0')
bot.on('text',(msg)=>{
    let id = msg.chat.id
    bot.sendMessage(id, "hello")
})
bot.start();