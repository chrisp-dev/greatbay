const mysql = require('mysql');

const DB = {};

DB.connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "greatbay_db"
});

DB.connection.connect(function (err) {
    if (err) throw err;

});

DB.getItems = function (cb) {
    // DB.connection.connect(function (err) {
    //     if (err) throw err;

    DB.connection.query("SELECT * FROM items", function (errr, data) {
        if (errr) throw errr;
        cb(data);
    });
    // });
}

DB.save = function (data, cb) {
    // DB.connection.connect(function (err) {
    //     if (err) throw err;

    DB.connection.query("INSERT INTO items (name, initial_bid) VALUES (?)", data,
        function (er, data) {
            cb(data);
        });
    // });
}

module.exports = DB;