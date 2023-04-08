const express = require('express');
const app = express();
const PORT = 3000;

app.set('view engine', 'jsx');
app.engine('jsx', require('jsx-view-engine').createEngine());

app.get('/', (req,res) => {
    res.send('<h1>99 Bottles of Beer on the wall </h1> <br /> <a href="/98">take one down, pass it around</a>');
});

app.get('/98', (req, res) => {
    res.send('<h1>take one down, pass it around</h1>');
});

app.get('/:number_of_bottles', (req, res) => {
    res.send('Hello world!');
})


































app.listen(PORT, () => {
    console.log(`Listening on port #${PORT}`);
})