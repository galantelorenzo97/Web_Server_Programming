const express = require('express');

const quoteCards = require('./Game/quoteCards');

const app = express();
const port = 3000;

//Dictate template to render or response to send
app
    .get('/', (req,res) => res.send('Hello World') )
    .get('/game/quoteCards', (req,res) => res.send(quoteCards) );

//Determine for which to listen to the machine.
app.listen(port, () => console.log(`Example app listening on port ${port}`));