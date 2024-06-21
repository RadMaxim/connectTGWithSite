import 'dotenv'
import create from './notion.js'
import  validator from 'validator'
import Telebot from 'telebot'
import config from 'config'
const token = config.get("BOT_TOKEN");

console.log(token)
const bot = new Telebot(token)
let state = ""
let name = ""
let email = ""
bot.on('text',async (msg)=>{
    let id = msg.chat.id
    let text = msg.text
    if (text=="/start") {
    msg.reply.text("Напиши имя: ")
    state = "email"
    return
    }
    if(state=="email"){
        name = text
        msg.reply.text("Напишите email: ")
         state = "sendData"
         return

        
    }
    if (state=="sendData") {
        email = text
        const setData = await create(name, email)
        return
    }

  

    // if (validator.isEmail(msg.text)) {

    //     bot.sendMessage(id, "It is a correct email")  
    // }
    // else {
    //     bot.sendMessage(id, "It is not a correct email")  
    // }
   
})
// bot.start();
export  {bot}