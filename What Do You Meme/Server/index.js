const express = require('express');
const app = express();
const port = 3000;

//Dictate template to render or response to send
app.get('/', (req,res) => res.send('Hello World'));

//Determine for which to listen to the machine.
app.listen(port, () => console.log(`Example app listening on port ${port}`));