const DB = require('./dbConnect');
const datab = new DB();
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.get('/api/items', (req, res) => {
    const d = datab.getItems();
    console.log('blah: ' + d);
    res.json(d);
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "public/index.html"));
});

app.listen(PORT, function (err) {
    if (err) throw err;
    console.log(`Listening on PORT ${PORT}`);
});