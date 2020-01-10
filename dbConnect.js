const mysql = require('mysql');

const DB = {};

DB.connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "greatbay_db"
});

DB.getItems = function (cb) {
    DB.connection.connect(function (err) {
        if (err) throw err;
        DB.connection.query("SELECT * FROM items", function (errr, data) {
            if (errr) throw errr;
            console.table(data);

            DB.connection.end();
            cb(data);
        });
    });
}

module.exports = DB;