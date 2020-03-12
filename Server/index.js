const express = require('express');
const gameController = require('./controllers/game');

const app = express();
const port = 3000;


//Dictate template to render or response to send
app
    .use(express.json())
    .use(express.urlencoded({ extended : true }))
    .use(express.static(__dirname + '/../client/dist'))
    .get('/', (req,res) => res.send('Hello World') )
    .use('/game', gameController)

    /* FIX CATCH ALL
    .use((req,res) => {
        const homePath = joi 
        res.sendFile(__dirname + '/../client/dist/index.html')});
        */
//Determine for which to listen to the machine.
app.listen(port, () => console.log(`Example app listening on port ${port}`))