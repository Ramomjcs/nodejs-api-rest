const mysql = require('mysql');

const conexao = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'joseramon1999',
    database: 'agenda-petshop',
    insecureAuth : true
});

module.exports = conexao;