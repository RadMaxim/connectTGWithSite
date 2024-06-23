import exp from 'express'
import config from 'config'
import './myTelebot.js'
import {bot} from './myTelebot.js'
import path from 'path'
import fs from 'fs'
import body_parser from 'body-parser'

// const PDFDocument = require('pdfkit');
const app = exp();

const PORT = config.get('PORT') || 8080;

// app.use(exp.json());
app.use(body_parser.json())
app.use(body_parser.urlencoded({ extended: true }));

app.use(exp.static(path.join('client')));
app.get('/', (req, res) => {

    let indexHTML = fs.readFileSync(path.join('client','index.html'))

    res.sendFile(indexHTML)
 

    // res.send('products api running new deploy with Maxim');
});


app.get('/ping', (req, res) => {
    res.send('PONG')
});
app.post('/data',(req, res)=>{
    
    let datas = req.body
    console.log(datas)
    let pathClients = path.join("clients","clients.json")
    
    let clients =JSON.parse(fs.readFileSync(pathClients,{encoding:"utf-8"}))
 
    clients = Array.from(clients)
    clients.push(Object(datas))
    
    fs.writeFile(pathClients,JSON.stringify(clients,null,2),(err)=>{
        console.log(err)
    })
    // bot.sendDocument(config.get("ID"),)
    res.redirect("/")
    
})
// /products

// /users


app.listen(PORT,'0.0.0.0', () => {
    console.log('Server is listenin on PORT :' + PORT);
})
bot.connect()