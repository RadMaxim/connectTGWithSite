const exp = require('express');
const app = exp();

const PORT = process.env.PORT || 8080;

app.use(exp.json());

app.get('/', (req, res) => {
    res.send('products api running new deploy');
});

app.get('/ping', (req, res) => {
    res.send('PONG')
});
// /products

// /users


app.listen(8080, () => {
    console.log('Server is listenin on PORT :' + PORT);
})