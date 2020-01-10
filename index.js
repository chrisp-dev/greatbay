const DB = require('./dbConnect');
const path = require('path');
const Item = require('./lib/Item');
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.get('/api/items', (req, res) => {
    DB.getItems(function (data, done) {
        res.json(data);
    });
});

app.post('/api/items', (req, res) => {
    const newItem = new Item(req.body);
    console.log('BLAAAAAA', req.body);
    DB.save(newItem, function (data, done) {
        res.json(data);
    });
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "public/index.html"));
});

app.listen(PORT, function (err) {
    if (err) throw err;
    console.log(`Listening on PORT ${PORT}`);
});