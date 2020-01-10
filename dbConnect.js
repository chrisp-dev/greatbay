const mysql = require('mysql');
const connection = () => {
    return mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "password",
        database: "greatbay_db"
    });
}
class DB {
    constructor() {
    }

    async getItems() {
        const conn = connection();
        const data = await conn.connect(function (err) {
            if (err) throw err;
            conn.query("SELECT * FROM items", function (errr, data) {
                if (errr) throw errr;
                conn.end();
            });
        });
        console.log(data);

        return data;
    }
}

module.exports = DB;