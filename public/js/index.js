const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', async(req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
    //res.sendFile('index.html');
});

const port = 3000;
app.listen(port, () => {
    console.log("Listening to the port "+port);
})

