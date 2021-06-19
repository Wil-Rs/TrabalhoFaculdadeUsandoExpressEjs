const mysql = require("mysql");

// nome do banco de dados criado no mysql
var database = 'express';

var conexao = mysql.createConnection({
    user: "root",
    password: "root",
    host: "localhost",
    port: 3306
});

// aqui que faz a conexao
conexao.connect((err) => {
    if (err) {
        console.log("Erro ao conectar ao Banco de Dados!", err);
        return
    }
    console.log("\nConexão estabelecida com sucesso!!!");
})

conexao.query('USE ' + database);

console.log('\nEstou usando o Banco de dados: ' + database.toUpperCase());
module.exports = conexao;