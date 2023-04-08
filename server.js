const express = require('express');
const app = express();
const PORT = 3000;

app.set('view engine', 'jsx');
app.engine('jsx', require('jsx-view-engine').createEngine());

app.get('/', (req,res) => {
    res.send('<h1>99 Bottles of Beer on the wall </h1> <br /> <a href="/98">take one down, pass it around</a>');
});

app.get('/98', (req, res) => {
    res.send('<h1>98 Bottles of Beer on the wall!</h1> <a href="/"> take one down, pass it around.</h1>');
});

app.get('/:number_of_bottles', (req, res) => {
    // very tricky if else statement. Never did ${whatever -1}
    if(req.params.number_of_bottles > 0){
        res.send(
            `<h1>${req.params.number_of_bottles} Bottles of Beer on the wall </h1>
            <a href="/${req.params.number_of_bottles -1}"> Take one down, pass it around</a>`
        )
    } else {
        res.send(`<h1>${req.params.number_of_bottles} No more bottles of Beer on the Wall!</h1> <a href='/'> Start Over?</a>`)
    }
})


































app.listen(PORT, () => {
    console.log(`Listening on port #${PORT}`);
})