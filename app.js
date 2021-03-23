const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname + '/styles'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/pages/index.html'))
});

app.get('/work', (req, res) => {
    res.send('World!')
});

app.get('/resume', (req, res) => {
    res.send('World!')
});

app.get('/about', (req, res) => {
    res.send('World!')
});

app.listen(process.env.PORT || 3000, () => {
    console.log(`server started on ${process.env.PORT}`)
})