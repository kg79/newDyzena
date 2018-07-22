const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
const serveStatic = require('serve-static');
const path = require('path');

app.use(serveStatic(path.join(__dirname, 'public')));

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname + '/index.html'));
// })

app.get('/favicon.ico', (req, res) => {
    res.send('')
})

app.listen(PORT, () => console.log('localhost:'+ PORT))


