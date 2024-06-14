const exp = require('express');

require("./myTelebot.js")
const app = exp();

const PORT = process.env.PORT || 8080;

app.use(exp.json());

app.get('/', (req, res) => {
    res.send('products api running new deploy with Maxim');
});

app.get('/ping', (req, res) => {
    res.send('PONG')
});
// /products

// /users


app.listen(PORT, () => {
    console.log('Server is listenin on PORT :' + PORT);
})