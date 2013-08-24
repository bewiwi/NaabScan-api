var mysql = require('mysql');
var con = mysql.createConnection({
    user : 'naabscan',
    password : 'naabscan',
    database : 'naabscan',
    socketPath : '/var/run/mysqld/mysqld.sock',
});

module.exports = con;
